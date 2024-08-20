import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: string = '';
  author: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getQuote();  // Fetch the initial quote when the component initializes
  }

  getQuote(): void {
    const params = new HttpParams()
      .set('limit', '1')
      .set('tags', 'love|happiness');

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<any>('https://api.quotable.io/quotes/random', { params, headers }).subscribe(
      response => {
        // Adjust based on actual API response
        this.quote = response[0].content;  // Use `response.content` if the response is not an array
        this.author = response[0].author;
        console.log('Quote:', this.quote);
        console.log('Author:', this.author);
      },
      error => {
        console.error('Error fetching quote:', error);
        this.router.navigate(['/error']); // Redirect to an error page
      }
    );
  }
}

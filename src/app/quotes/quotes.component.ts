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
  error: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getQuote();  // Fetch the initial quote when the component initializes
  }

  getQuote(): void {
    const params = new HttpParams()
      .set('category', 'happiness')
      .set('category', 'love');

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('X-Api-Key', 'gyjrgMoo/0yG510YHD39eg==1EKPv6nzoQWuey9h');

    // https://api-ninjas.com/profile
    
    this.http.get<any>('https://api.api-ninjas.com/v1/quotes', { params, headers }).subscribe(
      response => {
        // Adjust based on actual API response
        this.quote = response[0].quote;  // Use `response.content` if the response is not an array
        this.author = response[0].author;
        console.log('Quote:', this.quote);
        console.log('Author:', this.author);
      },
      error => {
        console.error('Error fetching quote:', error);
        this.error = error
        this.router.navigate(['/error']);
      }
    );
  }
}

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
      .set('tags', 'love,famous-quotes');

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('X-Api-Key', '82+i4O6Y106FcMfuSouNQA==jV0VpZW832gcZORw');

    // https://api-ninjas.com/profile

    this.http.get<any>('https://api.api-ninjas.com/v1/quotes', { headers }).subscribe(
    // this.http.get<any>('https://randomlovecraft.com/api', { headers }).subscribe(
      response => {
        console.log(response);
        // Adjust based on actual API response
        if (response && response.length > 0) {
          this.quote = response[0].quote;  // Quote content
          this.author = response[0].author; // Quote author
          console.log('Quote:', this.quote);
          console.log('Author:', this.author);
        } else {
          console.error('Empty response from API');
        }
      },
      error => {
        console.log('Error fetching quote:', error);
        this.error = error
        this.router.navigate(['/error']);
      }
    );
  }
}

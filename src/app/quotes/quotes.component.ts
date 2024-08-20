import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: string = '';
  author: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuote();  // Fetch the initial quote when the component initializes
  }

  getQuote(): void {
    const options = {
      params: { limit: '1', tags: 'love|happiness' },
      headers: { accept: 'application/json' }
    };

    this.http.get<any>('https://api.quotable.io/quotes/random', options).subscribe(response => {
      this.quote = response[0].content;  // Assign the quote content to the component property
      this.author = response[0].author;
      console.log(this.quote);
    });
  }
}

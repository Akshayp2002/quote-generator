import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']  // corrected 'styleUrl' to 'styleUrls'
})
export class QrcodeComponent implements OnInit {

  qrcodeForm: FormGroup;
  qrcodeUrl: string = '';
  error: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Initialize the form group using FormBuilder
    this.qrcodeForm = this.fb.group({
      url: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  getQrcode(data: string): void {
    const fmt = 'png';

    const headers = new HttpHeaders()
      .set('Accept', 'image/png')
      .set('X-Api-Key', 'gyjrgMoo/0yG510YHD39eg==1EKPv6nzoQWuey9h');

    const url = `https://api.api-ninjas.com/v1/qrcode?data=${encodeURIComponent(data)}&format=${fmt}`;
    console.log(url, "url is");

    this.http.get(url, { headers, responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        this.qrcodeUrl = urlCreator.createObjectURL(response);
        console.log('Qrcode URL:', this.qrcodeUrl);
      },
      error => {
        console.error('Error fetching QR code:', error);
        this.error = 'Failed to fetch QR code';
      }
    );
  }

  onGenerateClick(): void {
    const urlValue = this.qrcodeForm.get('url')?.value;
    console.log(this.qrcodeForm.get('url'));

    if (urlValue) {
      this.getQrcode(urlValue);
    } else {
      this.error = 'Please enter a valid URL';
    }
  }

}

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
  loading: boolean = false;
  format: any;


  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Initialize the form group using FormBuilder
    this.qrcodeForm = this.fb.group({
      url: ['', Validators.required],
      bg_color: ['#ffffff', Validators.required], // Default background color: white
      fg_color: ['#000000', Validators.required], // Default foreground color: black
      format: ['png', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  getQrcode(data: string): void {
    this.loading = true; // Start loader
    const format = this.qrcodeForm.get('format')?.value;
    console.log(format, "Selected format"); // This should log the selected format

    const bgColor = this.qrcodeForm.get('bg_color')?.value.replace('#', '');
    const fgColor = this.qrcodeForm.get('fg_color')?.value.replace('#', '');

    console.log(fgColor, "terinnnf");

    const headers = new HttpHeaders()
      .set('Accept', `image/${format}`)
      .set('X-Api-Key', 'gyjrgMoo/0yG510YHD39eg==1EKPv6nzoQWuey9h');

    const url = `https://api.api-ninjas.com/v1/qrcode?data=${encodeURIComponent(data)}&format=${format}&bg_color=${encodeURIComponent(bgColor)}&fg_color=${encodeURIComponent(fgColor)}`;
    console.log(url, "url is");

    this.http.get(url, { headers, responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        this.qrcodeUrl = urlCreator.createObjectURL(response);
        console.log('QR Code URL:', this.qrcodeUrl);
        this.loading = false; // Stop loader
      },
      error => {
        console.error('Error fetching QR code:', error);
        this.error = 'Failed to fetch QR code';
        this.loading = false; // Stop loader
      }
    );
  }

  onGenerateClick(): void {
    console.log(this.qrcodeForm.get('format')?.value, "form");

    const urlValue = this.qrcodeForm.get('url')?.value;
    console.log(this.qrcodeForm.get('url'));

    if (urlValue) {
      this.getQrcode(urlValue);
    } else {
      this.error = 'Please enter a valid URL';
    }
  }

}

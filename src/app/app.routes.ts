import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { QuotesComponent } from './quotes/quotes.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'error', component: ErrorPageComponent },
    // { path: '**', redirectTo: '' }, 
    {path:'qrcode',component:QrcodeComponent}
];
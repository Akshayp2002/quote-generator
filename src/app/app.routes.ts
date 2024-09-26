import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { QuotesComponent } from './quotes/quotes.component';
import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: 'qrcode', component: QrcodeComponent },
    { path: 'resume', component: ResumeComponent },
    // { path: '**', redirectTo: '' }, 
];
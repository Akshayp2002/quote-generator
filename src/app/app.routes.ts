import { ErrorPageComponent } from './error-page/error-page.component';
import { QuotesComponent } from './quotes/quotes.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: QuotesComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: '' } // Redirect unknown routes to the QuotesComponent or error page
];
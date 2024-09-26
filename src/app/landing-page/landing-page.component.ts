import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GitStatsComponent } from '../git-stats/git-stats.component';
import { SocialsComponent } from "../socials/socials.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, GitStatsComponent, SocialsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  
}

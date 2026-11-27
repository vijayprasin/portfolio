import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { StatsComponent } from './components/stats.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { CertificationsComponent } from './components/certifications.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, StatsComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, CertificationsComponent, ContactComponent, FooterComponent],
  template: `
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <app-header />
    <main>
      <app-hero />
      <app-stats />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-certifications />
      <app-contact />
    </main>
    <app-footer />
  `
})
export class AppComponent {}

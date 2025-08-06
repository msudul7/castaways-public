import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { SidebarComponent } from './sidebar/sidebar';
import { SidebarService } from './services/sidebar.service';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, CommonModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('castaways-public');

  constructor(
    protected sidebarService: SidebarService,
    protected router: Router
  ) {
    // Scroll to the top of the router outlet on navigation end (every page change)
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const contentContainer = document.querySelector('.page-content');
      contentContainer?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}

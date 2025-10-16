import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { RouterLink } from '@angular/router';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule, UpperCasePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {

  public links = [
    {
      title: 'About Us', path: '/about', icon: 'bi bi-info-circle'
    },
    {
      title: 'Constitution and Bylaws', path: '/bylaws', icon: 'bi bi-shield-shaded'
    },
    {
      title: `What's Happening`, path: '/events', icon: 'bi bi-newspaper'
    },
    {
      title: 'Teams', path: '/teams', icon: 'bi bi-people'
    },
    {
      title: 'Schedules', path: '/schedules', icon: 'bi bi-calendar-week'
    },
    {
      title: 'Merchandise', path: '/merchandise', icon: 'bi bi-cart'
    },
    {
      title: 'Club Resources', path: '/resources', icon: 'bi bi-folder2-open'
    },
  ];

  constructor(
    protected sidebarService: SidebarService
  ) { }

  onLinkClick() {
    if (window.innerWidth < 768) {
      this.sidebarService.hide();
    }
  }

}

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
      title: 'Teams', path: '/teams', icon: 'bi bi-info-circle'
    },
    {
      title: 'Game Schedules', path: '/schedules/games', icon: 'bi bi-calendar-event'
    },
    {
      title: 'Practice Schedules', path: '/schedules/practices', icon: 'bi bi-calendar-week'
    },
  ];

  constructor(
    protected sidebarService: SidebarService
  ) { }

}

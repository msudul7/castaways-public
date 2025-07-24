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
      title: 'Constitution and Bylaws', path: '/about', icon: 'bi bi-shield-shaded'
    },
    {
      title: `What's Happening`, path: '/about', icon: 'bi bi-newspaper'
    },
    {
      title: 'Teams', path: '/about', icon: 'bi bi-info-circle'
    },
    {
      title: 'Game Schedules', path: '/about', icon: 'bi bi-calendar-event'
    },
    {
      title: 'Practice Schedules', path: '/about', icon: 'bi bi-calendar-week'
    },
  ];

  constructor(
    protected sidebarService: SidebarService
  ) { }

}

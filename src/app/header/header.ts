import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

constructor(
  protected sidebarService: SidebarService
) {}

}

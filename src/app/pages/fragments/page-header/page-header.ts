import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss'
})
export class PageHeader {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imageUrl: string = '/assets/images/web-ball.jpg'; // Default background
  @Input() includeLogo: boolean = true; // Whether to include the logo in the header

}

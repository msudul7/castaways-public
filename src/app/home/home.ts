import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../pages/fragments/page-header/page-header';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PageHeader],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}

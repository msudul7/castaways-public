import { Component } from '@angular/core';
import { PageHeader } from '../fragments/page-header/page-header';
import { ClubhouseLocation } from '../fragments/clubhouse-location/clubhouse-location';
import { BoardOfDirectors } from '../fragments/board-of-directors/board-of-directors';

@Component({
  selector: 'app-contact',
  imports: [PageHeader, ClubhouseLocation, BoardOfDirectors],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

}

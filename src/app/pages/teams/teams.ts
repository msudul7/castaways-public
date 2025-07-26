import { Component } from '@angular/core';
import { TeamsList } from './teams-list/teams-list';
import { PageHeader } from '../fragments/page-header/page-header';

@Component({
  selector: 'app-teams',
  imports: [TeamsList, PageHeader],
  templateUrl: './teams.html',
  styleUrl: './teams.scss'
})
export class TeamsComponent {
  public mensFilters = {
    gender: 'M',
  };
  public womensFilters = {
    gender: 'F',
  };
}

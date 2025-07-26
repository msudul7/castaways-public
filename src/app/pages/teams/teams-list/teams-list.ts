import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../../app.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams-list',
  imports: [CommonModule],
  templateUrl: './teams-list.html',
  styleUrl: './teams-list.scss'
})
export class TeamsList implements OnInit {
  @Input() filters: any = {};
  @Input() sortBy: string = 'name';

  public teams = Constants.teams;
  public filteredTeams: any[] = [];

  ngOnInit() {
    // Initialize filtered teams based on the provided filters
    this.applyFilters();
  }

  applyFilters() {
    // Filter teams based on the provided criteria
    this.filteredTeams = this.teams.filter(team => {
      // Apply filters based on the provided criteria
      return Object.keys(this.filters).every(key => {
        if (key === 'name') {
          return team.name.toLowerCase().includes(this.filters[key].toLowerCase());
        }
        return team[key] === this.filters[key];
      });
    });

    // Sort the filtered teams
    this.filteredTeams.sort((a, b) => {
      try {
        return a[this.sortBy].localCompare(b[this.sortBy]);
      } catch (error) {
        return 0; // If sorting fails, return 0 to keep original order
      }
    });
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Constants } from '../../../app.constants';

@Component({
  selector: 'app-board-of-directors',
  imports: [CommonModule],
  templateUrl: './board-of-directors.html',
  styleUrl: './board-of-directors.scss'
})
export class BoardOfDirectors {
  public directors = Constants.directors;
}

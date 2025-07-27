import { Component } from '@angular/core';
import { PageHeader } from '../fragments/page-header/page-header';
import { PdfViewer } from '../fragments/pdf-viewer/pdf-viewer';

@Component({
  selector: 'app-bylaws',
  imports: [PageHeader, PdfViewer],
  templateUrl: './bylaws.html',
  styleUrl: './bylaws.scss'
})
export class BylawsComponent {

}

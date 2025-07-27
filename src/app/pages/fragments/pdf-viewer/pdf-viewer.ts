import { Component, Input, OnInit } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = String(new URL("pdfjs-dist/build/pdf.worker.mjs", import.meta.url));


@Component({
  selector: 'app-pdf-viewer',
  imports: [],
  templateUrl: './pdf-viewer.html',
  styleUrl: './pdf-viewer.scss'
})
export class PdfViewer implements OnInit {
  @Input() pdfUrl: string;

  public pdfDoc: any;
  public page: any;
  public scale: number = 1.5; // Adjust scale as needed
  public viewport: any;
  public outputScale: number = window.devicePixelRatio || 1;

  ngOnInit() {

    this.initPdf();
  }

  async initPdf() {
    const loadingTask = pdfjsLib.getDocument(this.pdfUrl);
    this.pdfDoc = await loadingTask.promise;
    this.page = await this.pdfDoc.getPage(1);
    this.viewport = this.page.getViewport({ scale: this.scale });

    // Prepare canvas using PDF page dimensions
    const canvas = document.getElementById('pdf-canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    canvas.width = this.viewport.width * this.outputScale;
    canvas.height = this.viewport.height * this.outputScale;
    canvas.style.width = `${this.viewport.width}px`;
    canvas.style.height = `${this.viewport.height}px`;

    const transform = this.outputScale !== 1
      ? [this.outputScale, 0, 0, this.outputScale, 0, 0]
      : null;
    this.renderPage(context, transform);
  }

  renderPage(context, transform) {
    const renderContext = {
      canvasContext: context,
      viewport: this.viewport,
      transform: transform
    };
  }
}

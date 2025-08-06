import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = String(new URL("pdfjs-dist/build/pdf.worker.mjs", import.meta.url));


@Component({
  selector: 'app-pdf-viewer',
  imports: [FormsModule, ReactiveFormsModule],
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
  public form;

  constructor(
    protected cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = new UntypedFormGroup({
      pageNumber: new UntypedFormControl(1),
    });
    this.form.get('pageNumber').valueChanges.subscribe((pageNumber: number) => {
      this.goToPage(pageNumber);
    });
    this.initPdf();
  }

  async initPdf() {
    const loadingTask = pdfjsLib.getDocument(this.pdfUrl);
    this.pdfDoc = await loadingTask.promise;
    this.goToPage(1);
  }

  prepareCanvas() {
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
    this.page.render(renderContext).promise.then(() => {
      this.cdr.detectChanges();
    }).catch(error => {
      console.error('Error rendering page:', error);
    });
  }

  async goToPage(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > this.pdfDoc.numPages) {
      return;
    }
    this.page = await this.pdfDoc.getPage(Number(pageNumber));
    this.viewport = this.page.getViewport({ scale: this.scale });
    this.prepareCanvas();
  }

  getCurrentPageNumber(): number {
    return this.page ? this.page.pageNumber : 0;
  }

  getTotalPages(): number {
    return this.pdfDoc ? this.pdfDoc.numPages : 0;
  }

  bumpPageNumber(amount:number = 1) {
    const currentPage = this.getCurrentPageNumber();
    const totalPages = this.getTotalPages();
    let newPageNumber = currentPage + amount;

    if (newPageNumber < amount) {
      newPageNumber = 1;
    } else if (newPageNumber > totalPages) {
      newPageNumber = totalPages;
    }
    this.form.get('pageNumber').setValue(newPageNumber);
    this.cdr.detectChanges();
  }
}

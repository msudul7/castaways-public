import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public _show: WritableSignal<boolean> = signal(true);

  constructor(
    protected router: Router
  ) { }

  toggle(): void {
    this._show.set(!this._show());
  }

  hide() {
    this._show.set(false);
  }

  show() {
    this._show.set(true);
  }

  // Get screen size
  getScreenSize() {
    return window.innerWidth;
  }
}

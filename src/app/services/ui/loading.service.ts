import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoaded = false;
  constructor() { }

  show() {
    this.isLoaded = true;
  }

  hide() {
    this.isLoaded = false;
  }
}

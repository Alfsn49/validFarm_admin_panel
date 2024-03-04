import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private activeContent = new BehaviorSubject<string>('principal');

  // Observable para escuchar los cambios
  public activeContent$ = this.activeContent.asObservable();
  

  constructor() {
    console.log('Content Service', this.activeContent$);
  }

  // Método para cambiar el contenido activo
  setActiveContent(content: string) {
    this.activeContent.next(content);
  }
}

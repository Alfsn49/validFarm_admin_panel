import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarVisible = new BehaviorSubject<boolean>(window.innerWidth > 768);

  // Observable para escuchar los cambios
  public sidebarVisible$ = this.sidebarVisible.asObservable();

  constructor() { }

  private menus: { [key: string]: boolean } = {
    layouts: false, // Ejemplo para el menú 'layouts'
    enfermedades: false,
    medicinas: false,
    grupoEtareo: false
    // otros menús...
  };
  // Método para alternar el estado de un menú específico
  toggleMenu(menu: string) {
    if (menu in this.menus) {
      this.menus[menu] = !this.menus[menu];
    }
  }
  // Método para obtener el estado de un menú
  isMenuOpen(menu: string): boolean {
    return this.menus[menu];
}

  // Método para cambiar el estado
  toggleSidebar() {
    const currentValue = this.sidebarVisible.value;
  console.log('Current Sidebar Visibility:', currentValue);
  this.sidebarVisible.next(!currentValue);
  console.log('New Sidebar Visibility:', !currentValue);
  }
}

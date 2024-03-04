import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/ui/sidebar.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContentService } from '../../../services/ui/content.service';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent implements OnDestroy {
  sidebarOpen = false;
  private subscription: Subscription;

  constructor(public sidebarService: SidebarService, private contentService: ContentService) {
    this.subscription = this.sidebarService.sidebarVisible$.subscribe(
      isOpen => {
        this.sidebarOpen = isOpen;
        console.log('Sidebar Open:', this.sidebarOpen);
      }
    );
  }
  toggleMenu(menu: string) {
    this.sidebarService.toggleMenu(menu);
}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setContent(content: string) {
    this.contentService.setActiveContent(content);
    console.log(this.contentService.activeContent$)
  }

}

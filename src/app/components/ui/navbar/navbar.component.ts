import { Component, OnDestroy } from '@angular/core';
import { SidebarService } from '../../../services/ui/sidebar.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {
  sidebarOpen = false;
  private subscription: Subscription;

  constructor(private sidebarService: SidebarService) {
    this.subscription = this.sidebarService.sidebarVisible$.subscribe(
      isOpen => {
        this.sidebarOpen = isOpen;
      }
    );
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

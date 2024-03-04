import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { BarraLateralComponent } from './components/ui/barra-lateral/barra-lateral.component';
import { LoginAdminComponent } from './components/Auth/login-admin/login-admin.component';
import { LoadingComponent } from './components/ui/loading/loading.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminDashboardComponent,NavbarComponent,BarraLateralComponent, LoginAdminComponent,LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Panel Administrador - ValidFarm';
}

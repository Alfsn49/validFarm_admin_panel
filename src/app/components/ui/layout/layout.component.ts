import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from '../../admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { LoginAdminComponent } from '../../Auth/login-admin/login-admin.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,AdminDashboardComponent,NavbarComponent,BarraLateralComponent,LoginAdminComponent,LoadingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

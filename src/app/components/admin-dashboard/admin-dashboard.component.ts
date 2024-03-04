import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';	

import { PrincipalComponent } from '../contenido/principal/principal.component';
import { EnfermedadComponent } from '../contenido/enfermedad/enfermedad.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContentService } from '../../services/ui/content.service';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ PrincipalComponent,CommonModule, RouterOutlet, RouterLink,EnfermedadComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  
}


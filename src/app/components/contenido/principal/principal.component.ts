import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnfermedadService } from '../../../services/Content/enfermedad.service';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule,NgxUiLoaderModule,MatProgressSpinnerModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  enfermedades:any = [];
  constructor(private enfermedadService:EnfermedadService) { }
  ngOnInit(): void {
    this.enfermedadService.getEnfermedades().subscribe(
      {
        next:res=>{
          this.enfermedades = res;
          console.log(res)
        },
        error:err=>{
          console.log(err)
        }
      }
    )
  }
  
  
  

}

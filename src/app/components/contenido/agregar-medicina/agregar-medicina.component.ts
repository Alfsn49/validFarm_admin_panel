import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormControl,Validators, AbstractControl, FormGroup } from '@angular/forms';
import { MedicineService } from '../../../services/Content/medicine.service';

@Component({
  selector: 'app-agregar-medicina',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-medicina.component.html',
  styleUrl: './agregar-medicina.component.css'
})
export class AgregarMedicinaComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private medicinaService: MedicineService) {}
  form!:FormGroup;
  enfermedades:any[]=[];
  enfermedadSeleccionada:any="";
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id_disease:this.formBuilder.control<string|null>('',[Validators.required]),
      medicine:this.formBuilder.group({
        antibiotico: this.formBuilder.control<string|null>('',[Validators.required]),
        imagen: this.formBuilder.control<string|null>('',[Validators.required]),
        precautions: this.formBuilder.group({
          especificaciones: this.formBuilder.control<string|null>('',[Validators.required]),
        })
      })
    });
    this.form.get('id_disease')?.valueChanges.subscribe(id => {
      if(id){
        console.log('Enfermedad seleccionada:', id);
      }
    });
  }
  cod_Cie(){
    this.medicinaService.getSelectoDisease().subscribe(
      {
        next: (data) => {
          this.enfermedades = data;
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
  }

  selectCod_Cie(event:any){
    this.enfermedadSeleccionada = event.target.value;
    console.log(this.enfermedadSeleccionada);
  }
  

  onSubmit(){
    console.log(this.form.value);
    this.medicinaService.addMedicine(this.form.value).subscribe(
      {
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        }
      }
    )
  }

}

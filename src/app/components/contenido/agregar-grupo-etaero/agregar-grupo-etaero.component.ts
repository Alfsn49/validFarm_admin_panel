import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormControl,Validators, AbstractControl, FormGroup } from '@angular/forms';
import { MedicineService } from '../../../services/Content/medicine.service';
import { GrupoEtareoService } from '../../../services/Content/grupo-etareo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-grupo-etaero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-grupo-etaero.component.html',
  styleUrl: './agregar-grupo-etaero.component.css'
})
export class AgregarGrupoEtaeroComponent implements OnInit{
  constructor(private formBuilder: FormBuilder, private medicinaService: MedicineService, private grupoEtareoService: GrupoEtareoService, private toastr:ToastrService) {}
  form!:FormGroup;
  enfermedades:any[]=[];
  enfermedadSeleccionada:any="";
  medicinas:any[]=[];
  medicinaSeleccionada:any="";
  ageGroupOptions = [
    { label: 'Neonatos', value: 'neonatos' },
    { label: 'Niño', value: 'niño' },
    
    // Puedes agregar más opciones según sea necesario
];
  ngOnInit(): void{
    this.form= this.formBuilder.group({
      id_disease:this.formBuilder.control<string|null>('',[Validators.required]),
      id_medicine:this.formBuilder.control<string|null>('',[Validators.required]),
      age_group: this.formBuilder.group({
        tipo: ['', [Validators.required]],
        edad: ['', [Validators.required]],
        peso: ['', [Validators.required]],
        imagen: ['', [Validators.required]],
        time: this.formBuilder.group({
          duracion: ['', [Validators.required]],
          frecuencia: ['', [Validators.required]],
        }),
        dose: this.formBuilder.group({
          via_admin: ['', [Validators.required]],
          cant_recomend: ['', [Validators.required]],
          cant_max: ['', [Validators.required]],
        }),
        patients: this.formBuilder.group({
          categ_embareazo: ['', [Validators.required]],
        }),
        composition: this.formBuilder.group({
          form_farmaceutica: ['', [Validators.required]],
          concentracion: ['', [Validators.required]],
        }),
      }),
    });
    this.form.get('id_disease')?.valueChanges.subscribe(id => {
      if(id){
        console.log('Enfermedad seleccionada:', id);
      }
    });
    this.form.get('id_medicine')?.valueChanges.subscribe(id1 => {
      if(id1){
        console.log('Medicina seleccionada:', id1);
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
  id_medicine(){
    

    if (this.enfermedadSeleccionada){
      this.grupoEtareoService.getMedicine(this.enfermedadSeleccionada).subscribe(
        {
          next: (data) => {
            this.medicinas = data;
          },
          error: (error) => {
            console.error(error);
          }
        }
      )
    }else{
      
      console.log('No se selecciono ninguna enfermedad');
      this.toastr.error('No se selecciono ninguna enfermedad');
    }

  }

  selectCod_Cie(event:any){
    this.enfermedadSeleccionada = event.target.value;
    console.log(this.enfermedadSeleccionada);
  }
  selectMedicine(event:any){
    this.medicinaSeleccionada = event.target.value;
    console.log(this.medicinaSeleccionada);
  }
  selectAgeGroup(event: any): void {
    const selectedAgeGroup = event.target.value;
    // Actualizar el campo 'tipo' dentro del grupo 'age_group'
    this.form.get('age_group')?.get('tipo')?.setValue(selectedAgeGroup);
}

  onSubmit():void{
    // Crear una copia de los valores del formulario
    const formValueToSend = {...this.form.value};

    // Eliminar 'id_disease' de la copia
    delete formValueToSend.id_disease;
    console.log(formValueToSend)
    this.grupoEtareoService.addAgeGroup(formValueToSend).subscribe(
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

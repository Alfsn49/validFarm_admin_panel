import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl,Validators, AbstractControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../../services/JWT/token.service';
import { ToastrService } from 'ngx-toastr';
import { Disease } from '../../../models/disease/disease.model';
import { DiseaseService } from '../../../services/Content/disease.service';

@Component({
  selector: 'app-agregar-enfermedad',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './agregar-enfermedad.component.html',
  styleUrl: './agregar-enfermedad.component.css'
})
export class AgregarEnfermedadComponent implements OnInit{
  form!:FormGroup;
  constructor(private tokenService:TokenService, private formBuilder: FormBuilder, private diseaseService:DiseaseService,private toastr: ToastrService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cod_cie: [
        '',
        [
          Validators.required,
          
        ],
      ],
      nombre: [
        '',
        [
          Validators.required,
          
        ],
      ],
      agente_etiolog: [
        '',
        [
          Validators.required,
          
        ],
      ],
      system: this.formBuilder.group({
        aparato: ['', [Validators.required]],
        imagen: ['', [Validators.required]],
      }),
      reference: this.formBuilder.group({
        instrum_sanitario: ['', [Validators.required]],
        bibliografia: ['', [Validators.required]],
      }),
    });
    }
    get f():{[key:string]:AbstractControl}{
      return this.form.controls;
    }
    get system():{[key:string]:AbstractControl}{
      return (this.form.get('system')as FormGroup).controls;
    }
    get reference():{[key:string]:AbstractControl}{
      return (this.form.get('reference')as FormGroup).controls;
    }
    onSubmit():void{
      console.log(this.form)
      if(!this.form.invalid){
        console.log(this.form.value)
        const diseaseData: Disease = this.form.value;
        this.diseaseService.addDisease(diseaseData).subscribe(
          {
            next:res=>{
              
              const respuesta = res[1];
              console.log(res)
              if(respuesta == 200){
                const mensaje = res[0].mensaje;
                this.toastr.success(mensaje,'Exito')
              }else{
                const mensaje = res[0].error;
                this.toastr.error(mensaje,'Error')
              }
            },
            error:err=>{
              console.log(err)
              this.toastr.error('Error en el servidor','Error')
            }
          }
        )
      }
    }
  }


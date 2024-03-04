import { Component, OnInit } from '@angular/core';
import { RegistreService } from '../../../services/Auth/registre.service';
import { ReactiveFormsModule, FormBuilder, FormControl,Validators, AbstractControl, FormGroup } from '@angular/forms';
import { passwordsMatchValidator } from '../../../utils/validation';
import { verificarCedula } from '../../../utils/verificarCedula';
import { CommonModule } from '@angular/common';
import { AdminRegister } from '../../../models/admin-register';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registre-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './registre-admin.component.html',
  styleUrl: './registre-admin.component.css'
})
export class RegistreAdminComponent implements OnInit{
  form!:FormGroup
  constructor(private registreService:RegistreService,private formBuilder: FormBuilder,private toastr: ToastrService, private router:Router) { }
  
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nombres: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z ]+$/),
            
          ],
        ],
        apellidos:[
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z ]+$/),
            
          ],
        ],
        cedula:[
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9]+$/),
            Validators.maxLength(10),
            this.validateCedula.bind(this)
          ]

        ]
        ,
        credential: this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]],
          confirmPassword: ['', Validators.required],
          
        }),
        
      },
      {
        validators: [passwordsMatchValidator('password', 'confirmPassword')],
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  get credentialControls(): { [key: string]: AbstractControl } {
    return (this.form.get('credential') as FormGroup).controls;
  }
  get roleControl(): { [key: string]: AbstractControl } {
    const credentialGroup = this.form.get('credential') as FormGroup;
    return {
      ...credentialGroup.controls,
      rol: credentialGroup.get('role.rol') as FormControl // Acceder al control 'rol' dentro de 'credential'
    };
  }
  get addressControls(): { [key: string]: AbstractControl } {
    return (this.form.get('address') as FormGroup).controls;
  }
  get checkControls(): { [key: string]: AbstractControl } {
    return (this.form.get('check') as FormGroup).controls;
  }
  validateCedula(control: AbstractControl): { [key: string]: any } | null {
    const cedula = control.value;
    const isValid = verificarCedula(cedula);
    return isValid ? null : { 'cedulaInvalida': true };
  }
  onSubmit(){
    if(this.form.valid){
      // Extrae los valores del formulario
    const { nombres, apellidos, cedula, credential } = this.form.value;

    // Crea el objeto adminData basado en la interfaz AdminRegister
    const adminData: AdminRegister = {
      nombres,
      apellidos,
      cedula,
      credential: {
        email: credential.email,
        password: credential.password
      }
    };

      console.log(adminData);
      this.registreService.registre(adminData).subscribe(
        {
          next:res=>{
            this.toastr.success('Registro exitoso','Exito')
            this.router.navigate(['/login'])
            console.log(res)
          },
          error:err=>{
            console.log(err)
          }
        }
      )
    }
  }

}

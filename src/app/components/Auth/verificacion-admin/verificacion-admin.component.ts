import { Component,OnInit } from '@angular/core';
import { VerificacionService } from '../../../services/Auth/verificacion.service';
import { ReactiveFormsModule, FormBuilder, FormControl,Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminVerificacion } from '../../../models/admin-verificacion';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../../services/JWT/token.service';

@Component({
  selector: 'app-verificacion-admin',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './verificacion-admin.component.html',
  styleUrl: './verificacion-admin.component.css'
})
export class VerificacionAdminComponent implements OnInit {
  form!:FormGroup;
  constructor(private verificacionService:VerificacionService,private formBuilder: FormBuilder, private toastr: ToastrService,private router: Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      check: this.formBuilder.group({
        codigo: ['',[
          Validators.required,
          Validators.maxLength(8)
        ]],
        telefono: ['',[Validators.required,Validators.pattern(/^09\d{8}$/)]],
      }),
      address: this.formBuilder.group({
        provincia:['',[Validators.required]],
        ciudad:['',[Validators.required]],
      })
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  get addressControls(): { [key: string]: AbstractControl } {
    return (this.form.get('address') as FormGroup).controls;
  }
  get checkControls(): { [key: string]: AbstractControl } {
    return (this.form.get('check') as FormGroup).controls;
  }
  onSubmit(){
    if(this.form.valid){
      const adminData: AdminVerificacion = this.form.value;
      this.verificacionService.verificacion(adminData).subscribe(
        {
          next:res=>{
            console.log(res)
            this.tokenService.setToken(res.token)
            this.router.navigate(['/login'])
            this.toastr.success('Verificacion exitosa','Exito')
          },
          error:err=>{
            console.log(err)
          }
        }
      )
    }
  }
}

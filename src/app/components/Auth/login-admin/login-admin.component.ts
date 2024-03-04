import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/Auth/login.service';
import { ReactiveFormsModule, FormBuilder, FormControl,Validators, AbstractControl, FormGroup } from '@angular/forms';
import { AdminLogin } from '../../../models/admin-login';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../../services/JWT/token.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent implements OnInit{
  form!:FormGroup;
  constructor(private loginService:LoginService,private formBuilder: FormBuilder, private tokenService:TokenService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(){
    if(this.form.valid){
      const adminData: AdminLogin = this.form.value;
      this.loginService.login(adminData).subscribe(
        {
          next:res=>{
            console.log(res.token)
            this.tokenService.setToken(res.token)
            console.log(res)
            const tokenData= this.tokenService.decodeToken();
            console.log(tokenData)
            if(tokenData.estado == false){
              this.router.navigate(['/verificacion'])
            }else{
              this.toastr.success('Bienvenido'+ res.nombres,'Exito')
              this.router.navigate(['/home'])
              
            }
          },
          error:err=>{
            console.log(err)
          }
        }
      )
    }
    
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from '../JWT/token.service';



@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  constructor(private http: HttpClient, private tokenService:TokenService) { }

  getEnfermedades() : Observable<any>{
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any>(environment.apiUrl + '/admin/list/diseases', {headers}).pipe(catchError(this.handleError));
  }



  private handleError(error:HttpErrorResponse){
    if(error.status==0){
      console.error('An error occurred:', error.error);
    }else{
      console.error('Backend retorno el codigo', error.status, error.error)
    }
    return throwError(()=> new Error('Algo fallo, Por favor intente nuevamente'))
  }
}

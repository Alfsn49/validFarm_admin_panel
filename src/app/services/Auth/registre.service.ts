import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  constructor(private http:HttpClient) { }

registre(registre:any):Observable<any>{
  return this.http.post<any>(environment.apiUrl+'/admin/registre', registre).pipe(catchError(this.handleError))}

  private handleError(error:HttpErrorResponse){
    if(error.status==0){
      console.error('An error occurred:', error.error);
    }else{
      console.error('Backend retorno el codigo', error.status, error.error)
    }
    return throwError(()=> new Error('Algo fallo, Por favor intente nuevamente'))
  }

}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey='token';
  constructor(private cookiService: CookieService) { }
  getToken():string|null{
    return this.cookiService.get(this.tokenKey);
  }
  setToken(token:string){
    this.cookiService.set(this.tokenKey,token);
  }
  decodeToken():any{
    const token=this.getToken();
    if(token){
      const tokenPayload = token.split('.')[1];
      const decodedToken = JSON.parse(atob(tokenPayload));
      return decodedToken;
    }else{
      return null;
    }
  }
  isTokenExpired():boolean{
    const token=this.getToken();
    if(token){
      const tokenPayload = token.split('.')[1];
      const decodedToken = JSON.parse(atob(tokenPayload));
      const expirationData = decodedToken.exp * 1000; // Convertir a milisegundos
      const currentDate = Date.now();
      
      const isExpired=currentDate>expirationData;
    

      if (isExpired) {
        console.log('El token ha expirado. Ejecutando clearExpiredToken...');
        this.clearExpiredToken();
      } else {
        console.log(isExpired)
        console.log('El token sigue siendo válido.');
        
      }
      return isExpired;
      
    }else{
      return false
    }
  }
  clearExpiredToken():void{ 
    this.cookiService.delete(this.tokenKey);
}
removeToken():void{
  this.cookiService.delete(this.tokenKey);
}
}

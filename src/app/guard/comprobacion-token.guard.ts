import { CanActivateFn,Router } from '@angular/router';
import { TokenService } from '../services/JWT/token.service';
import { inject } from '@angular/core';

export const comprobacionTokenGuard: CanActivateFn = (route, state) => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);
  const tokenValid = inject(TokenService).isTokenExpired();
  console.log(tokenValid)
  console.log(token)
  if(!tokenValid && token){
  return true;}else{
    router.navigate(['/login']);
    return false;
  }
};

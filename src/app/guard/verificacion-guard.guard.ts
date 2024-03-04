import { CanActivateFn ,Router} from '@angular/router';
import { TokenService } from '../services/JWT/token.service';
import { inject } from '@angular/core';

export const verificacionGuardGuard: CanActivateFn = (route, state) => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);
  // const tokenValid = inject(TokenService).isTokenExpired();
  // console.log(tokenValid)
  const tokenData = inject(TokenService).decodeToken();
  const requireRol = route.data['rol']
  console.log(tokenData.rol)
  console.log(requireRol)
  console.log(tokenData.estado)
  if ( tokenData.estado === false && token != null) {
    return true;
  }else{
    router.navigate(['/home']);
    return false;
  }
  
};

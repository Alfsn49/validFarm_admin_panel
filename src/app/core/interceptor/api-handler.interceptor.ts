import { HttpInterceptorFn} from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../../services/ui/loading.service';

export const apiHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();
  console.log('loadingService', loadingService)
  return next(req).pipe(
    finalize(() => loadingService.hide()
    )
  );
};

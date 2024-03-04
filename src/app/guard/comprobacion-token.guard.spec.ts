import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { comprobacionTokenGuard } from './comprobacion-token.guard';

describe('comprobacionTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => comprobacionTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

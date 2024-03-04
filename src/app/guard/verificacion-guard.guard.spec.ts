import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { verificacionGuardGuard } from './verificacion-guard.guard';

describe('verificacionGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verificacionGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

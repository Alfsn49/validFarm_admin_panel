import { TestBed } from '@angular/core/testing';

import { GrupoEtareoService } from './grupo-etareo.service';

describe('GrupoEtareoService', () => {
  let service: GrupoEtareoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoEtareoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

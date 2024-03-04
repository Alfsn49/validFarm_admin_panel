import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGrupoEtaeroComponent } from './agregar-grupo-etaero.component';

describe('AgregarGrupoEtaeroComponent', () => {
  let component: AgregarGrupoEtaeroComponent;
  let fixture: ComponentFixture<AgregarGrupoEtaeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarGrupoEtaeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarGrupoEtaeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

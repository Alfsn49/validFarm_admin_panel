import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionAdminComponent } from './verificacion-admin.component';

describe('VerificacionAdminComponent', () => {
  let component: VerificacionAdminComponent;
  let fixture: ComponentFixture<VerificacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacionAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

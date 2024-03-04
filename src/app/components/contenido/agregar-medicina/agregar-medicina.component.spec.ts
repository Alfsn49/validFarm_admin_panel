import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedicinaComponent } from './agregar-medicina.component';

describe('AgregarMedicinaComponent', () => {
  let component: AgregarMedicinaComponent;
  let fixture: ComponentFixture<AgregarMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarMedicinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

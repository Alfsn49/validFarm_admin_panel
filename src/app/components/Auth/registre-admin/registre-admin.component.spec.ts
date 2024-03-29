import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreAdminComponent } from './registre-admin.component';

describe('RegistreAdminComponent', () => {
  let component: RegistreAdminComponent;
  let fixture: ComponentFixture<RegistreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistreAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

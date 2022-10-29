import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeRegistraionComponent } from './employe-registraion.component';

describe('EmployeRegistraionComponent', () => {
  let component: EmployeRegistraionComponent;
  let fixture: ComponentFixture<EmployeRegistraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeRegistraionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeRegistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

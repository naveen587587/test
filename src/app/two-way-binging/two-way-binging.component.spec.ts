import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBingingComponent } from './two-way-binging.component';

describe('TwoWayBingingComponent', () => {
  let component: TwoWayBingingComponent;
  let fixture: ComponentFixture<TwoWayBingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBingingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

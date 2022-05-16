import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsfooterComponent } from './operatorsfooter.component';

describe('OperatorsfooterComponent', () => {
  let component: OperatorsfooterComponent;
  let fixture: ComponentFixture<OperatorsfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

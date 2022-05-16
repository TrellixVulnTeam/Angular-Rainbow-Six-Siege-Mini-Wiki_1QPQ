import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaruComponent } from './amaru.component';

describe('AmaruComponent', () => {
  let component: AmaruComponent;
  let fixture: ComponentFixture<AmaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

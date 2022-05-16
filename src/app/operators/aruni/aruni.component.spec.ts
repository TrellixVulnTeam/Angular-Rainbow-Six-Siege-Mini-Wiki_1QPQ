import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AruniComponent } from './aruni.component';

describe('AruniComponent', () => {
  let component: AruniComponent;
  let fixture: ComponentFixture<AruniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AruniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AruniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

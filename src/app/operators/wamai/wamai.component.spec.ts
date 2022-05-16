import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WamaiComponent } from './wamai.component';

describe('WamaiComponent', () => {
  let component: WamaiComponent;
  let fixture: ComponentFixture<WamaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WamaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WamaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

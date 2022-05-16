import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NokkComponent } from './nokk.component';

describe('NokkComponent', () => {
  let component: NokkComponent;
  let fixture: ComponentFixture<NokkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NokkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NokkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

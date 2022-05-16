import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThornComponent } from './thorn.component';

describe('ThornComponent', () => {
  let component: ThornComponent;
  let fixture: ComponentFixture<ThornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

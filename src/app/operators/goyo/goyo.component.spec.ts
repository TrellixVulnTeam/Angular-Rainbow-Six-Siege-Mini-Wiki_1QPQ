import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoyoComponent } from './goyo.component';

describe('GoyoComponent', () => {
  let component: GoyoComponent;
  let fixture: ComponentFixture<GoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelusiComponent } from './melusi.component';

describe('MelusiComponent', () => {
  let component: MelusiComponent;
  let fixture: ComponentFixture<MelusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelusiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

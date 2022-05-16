import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThunderbirdComponent } from './thunderbird.component';

describe('ThunderbirdComponent', () => {
  let component: ThunderbirdComponent;
  let fixture: ComponentFixture<ThunderbirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThunderbirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThunderbirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

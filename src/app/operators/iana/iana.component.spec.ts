import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IanaComponent } from './iana.component';

describe('IanaComponent', () => {
  let component: IanaComponent;
  let fixture: ComponentFixture<IanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Operators2Component } from './operators2.component';

describe('Operators2Component', () => {
  let component: Operators2Component;
  let fixture: ComponentFixture<Operators2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Operators2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Operators2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

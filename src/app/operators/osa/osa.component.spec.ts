import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaComponent } from './osa.component';

describe('OsaComponent', () => {
  let component: OsaComponent;
  let fixture: ComponentFixture<OsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

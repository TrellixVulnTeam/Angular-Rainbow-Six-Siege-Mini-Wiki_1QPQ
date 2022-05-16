import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzamiComponent } from './azami.component';

describe('AzamiComponent', () => {
  let component: AzamiComponent;
  let fixture: ComponentFixture<AzamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

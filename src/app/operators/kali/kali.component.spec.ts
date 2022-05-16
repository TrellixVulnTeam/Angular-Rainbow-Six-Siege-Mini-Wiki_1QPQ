import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaliComponent } from './kali.component';

describe('KaliComponent', () => {
  let component: KaliComponent;
  let fixture: ComponentFixture<KaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

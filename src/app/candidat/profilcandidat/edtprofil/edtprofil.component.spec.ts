import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtprofilComponent } from './edtprofil.component';

describe('EdtprofilComponent', () => {
  let component: EdtprofilComponent;
  let fixture: ComponentFixture<EdtprofilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdtprofilComponent]
    });
    fixture = TestBed.createComponent(EdtprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

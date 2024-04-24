import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyapplicationscandidatComponent } from './myapplicationscandidat.component';

describe('MyapplicationscandidatComponent', () => {
  let component: MyapplicationscandidatComponent;
  let fixture: ComponentFixture<MyapplicationscandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyapplicationscandidatComponent]
    });
    fixture = TestBed.createComponent(MyapplicationscandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

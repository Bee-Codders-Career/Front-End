import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaragentComponent } from './navbaragent.component';

describe('NavbaragentComponent', () => {
  let component: NavbaragentComponent;
  let fixture: ComponentFixture<NavbaragentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaragentComponent]
    });
    fixture = TestBed.createComponent(NavbaragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

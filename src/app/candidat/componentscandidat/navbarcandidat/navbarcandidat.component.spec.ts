import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcandidatComponent } from './navbarcandidat.component';

describe('NavbarcandidatComponent', () => {
  let component: NavbarcandidatComponent;
  let fixture: ComponentFixture<NavbarcandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarcandidatComponent]
    });
    fixture = TestBed.createComponent(NavbarcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

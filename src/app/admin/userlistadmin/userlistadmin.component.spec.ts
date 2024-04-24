import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistadminComponent } from './userlistadmin.component';

describe('UserlistadminComponent', () => {
  let component: UserlistadminComponent;
  let fixture: ComponentFixture<UserlistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlistadminComponent]
    });
    fixture = TestBed.createComponent(UserlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

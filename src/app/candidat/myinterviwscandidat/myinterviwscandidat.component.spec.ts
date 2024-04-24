import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinterviwscandidatComponent } from './myinterviwscandidat.component';

describe('MyinterviwscandidatComponent', () => {
  let component: MyinterviwscandidatComponent;
  let fixture: ComponentFixture<MyinterviwscandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyinterviwscandidatComponent]
    });
    fixture = TestBed.createComponent(MyinterviwscandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

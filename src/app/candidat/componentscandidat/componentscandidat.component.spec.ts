import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentscandidatComponent } from './componentscandidat.component';

describe('ComponentscandidatComponent', () => {
  let component: ComponentscandidatComponent;
  let fixture: ComponentFixture<ComponentscandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentscandidatComponent]
    });
    fixture = TestBed.createComponent(ComponentscandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

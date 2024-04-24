import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaragentComponent } from './sidebaragent.component';

describe('SidebaragentComponent', () => {
  let component: SidebaragentComponent;
  let fixture: ComponentFixture<SidebaragentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebaragentComponent]
    });
    fixture = TestBed.createComponent(SidebaragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

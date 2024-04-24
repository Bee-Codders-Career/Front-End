import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilagentComponent } from './profilagent.component';

describe('ProfilagentComponent', () => {
  let component: ProfilagentComponent;
  let fixture: ComponentFixture<ProfilagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilagentComponent]
    });
    fixture = TestBed.createComponent(ProfilagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviwslistagentComponent } from './interviwslistagent.component';

describe('InterviwslistagentComponent', () => {
  let component: InterviwslistagentComponent;
  let fixture: ComponentFixture<InterviwslistagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviwslistagentComponent]
    });
    fixture = TestBed.createComponent(InterviwslistagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

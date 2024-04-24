import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsagentComponent } from './componentsagent.component';

describe('ComponentsagentComponent', () => {
  let component: ComponentsagentComponent;
  let fixture: ComponentFixture<ComponentsagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsagentComponent]
    });
    fixture = TestBed.createComponent(ComponentsagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

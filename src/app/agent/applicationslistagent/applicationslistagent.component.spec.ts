import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationslistagentComponent } from './applicationslistagent.component';

describe('ApplicationslistagentComponent', () => {
  let component: ApplicationslistagentComponent;
  let fixture: ComponentFixture<ApplicationslistagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationslistagentComponent]
    });
    fixture = TestBed.createComponent(ApplicationslistagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

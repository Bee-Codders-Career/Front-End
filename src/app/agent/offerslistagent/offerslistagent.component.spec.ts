import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferslistagentComponent } from './offerslistagent.component';

describe('OfferslistagentComponent', () => {
  let component: OfferslistagentComponent;
  let fixture: ComponentFixture<OfferslistagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferslistagentComponent]
    });
    fixture = TestBed.createComponent(OfferslistagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

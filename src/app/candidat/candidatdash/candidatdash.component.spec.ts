import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatdashComponent } from './candidatdash.component';

describe('CandidatdashComponent', () => {
  let component: CandidatdashComponent;
  let fixture: ComponentFixture<CandidatdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatdashComponent]
    });
    fixture = TestBed.createComponent(CandidatdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

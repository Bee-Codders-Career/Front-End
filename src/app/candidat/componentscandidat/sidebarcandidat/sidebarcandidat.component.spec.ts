import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcandidatComponent } from './sidebarcandidat.component';

describe('SidebarcandidatComponent', () => {
  let component: SidebarcandidatComponent;
  let fixture: ComponentFixture<SidebarcandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarcandidatComponent]
    });
    fixture = TestBed.createComponent(SidebarcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

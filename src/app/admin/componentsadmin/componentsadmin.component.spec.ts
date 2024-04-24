import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsadminComponent } from './componentsadmin.component';

describe('ComponentsadminComponent', () => {
  let component: ComponentsadminComponent;
  let fixture: ComponentFixture<ComponentsadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsadminComponent]
    });
    fixture = TestBed.createComponent(ComponentsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

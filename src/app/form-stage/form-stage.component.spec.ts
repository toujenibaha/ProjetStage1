import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStageComponent } from './form-stage.component';

describe('FormStageComponent', () => {
  let component: FormStageComponent;
  let fixture: ComponentFixture<FormStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStageComponent]
    });
    fixture = TestBed.createComponent(FormStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

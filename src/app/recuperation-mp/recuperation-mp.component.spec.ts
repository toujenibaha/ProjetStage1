import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperationMpComponent } from './recuperation-mp.component';

describe('RecuperationMpComponent', () => {
  let component: RecuperationMpComponent;
  let fixture: ComponentFixture<RecuperationMpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperationMpComponent]
    });
    fixture = TestBed.createComponent(RecuperationMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierStagiaireComponent } from './modifier-stagiaire.component';

describe('ModifierStagiaireComponent', () => {
  let component: ModifierStagiaireComponent;
  let fixture: ComponentFixture<ModifierStagiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierStagiaireComponent]
    });
    fixture = TestBed.createComponent(ModifierStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublierProjetPage } from './publier-projet.page';

describe('PublierProjetPage', () => {
  let component: PublierProjetPage;
  let fixture: ComponentFixture<PublierProjetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierProjetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

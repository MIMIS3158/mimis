import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileEntrepreneurPage } from './profile-entrepreneur.page';

describe('ProfileEntrepreneurPage', () => {
  let component: ProfileEntrepreneurPage;
  let fixture: ComponentFixture<ProfileEntrepreneurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntrepreneurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

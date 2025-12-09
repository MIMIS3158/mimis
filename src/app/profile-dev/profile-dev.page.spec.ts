import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileDevPage } from './profile-dev.page';

describe('ProfileDevPage', () => {
  let component: ProfileDevPage;
  let fixture: ComponentFixture<ProfileDevPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

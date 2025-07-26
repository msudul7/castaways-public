import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubhouseLocation } from './clubhouse-location';

describe('ClubhouseLocation', () => {
  let component: ClubhouseLocation;
  let fixture: ComponentFixture<ClubhouseLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubhouseLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubhouseLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

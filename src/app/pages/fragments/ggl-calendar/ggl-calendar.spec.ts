import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GglCalendar } from './ggl-calendar';

describe('GglCalendar', () => {
  let component: GglCalendar;
  let fixture: ComponentFixture<GglCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GglCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GglCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

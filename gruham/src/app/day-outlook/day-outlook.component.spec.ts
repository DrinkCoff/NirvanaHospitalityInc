import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOutlookComponent } from './day-outlook.component';

describe('DayOutlookComponent', () => {
  let component: DayOutlookComponent;
  let fixture: ComponentFixture<DayOutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayOutlookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeatherDetailsComponent } from './display-weather-details.component';

describe('DisplayWeatherDetailsComponent', () => {
  let component: DisplayWeatherDetailsComponent;
  let fixture: ComponentFixture<DisplayWeatherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWeatherDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

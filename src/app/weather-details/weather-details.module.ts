import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayWeatherDetailsComponent } from './components/display-weather-details/display-weather-details.component';
import { DisplayWeatherModule } from '../display-weather/display-weather.module';

@NgModule({
  declarations: [DisplayWeatherDetailsComponent],
  imports: [CommonModule, DisplayWeatherModule],
  exports: [DisplayWeatherDetailsComponent],
})
export class WeatherDetailsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PopularCitiesModule } from '../popular-cities/popular-cities.module';
import { WeatherDetailsModule } from '../weather-details/weather-details.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchInputComponent],
  imports: [
    CommonModule,
    PopularCitiesModule,
    WeatherDetailsModule,
    FormsModule,
  ],
  exports: [SearchInputComponent],
})
export class SearchLocationModule {}

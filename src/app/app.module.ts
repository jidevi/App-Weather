import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchLocationModule } from './search-location/search-location.module';
import { ApiWService } from './services/api-w.service';
import { WeatherInfoComponent } from './display-weather/component/weather-info/weather-info.component';
import { FormsModule } from '@angular/forms';
import { PopularCitiesModule } from './popular-cities/popular-cities.module';
import { WeatherDetailsModule } from './weather-details/weather-details.module';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, WeatherInfoComponent],
  imports: [
    BrowserModule,
    SearchLocationModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    PopularCitiesModule,
    WeatherDetailsModule,
    CommonModule,
  ],
  providers: [ApiWService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

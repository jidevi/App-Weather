import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
import { DataResolverService } from './services/data-resolver.service';

const routes: Routes = [
  { path: 'weather-info', component: WeatherInfoComponent },
  {
    path: 'Weather',
    component: WeatherInfoComponent,
    resolve: { data: DataResolverService },
  },
];
@NgModule({
  declarations: [AppComponent, WeatherInfoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SearchLocationModule,
    FontAwesomeModule,
    PopularCitiesModule,
    WeatherDetailsModule,
    CommonModule,
  ],
  providers: [ApiWService, DataService, DataResolverService],
  bootstrap: [AppComponent],
})
export class AppModule {}

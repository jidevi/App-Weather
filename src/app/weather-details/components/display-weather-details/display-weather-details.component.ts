import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather-object';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-weather-details',
  templateUrl: './display-weather-details.component.html',
  styleUrls: ['./display-weather-details.component.css'],
})
export class DisplayWeatherDetailsComponent implements OnInit {
  constructor(public data: DataService) {}

  ngOnInit(): void {}

  getCloudy(w: Weather) {
    return w.current?.cloud;
  }
  getHumidity(w: Weather) {
    return w.current?.humidity;
  }
  getWind(w: Weather) {
    return w.current?.wind_mph;
  }
}

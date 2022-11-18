import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

let cityInput = 'Tokyo';
const app = document.querySelector('.weather-app');

@Component({
  selector: 'app-popular-cities-button',
  templateUrl: './popular-cities-button.component.html',
  styleUrls: ['./popular-cities-button.component.css'],
})
export class PopularCitiesButtonComponent implements OnInit {
  constructor(public data: DataService) {}

  ngOnInit(): void {}
  popCityOutput(city: string) {
    cityInput = city;
    //setting location to city that is clicked by user
    this.data.getWeather(city);

    app?.setAttribute('style', 'opacity:0;');
  }
}

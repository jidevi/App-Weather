import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

let app = document.querySelector<HTMLImageElement>('.weather-app');
const search = document.querySelector('.search');

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  //init location name
  locationName: string = '';

  constructor(public data: DataService) {}

  ngOnInit(): void {}

  searchCity() {
    if (this.locationName.length == 0) {
      alert('Please enter a valid city name');
    }
    this.data.getWeather(this.locationName);

    search?.setAttribute('value', '');
    app?.setAttribute('style', 'opacity:0;');
  }
  //changes color of button depending on the time of day
  //logic in html
  changeSearchBtn(data: DataService) {
    if (data.IconS.includes('night')) {
      return 0;
    }
    return 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather-object';
import { DataService } from 'src/app/services/data.service';
import { icon } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  locationName: string = 'Harlingen';
  icon: string = this.getIconC(this.data);

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.data.getWeather(this.data.location); //geting location string from data service
  }

  //getters for html
  getLocation(w: Weather): string {
    return w.location?.name;
  }
  getTemp(w: Weather): string {
    return w.current?.temp_f.toFixed();
  }
  getTime(w: Weather): string {
    return w.location?.localtime.substring(11, w.location.localtime.length);
  }
  getCondition(w: Weather) {
    return w.current?.condition.text;
  }
  getDate(w: Weather) {
    return w.location?.localtime;
  }
  getIconC(icon: DataService): string {
    //console.log(icon, 'before function', icon.IconS.slice(35, 46));

    let path = '/assets/img/icons/';
    if (icon.IconS.length === 48) {
      return path.concat(icon.IconS.slice(35, 48));
    } else {
      return path.concat(icon.IconS.slice(35, 46));
    }
  }
}

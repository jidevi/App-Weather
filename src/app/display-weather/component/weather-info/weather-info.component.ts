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
    this.changeBg(this.data);
    console.log(this.data.weather, 'weather obj');
  }
  changeBg(data: DataService): string {
    console.log('changeBg function read');
    let code = data.weather?.current?.condition.code;
    while (code !== undefined) {
      code = data.weather?.current?.condition.code;
    }

    console.log(
      'Code:',
      code,
      ' Icon:',
      this.icon,
      'getCode: ',
      data.getCode()
    );

    let path = '/assets/img/bg-images/';
    if (data.IconS.includes('night')) {
      path.concat('night/');
    } else {
      path.concat('day/');
    }
    //if weather is sunny
    if (code === 1000) {
      console.log(path, 'sunny');
      return path.concat('1000');
    }
    //if weather is cloudy
    else if ((code >= 1003 && code <= 1030) || 1135) {
      console.log(path, 'cloudy');
      return path.concat('1006.png');
    }
    //if weather is raining
    else if (
      code == 1063 ||
      1072 ||
      1087 ||
      (code >= 1150 && code <= 1201) ||
      1240 ||
      1243 ||
      1246
    ) {
      console.log(path, 'raining');
      return path.concat('1040.png');
    }
    //if weather thunder/raining
    else if (code == 1087 || (code >= 1273 && code <= 1282)) {
      console.log(path, 'thunder');
      return path.concat('1276.png');
    }
    //if weather is snowing
    else if (
      code == 1069 ||
      1072 ||
      1114 ||
      1117 ||
      1147 ||
      (code >= 1204 && code <= 1237) ||
      (code >= 1249 && code <= 1264)
    ) {
      console.log(path, 'snowing');
      return path.concat('1222.png');
    } else return path.concat('cloudy.png');
  }

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

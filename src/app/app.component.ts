import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Weather } from './models/weather-object';
import { ApiWService } from './services/api-w.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bgPath: string = '';

  constructor(private apiW: ApiWService, private dataW: DataService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiW.fetchWeatherData('Harlingen').subscribe((data: Weather) => {
      this.dataW.weather = data;
    });
  }

  changeBg(Code: number, Icon: string): string {
    console.log('changeBg function read from app');

    let path = '/assets/img/bg-images/';
    path += this.NightOrDay(Icon);

    //if weather is sunny
    if (Code === 1000) {
      path += '1000.png';
      //console.log(path, 'sunny');
      return path;
    }
    //if weather is cloudy
    else if (Code === 1003 || 1135 || 1006 || 1009 || 1030) {
      path += '1006.png';
      console.log(path, 'cloudy', Code);
      return path;
      //.concat('1006.png');
    }
    //if weather is raining
    else if (
      Code == 1063 ||
      1072 ||
      1087 ||
      (Code >= 1150 && Code <= 1201) ||
      1240 ||
      1243 ||
      1246
    ) {
      console.log(path, 'raining');
      return (path += '1240.png');
      //.concat('1040.png')
    }
    //if weather thunder/raining
    else if (Code == 1087 || (Code >= 1273 && Code <= 1282)) {
      //console.log(path, 'thunder');
      return (path += '1276.png');
      //concat('1276.png')
    }
    //if weather is snowing
    else if (
      Code === 1069 ||
      1072 ||
      1114 ||
      1117 ||
      1147 ||
      (Code >= 1204 && Code <= 1237) ||
      (Code >= 1249 && Code <= 1264)
    ) {
      //console.log(path, 'snowing');
      return (path += '1222.png');
      //.concat('1222.png')
    } else return (path += 'cloudy.png');
    //.concat('cloudy.png')
  }

  NightOrDay(Icon: string) {
    if (Icon.includes('night')) {
      return 'night/';
    } else {
      return 'day/';
    }
  }

  title = 'App-Weather';
}

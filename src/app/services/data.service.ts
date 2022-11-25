import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Weather } from '../models/weather-object';
import { ApiWService } from './api-w.service';

let app = document.querySelector('.weather-app');

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  weather: Weather = {} as Weather;
  location: string = 'Harlingen';
  IconS: string = '';
  CodeData: number = 0;

  constructor(
    private apiW: ApiWService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  getWeather(location: string) {
    this.apiW.fetchWeatherData(location).subscribe((data: Weather) => {
      this.weather = data;
      this.IconS = data.current.condition.icon;
      this.location = data.location.name;
      this.CodeData = data?.current?.condition.code;
      console.log(data, 'from data service', 'Code:', this.CodeData);
    });
  }
  bgFunctionD() {
    return this.changeBg(1, this.weather.current?.condition.icon);
  }

  NightOrDay(Icon: string) {
    if (Icon?.includes('night')) {
      return 'night/';
    } else {
      return 'day/';
    }
  }

  changeBg(Code: number, Icon: string): string {
    console.log('changeBg function read. Code:', Code);

    let path = '/assets/img/bg-images/';
    path += this.NightOrDay(Icon);

    //if weather is sunny
    if (Code === 1000) {
      path += '1000.png';
      console.log(path, 'sunny');
      return path;
    } else if (this.if0(Code)) {
      return (path += '1240.png');
    } else if (this.if1(Code)) {
      return (path += '1276.png');
    } else if (this.if2(Code)) {
      return (path += '1222.png');
    } else if (this.if3(Code)) {
      return (path += '1006.png');
    } else return (path += 'cloudy.png');
    //.concat('cloudy.png')
  }

  if0(Code: number): boolean {
    if (
      //if weather is raining
      Code === 1063 ||
      1072 ||
      1087 ||
      (Code >= 1150 && Code <= 1201) ||
      1240 ||
      1243 ||
      1246
    ) {
      //console.log(path, 'raining');
      return true;
      //.concat('1040.png')
    } else return false;
  }

  if1(Code: number): boolean {
    if (Code == 1087 || (Code >= 1273 && Code <= 1282)) {
      //if weather thunder/raining
      //console.log(path, 'thunder');
      return true;
      //concat('1276.png')
    } else return false;
  }

  if2(Code: number): boolean {
    if (
      //if weather is snowing
      Code == 1069 ||
      1072 ||
      1114 ||
      1117 ||
      1147 ||
      (Code >= 1204 && Code <= 1237) ||
      (Code >= 1249 && Code <= 1264)
    ) {
      return true;
      //.concat('1222.png')
    } else return false;
  }

  if3(Code: number): boolean {
    if (Code === 1003 || 1006 || 1009 || 1030 || 1135) {
      //if weather is cloudy
      return true;
      //.concat('1006.png');
    } else {
      return false;
    }
  }

  getIcon() {
    //console.log(this.IconS, 'Icon from data service');
    return this?.IconS;
  }
  getCode() {
    return this.weather?.current?.condition.code;
  }

  //observable for weather object
  public content = new BehaviorSubject<Weather>(this.weather);
  public share = this.content.asObservable();

  //observable for location input
  public locContent = new BehaviorSubject<string>(this.location);
  public locShare = this.locContent.asObservable();

  public iconContent = new BehaviorSubject<string>(this.IconS);
  public iconShare = this.iconContent.asObservable();
  //obs for weather code
  public codeContent = new BehaviorSubject<number>(this.CodeData);
  public codeShare = this.codeContent.asObservable();

  updateData(w: Weather) {
    this.content.next(w);
  }
  updateLocation(s: string) {
    this.locContent.next(s);
  }
  updateIcon(s: string) {
    this.iconContent.next(s);
  }
  updateCode(c: number) {
    this.codeContent.next(c);
  }
}

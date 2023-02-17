import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Weather } from '../models/weather-object';
import { ApiWService } from './api-w.service';

let app = document.querySelector('.weather-app');

@Injectable({
  providedIn: 'root',
})

//most of the logic is done on the data service file since I want to share the data
//across multiple components.

//this class returns data on location and has some basic logic for organizing data
//into the UI across different components using the free weather api
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

  //calling weather api to store the data in the local vars
  getWeather(location: string) {
    this.apiW.fetchWeatherData(location).subscribe((data: Weather) => {
      this.weather = data;
      this.IconS = data.current.condition.icon;
      this.location = data.location.name;
      this.CodeData = data?.current?.condition.code;
      //console.log(data, 'from data service', 'Code:', this.CodeData);
    });
  }
  //triggers the change background function so multiple components can use it
  //since a lot them do the same functions in a different way
  bgFunctionD() {
    return this.changeBg(this.weather.current?.condition.icon);
  }

  //picks icon depending on the time of day
  NightOrDay(Icon: string) {
    if (Icon?.includes('night')) {
      return 'night/';
    } else {
      return 'day/';
    }
  }

  changeBg(Icon: string): string {
    let path = '/assets/img/bg-images/';
    path += this.NightOrDay(Icon);

    //returns a concatenated string for the path of img depending on the icon in the api
    //and changes the background accordingly
    if (['113'].some((x) => Icon?.includes(x))) {
      return (path += '1000.png');
    } else if (
      [
        '176',
        '185',
        '263',
        '266',
        '281',
        '284',
        '293',
        '296',
        '299',
        '302',
        '305',
        '308',
        '311',
        '314',
        '353',
        '356',
        '359',
      ].some((x) => Icon?.includes(x))
    ) {
      return (path += '1240.png');
    } else if (
      ['200', '386', '389', '392', '395'].some((x) => Icon?.includes(x))
    ) {
      return (path += '1276.png');
    } else if (
      [
        '179',
        '182',
        '227',
        '230',
        '260',
        '317',
        '320',
        '323',
        '326',
        '329',
        '332',
        '335',
        '338',
        '350',
        '362',
        '365',
        '368',
        '371',
        '374',
        '377',
      ].some((x) => Icon?.includes(x))
    ) {
      return (path += '1222.png');
    } else if (
      ['116', '119', '122', '143', '248'].some((x) => Icon?.includes(x))
    ) {
      return (path += '1006.png');
    }

    return (path += 'cloudy.png');
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

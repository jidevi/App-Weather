import { Injectable, OnInit } from '@angular/core';
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
  constructor(private apiW: ApiWService) {}
  ngOnInit(): void {
    this.CodeData = this.weather.current.condition.code;
    console.log(this.CodeData, 'from data service init');
  }

  getWeather(location: string) {
    this.apiW.fetchWeatherData(location).subscribe((data: Weather) => {
      this.weather = data;
      this.IconS = data.current.condition.icon;
      this.location = data.location.name;
      this.CodeData = data?.current?.condition.code;
      console.log(data, 'from data service', 'Code:', this.CodeData);
    });
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

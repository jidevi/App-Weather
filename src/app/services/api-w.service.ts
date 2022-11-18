import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Weather } from '../models/weather-object';

@Injectable({
  providedIn: 'root',
})
export class ApiWService {
  constructor(private httpClient: HttpClient) {}

  public fetchWeatherData(location: string): Observable<Weather> {
    let dataURL: string = `http://api.weatherapi.com/v1/current.json?key=11ddf161ee6e4343bd4154817220911&q=${location}`;
    return this.httpClient.get<Weather>(dataURL);
  }

  // private WeatherDetails = new Subject<Weather>();
  // WeatherDets$ = this.WeatherDetails.asObservable();
  // //send message func
  // SendWeatherDetails(details: Weather) {
  //   this.WeatherDetails.next(details);
  // }
}

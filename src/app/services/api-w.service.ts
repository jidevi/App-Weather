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
    let dataURL: string = `http://api.weatherapi.com/v1/current.json?key=ec110e31a1ff4371a93160922222311&q=${location}`;
    return this.httpClient.get<Weather>(dataURL);
  }

  // private WeatherDetails = new Subject<Weather>();
  // WeatherDets$ = this.WeatherDetails.asObservable();
  // //send message func
  // SendWeatherDetails(details: Weather) {
  //   this.WeatherDetails.next(details);
  // }
}

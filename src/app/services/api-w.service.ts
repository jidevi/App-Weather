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
    //add "&q" to the end of your api key
    let dataURL: string = `http://api.weatherapi.com/v1/current.json?key=67955ccdd623453283f222715231502&q=${location}`;
    return this.httpClient.get<Weather>(dataURL);
  }
}

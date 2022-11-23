import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather-object';
import { ApiWService } from './api-w.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<Weather> {
  constructor(private apiW: ApiWService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Weather | Observable<Weather> | Promise<Weather> {
    throw new Error('Method not implemented.');
  }
}

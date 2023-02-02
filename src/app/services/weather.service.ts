import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '70f604c1b6mshb40ee1360c27e28p168e65jsn6f9825f38ca2',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
    return this.http.get<WeatherData>('https://open-weather13.p.rapidapi.com/city/' + cityName, options);
  }
}

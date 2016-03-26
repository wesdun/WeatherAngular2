import {Component, OnInit} from 'angular2/core';
import {LocationService} from "./location.service";
import {WeatherService} from "./weather.service";
import {Weather} from './weather';

@Component({
    selector: 'my-app',
    template: `
     <div class="container">
        <div class="row">
            <h1>{{title}}</h1>
        </div>
        <div class="row">
            <div id="iconDiv">
                <img [src]="weatherData?.iconUrl" />
            </div>
            <div id="tempDiv">
                {{weatherData?.temp | number:'.0'}} &deg; {{weatherData?.tempUnit}}
            </div>
        </div>
        <div class="row">
            <div class="well">
                {{weatherData?.city}}
            </div>
            <div class="well">
                {{weatherData?.description}}
            </div>
            <div class="well">
                {{weatherData?.wind?.speed}}
            </div>
    
        </div>
        <button class="btn btn-active" (click)="toggleTempUnit()">
            {{weatherData?.tempToggleUnit}}
        </button>
    </div>
    `,
    providers: [LocationService, WeatherService]//, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit{
    title = 'Local Weather';
    weatherData: Weather;
    
    constructor(private _locationService: LocationService, private _weatherService: WeatherService) {
        //this.weatherData = <Weather>{};
    }

    toggleTempUnit() {
        if(this.weatherData.tempUnit == 'Fahrenheit') {
            this.weatherData.tempToggleUnit = this.weatherData.tempUnit;
            this.weatherData.tempUnit = 'Celsius';
            this.weatherData.temp = (this.weatherData.temp - 32) * (5/9);
        } else {
            this.weatherData.tempToggleUnit = this.weatherData.tempUnit;
            this.weatherData.tempUnit = 'Fahrenheit';
            this.weatherData.temp = this.weatherData.temp * (9/5) + 32;
        }
    }

    ngOnInit() {
        this._locationService.getLocation().subscribe(position => {
            this._weatherService.getWeatherData(position).subscribe(data => this.weatherData = data);
        });
    }
}


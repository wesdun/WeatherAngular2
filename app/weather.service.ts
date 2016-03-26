import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import "rxjs/Rx";

@Injectable()
export class WeatherService {
     constructor(private http:Http) {
    }
    
    getWeatherData(position: Position) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
            position.latitude + '&lon=' + position.longitude +
            '&cnt=1&units=imperial&APPID=9aeace6ffd55238ad6cf3342f68473c0';

        return this.http.get(url).map(resp => resp.json()).map(data => {
            return {
                'latitude' : data['coord']['lon'],
                'longitude' : data['coord']['lat'],
                'city' : data['name'],
                'temp' : data['main']['temp'],
                'tempUnit' : 'Fahrenheit',
                'tempToggleUnit' : 'Celsius',
                'description' : data['weather'][0]['main'],
                'wind' : data['wind'],
                'iconUrl' : 'http://openweathermap.org/img/w/' + data['weather'][0]['icon'] + '.png'
            }
        });
    }
}

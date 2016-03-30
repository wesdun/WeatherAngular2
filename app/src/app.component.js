System.register(['angular2/core', "./location.service", "./weather.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, location_service_1, weather_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (location_service_1_1) {
                location_service_1 = location_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_locationService, _weatherService) {
                    this._locationService = _locationService;
                    this._weatherService = _weatherService;
                    this.title = 'Local Weather';
                    //this.weatherData = <Weather>{};
                }
                AppComponent.prototype.toggleTempUnit = function () {
                    if (this.weatherData.tempUnit == 'Fahrenheit') {
                        this.weatherData.tempToggleUnit = this.weatherData.tempUnit;
                        this.weatherData.tempUnit = 'Celsius';
                        this.weatherData.temp = (this.weatherData.temp - 32) * (5 / 9);
                    }
                    else {
                        this.weatherData.tempToggleUnit = this.weatherData.tempUnit;
                        this.weatherData.tempUnit = 'Fahrenheit';
                        this.weatherData.temp = this.weatherData.temp * (9 / 5) + 32;
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._locationService.getLocation().subscribe(function (position) {
                        _this._weatherService.getWeatherData(position).subscribe(function (data) { return _this.weatherData = data; });
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <div class=\"container\">\n        <div class=\"row\">\n            <h1>{{title}}</h1>\n        </div>\n        <div class=\"row\">\n            <div id=\"iconDiv\">\n                <img [src]=\"weatherData?.iconUrl\" />\n            </div>\n            <div id=\"tempDiv\">\n                {{weatherData?.temp | number:'.0'}} &deg; {{weatherData?.tempUnit}}\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"well\">\n                {{weatherData?.city}}\n            </div>\n            <div class=\"well\">\n                {{weatherData?.description}}\n            </div>\n            <div class=\"well\">\n                {{weatherData?.wind?.speed}}\n            </div>\n    \n        </div>\n        <button class=\"btn btn-active\" (click)=\"toggleTempUnit()\">\n            {{weatherData?.tempToggleUnit}}\n        </button>\n    </div>\n    ",
                        providers: [location_service_1.LocationService, weather_service_1.WeatherService] //, HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [location_service_1.LocationService, weather_service_1.WeatherService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
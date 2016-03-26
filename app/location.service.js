System.register(['angular2/core', "rxjs/Observable", "rxjs/add/operator/startWith", "rxjs/add/operator/share"], function(exports_1, context_1) {
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
    var core_1, Observable_1;
    var LocationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            LocationService = (function () {
                function LocationService() {
                    var _this = this;
                    this.setLocation = function (pos) {
                        _this.position = { latitude: pos.coords.latitude, longitude: pos.coords.longitude };
                        _this.positionObserver.next(_this.position);
                    };
                    this.position$ = new Observable_1.Observable(function (observer) { return _this.positionObserver = observer; })
                        .share();
                }
                LocationService.prototype.getLocation = function () {
                    navigator.geolocation.getCurrentPosition(this.setLocation);
                    return this.position$;
                };
                LocationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocationService);
                return LocationService;
            }());
            exports_1("LocationService", LocationService);
        }
    }
});
//# sourceMappingURL=location.service.js.map
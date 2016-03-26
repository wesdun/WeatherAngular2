import {Injectable} from 'angular2/core';

import {Position} from './position';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/share";


@Injectable()
export class LocationService {
    private position$: Observable<Position>;
    private positionObserver: Observer<Position>;
    private position: Position;

    constructor() {
        this.position$ = new Observable(observer => this.positionObserver = observer)
            .share();
    }

    getLocation(): Observable<Position> {
        navigator.geolocation.getCurrentPosition(this.setLocation)
        return this.position$;
    }

    private setLocation = (pos) => {
        this.position = {latitude: pos.coords.latitude, longitude: pos.coords.longitude};
        this.positionObserver.next(this.position);
    }
}
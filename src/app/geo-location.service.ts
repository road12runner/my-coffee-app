import { PlaceLocation } from './logic/place-location';
import { Injectable } from '@angular/core';

@Injectable()
export class GeoLocationService {
    requestLocation(cb){
        // W#C GeoLocation API
        navigator.geolocation.getCurrentPosition((postion) => {
            cb(postion.coords);
        }, error => {
            cb(null);
        })
    
    };

    getMapLink(location: PlaceLocation) {
        let query: string;
        // universal link
        if (location.latitude) {
            query = `${location.latitude},${location.longitude}`;
        } else {
            query = `${location.address}, ${location.city}`;
        }

        if ( /iPad|iPhone|iPod/.test(navigator.userAgent)) {
            return `https://maps.apple.com/q?=${query}`;
        } else {
            return `https://maps.google.com/q?=${query}`;
        }
    }
}
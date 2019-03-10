import { Injectable } from '@angular/core';
import { Coffee } from './logic/coffee';
import { PlaceLocation } from './logic/place-location';

@Injectable()
export class DataService {
    getList(cb) {
        const list = [
            new Coffee('Double Espresso', 'Sunny Caffee', new PlaceLocation('123 Market Street', 'San Franciso')),
            new Coffee('Americano Espresso', 'Dark Caffee', new PlaceLocation('5th Ave', 'New York'))
        ]

        cb(list);
    }

    save(coffee, cb) {
        cb(true);
    }
}
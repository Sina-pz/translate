import { Injectable } from '@angular/core';
import { Continent } from './models/continent';
import { Country } from './models/country';
import { EuropeCountry } from './models/europe-country';


let continents: Continent[] = [{
    id: '1',
    text: 'Africa',
    textAr: 'أفريقيا',
    items: [
        {
            id: '1_2',
            text: 'Ethiopia',
            textAr: 'أثيوبيا',
            items: [{
                id: '1_2_1',
                text: 'Addis Ababa',
                textAr: 'أديس أبابا'
            }, {
                id: '1_2_2',
                text: 'Dire Dawa',
                textAr: 'دير داوا'
            }]
        },
        {
            id: '1_1',
            text: 'Nigeria',
            textAr: 'نيجيريا',
            items: [{
                id: '1_1_1',
                text: 'Lagos',
                textAr: 'لاغوس'
            }, {
                id: '1_1_2',
                text: 'Kano',
                textAr: 'كانو'
            }]
        }
    ]

}];

let europeCountries: EuropeCountry[] = [{
    nameAr : 'النمسا',
    nameEn : 'Austria',
    population : 8451900,
    area : 83855.0,
    capitalEn : 'Vienna',
    capitalAr : 'فيينا'
}];


let europeanUnion: Country[] = [{
    id: 1,
    nameAr: 'النمسا',
    nameEn: 'Austria'
}, {
    id: 2,
    nameAr: 'بلجيكا',
    nameEn: 'Belgium'
}
];

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getContinents(): Continent[] {
    return continents;
}
getEuropeCountries(): EuropeCountry[] {
    return europeCountries;
}
getCountries(): Country[]  {
    return europeanUnion;
}
}

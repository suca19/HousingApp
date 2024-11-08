import { Component } from '@angular/core';
import { housingLocation} from '@angular/core';
export class DetailsComponent {
    housingLocation: HousingLocation | undefined;

constructor(){
    const housingLocationId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.housingService.getHousingLocationId(HousingLocationId).then(housingLocation) => {
        this.housingLocation = housingLocation;
    }
}
}
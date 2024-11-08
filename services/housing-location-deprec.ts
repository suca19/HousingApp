import { Injectable } from "@angular/core";
import { HousingLocation } from "./HousingLocation";

@Injectable({
    providedIn: 'root'})

export class HousingLocationDeprec {
    url = "https://localhost:44390/api/HousingLocation";


async getAllHousingLocations() {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
}
async getHousingLocationById(id: number) : Promise<HousingLocation>  | undefined {

    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
}

submitApplication (firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
} }
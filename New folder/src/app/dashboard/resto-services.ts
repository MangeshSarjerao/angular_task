import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class restoservice
{
    Id?:number;
    Name:string;
    Address:string;
    Locality:string;
    City:string;
    State:string;
    Country:string;
    Zip:string;
    Email:string;
}
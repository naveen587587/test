import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }
  getVehicle(){
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')
  }
  getFilterVehicle(term:string){

   return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term)
  }
}

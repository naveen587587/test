import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClint:HttpClient) { }

login(data:any){
  return this._httpClint.post('https://reqres.in/api/login/',data)
}

}

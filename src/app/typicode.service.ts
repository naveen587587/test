import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
 public url:any = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _httpClient:HttpClient) { }
  getTypicode(){
   return this._httpClient.get(this.url);
  }
  saveUser(data:any){
    return this._httpClient.post(this.url,data);
  }
}

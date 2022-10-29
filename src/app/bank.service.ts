import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
navigateByUrl(arg0: string) {
  throw new Error('Method not implemented.');
}

constructor(private _httpClient:HttpClient) { }
getAccounts():Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1');
}
getAccount(id:string):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
}
getBankAccount(bank:string){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+bank);
}
getPageAccount(page:number){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page='+page);
}
deletAccount(id:string):Observable<any>{
  return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
}
updateAccount(id:string, data:any){
  return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id,data);
}
createAccount(data:any){
  return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/',data)

}
getSortedAccount(column:string, order:string){
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortby='+column +'& order= '+order)
}

}

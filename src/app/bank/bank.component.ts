import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any=[];

  public bank:any ='';

  public id:any ='';

  public column:string ='';

  public order:string ="";

  constructor(private _bankService:BankService, private router:Router) {

  this._bankService.getAccounts().subscribe(
 (data:any)=>{
 this.accounts = data;
 },
 (error:any)=>{
 alert('Internal server error')
 }
  )
   }

  ngOnInit(): void {
  }

  getBank(){
    this._bankService.getBankAccount(this.bank).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
         alert('Connect the server')
      }
      )
    
  }
  pagination(page:number){
    this._bankService.getPageAccount(page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (error:any)=>{
         alert('Connect the server')
      }
    )
  }
  sort(){
    this._bankService.getSortedAccount(this.column,this.order).subscribe(
      (data:any)=>{
  this.accounts =data;
      },
      (error:any)=>{
        alert("internal server error")
      }
    )
  }
  
  delete(id:any){
    this._bankService.deletAccount(id).subscribe(
      
        (data:any)=>{
        alert("Delet successfully");
        location.reload();

        },
        (error:any)=>{
        alert('Try again')
        }
        )
      
    
  }
  view(id:string){
this.router.navigateByUrl('/dashboard/bank-details/'+id);
  }

}

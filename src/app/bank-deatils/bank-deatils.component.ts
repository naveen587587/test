import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({  
  selector: 'app-bank-deatils',
  templateUrl: './bank-deatils.component.html',
  styleUrls: ['./bank-deatils.component.css']
})
export class BankDeatilsComponent implements OnInit {
  
  public id:string = '';

  public account:any = [];

  constructor(private _bankService:BankService, private _activateRoute:ActivatedRoute) {

    this._activateRoute.params.subscribe(
      (data:any)=>{
        this.id =data.id;
        this._bankService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

}

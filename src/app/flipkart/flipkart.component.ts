import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public flipKarts:any = [];

  constructor(private _filpkartService:FlipkartService) { 
  this._filpkartService.getFlipkart().subscribe(
    (data:any)=>{
      this.flipKarts =data;
    },
    (error:any)=>{
      alert('Kinldy recharge your wifi');
    }
  )
   
  


  }

  ngOnInit(): void {
  }

}

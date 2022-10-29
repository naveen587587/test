import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.css']
})
export class TypicodeComponent implements OnInit {

  public count:number =0;

  constructor() { }

  ngOnInit(): void {
  }
  getUserFormData(){
    
  }
  incriment(){
    this.count= this.count +1;
  }
  decriment(){
    this.count = this.count - 1>0?this.count-1:0;
  }
}

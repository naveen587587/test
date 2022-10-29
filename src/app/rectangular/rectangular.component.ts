import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangular',
  templateUrl: './rectangular.component.html',
  styleUrls: ['./rectangular.component.css']
})
export class RectangularComponent implements OnInit {
  
   public length:number = 0;
   public breadth:number = 0;
   public result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  area(){

    this.result = this.length * this.breadth;
  }
   permiter(){
    this.result = (2*this.length ) + (2*this.breadth);
   }
}

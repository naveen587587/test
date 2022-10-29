import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  public power:number = 0;
  public power2: number =0;
  public result:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  square(){
    this.result = this.power * this.power;
  }
  qube(){
    this.result = this.power *this.power*this.power;
  }
  nthpower(){
    this.result = Math.pow(this.power,this.power2)
  }
  
  
}
 {

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binging',
  templateUrl: './two-way-binging.component.html',
  styleUrls: ['./two-way-binging.component.css']
})
export class TwoWayBingingComponent implements OnInit {

  public name:string ="abc"

  constructor() { }

  ngOnInit(): void {
  }

}

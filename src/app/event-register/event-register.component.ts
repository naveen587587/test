import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

 public name:string ='';
 public names:string[] =["naveen"]

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    if(this.name != "")
   this.names.push(this.name);

   this.name = '';
  }
  delete(){
    this.names.pop();
  }
}
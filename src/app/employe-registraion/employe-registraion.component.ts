import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-registraion',
  templateUrl: './employe-registraion.component.html',
  styleUrls: ['./employe-registraion.component.css']
})
export class EmployeRegistraionComponent implements OnInit {

  public name:string = '';
  public age:number =0;
  public company:string = '';
  public package: number= 0;

  public employees: any=[
    {name:'naveen', age:30, company:'LTI', package:10},
    {name:'nave', age:30, company:'LTT', package:12},

  ]

  constructor() { }

  ngOnInit(): void {
  }
  add(){
 let employee ={
   name: this.name,
   age: this.age,
   company: this.company,
   package: this.package
 }  
if(this.name!=''){
 this.employees.push(employee) ;
 this.name ='';
 this.age =0;
 this.company ='';
 this.package = 0;

 alert('Registraion successfull')

}
  }
  delete(i:number){
    this.employees.splice(i,1);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

public time:any = new Date().toLocaleTimeString;

  constructor(private Route:Router) {
    this.updateTime();
   }

  ngOnInit(): void {
  }
public getDate(){
  return new Date().toLocaleDateString();
} 
public updateTime():any{
setInterval(()=>{
  this.time = new Date().toLocaleTimeString();

}, 10000);

} 
logOut(){
  sessionStorage.removeItem('my-app-token');
  this.Route.navigateByUrl('/login');
}

}


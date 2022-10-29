import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup = new FormGroup (
    {
      email: new FormControl(),
      password: new FormControl(),
    }
  )

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
   
    this.loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        sessionStorage.setItem('my-app-token', data.token);
        this.router.navigateByUrl('/dashboard');
      },
      (error:any)=>{
        alert("invalid Mail and Password")
      }
    )

  }
}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDeatilsComponent } from './bank-deatils/bank-deatils.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeRegistraionComponent } from './employe-registraion/employe-registraion.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PowerComponent } from './power/power.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { SquareComponent } from './square/square.component';
import { TwoWayBingingComponent } from './two-way-binging/two-way-binging.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children:[
  {path:'interpolation',component:InterpolationComponent},
  {path:'event-binding', component: EventBindingComponent},
  {path:'two-way-binging', component: TwoWayBingingComponent},  
  {path:'calculator', component: CalculatorComponent},
  {path:'rectangular',component:RectangularComponent},
  {path:'square', component:SquareComponent},
  {path:'power', component: PowerComponent},
  {path:'event-register', component: EventRegisterComponent},
  {path:'employe-registraion', component:EmployeRegistraionComponent},
  {path:'gpay',component:GpayComponent},
  {path:'bank', component:BankComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'typicode', component:TypicodeComponent},
  {path:'flipkart', component:FlipkartComponent},
  {path:'cart', component:CartComponent},
  {path:'create-account',canDeactivate:[NotifyGuard], component:CreateAccountComponent},
  {path:'bank-details/:id',component:BankDeatilsComponent},
  {path:'create-user', component:CreateUserComponent}

]},
  {path:'', component: LoginComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

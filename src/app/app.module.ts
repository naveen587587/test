import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBingingComponent } from './two-way-binging/two-way-binging.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangularComponent } from './rectangular/rectangular.component';
import { SquareComponent } from './square/square.component';
import { PowerComponent } from './power/power.component';
import { EventRegisterComponent } from './event-register/event-register.component';
import { EmployeRegistraionComponent } from './employe-registraion/employe-registraion.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import{HttpClientModule} from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { BankDeatilsComponent } from './bank-deatils/bank-deatils.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateUserComponent } from './create-user/create-user.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBingingComponent,
    RectangularComponent,
    SquareComponent,
    PowerComponent,
    EventRegisterComponent,
    EmployeRegistraionComponent,
    GpayComponent,
    BankComponent,
    VehicleComponent,
    TypicodeComponent,
    FlipkartComponent,
    CartComponent,
    ProductItemsComponent,
    BankDeatilsComponent,
    CreateAccountComponent,
    CreateProductComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

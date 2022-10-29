import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles:any = [];

  public term:string ="";

  constructor(private _vehicleService:VehicleService) {

   this._vehicleService.getVehicle().subscribe(
    (data:any)=>{
    this.vehicles= data;
    },
    (error:any)=>
    {
      alert('Internal server error')
    }
    )
   }

  ngOnInit(): void {
  }
  filter(){
  this._vehicleService.getFilterVehicle(this.term).subscribe(
  (data:any)=>{this.vehicles =data;
  },
  (data:any)=>{
    alert('Internet Server Error')
  }
)
  }

}

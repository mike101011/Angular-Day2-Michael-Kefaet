import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
   carInfo=new FormGroup({
      image:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      fuel:new FormControl('',Validators.required),
      year:new FormControl('',Validators.required)
   });
  cars=[{
   image:"",
   model:"a",
   fuel:"a",
   year:"a" 
}, {
   image:"",
   model:"b",
   fuel:"b",
   year:"b"
}, {
    image:"",
    model:"c",
    fuel:"c",
    year:"c"
},{
    image:"",
   model:"d",
   fuel:"d",
   year:"d"
},{
    image:"",
   model:"e",
   fuel:"e",
   year:"e"
},{
    image:"",
   model:"f",
   fuel:"f",
   year:"f"
}];

  constructor() { }
  
  onSubmit(){
     if(this.carInfo.valid){
        let a=this.carInfo.value;
        this.cars.push(a);

     }
  }
  ngOnInit(): void {
  }

}

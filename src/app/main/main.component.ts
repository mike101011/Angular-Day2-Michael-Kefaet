import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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

  ngOnInit(): void {
  }

}

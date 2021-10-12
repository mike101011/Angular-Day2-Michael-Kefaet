import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
counter:number=0;
vipMessage:string="You are a Vip!"
  constructor() { }
plus(){
  this.counter+=10;
  console.log(this.counter);
}
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  info = new FormGroup({
  firstName: new FormControl('',Validators.required),
  lastName: new FormControl('',Validators.required),
  payment: new FormControl('',Validators.required),
  email:new FormControl('',Validators.required)
});
  constructor() { }
  onSubmit(){
    if(this.info.valid){
      let a=this.info.value;
      console.log(a);
      alert("Form ready!")
    }
  }

  ngOnInit(): void {
  }

}

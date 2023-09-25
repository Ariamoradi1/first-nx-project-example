import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FacadeService } from '../facade.service';

@Component({
  selector: 'org-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userNameControl = new FormControl('',[Validators.pattern('^[a-z0-9_-]{4,15}$')])
  emailControl = new FormControl('',[Validators.pattern('[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+')])
  lastNameValue = new FormControl('',[Validators.minLength(4)])
  ageValue = new FormControl('',[Validators.required])

  constructor(private facade:FacadeService){}

  clickHandler(){
    if(!this.userNameControl.valid || !this.emailControl.valid || !this.lastNameValue.valid || !this.ageValue.valid){
      alert('error')
    }else{
      const myObj = {
        id: Math.floor(Math.random()*5),
        name: this.userNameControl.value,
        lastName: this.lastNameValue.value,
        email: this.emailControl.value,
        age: this.ageValue.value
      }
      this.facade.dispatchUsers(myObj)
    }
  }
}

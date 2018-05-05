import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[UserService]
})


export class LoginComponent {

  constructor(private userService:UserService){

  }

  onLogin(){

  }
  onFormSubmit(form:NgForm){
    this.userService.loginUser(form.value.email,form.value.pass);
  }  

}

import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {User} from '../../models/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [UserService]
})
export class SignupComponent {


  //dependency injection
  constructor(private userService:UserService){

  }

  onSignup(){

  }

  onFormSubmit(form:NgForm){
    console.log('signup works!');
    const user:User=new User(form.value.first,form.value.last,form.value.pass,form.value.email);
    this.userService.registerUser(user);
  }

}

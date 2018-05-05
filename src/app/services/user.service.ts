import { Injectable } from '@angular/core';
import {User} from '../models/user';
@Injectable()
export class UserService {

  constructor() { }

  registerUser(user:User){
    /*
    
        Write your logic for registering the user.
    
    */
    console.log(user);
  }

  loginUser(email:string, password:string){
    /*
    
        Write your logic for registering the user.
    
    */
    console.log("user login from UserService class!");
  }



}

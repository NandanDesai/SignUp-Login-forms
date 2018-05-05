export class User {
    firstName:string;
    lastName:string;
    password:string;
    email:string;

/* 

    Add or remove fields as required

*/

    constructor(firstName:string,lastName:string,password:string,email:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.email=email;
    }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../email-validator';


interface User {
  username: string|null|undefined;
  email: string|null|undefined;
  password: string|null|undefined;
  address: {
    street: string|null|undefined;
    postalCode: string|null|undefined;
    city: string|null|undefined;
  };
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm = this.fb.group({
    username: ['', Validators.required],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', Validators.required],
    }),
    address: this.fb.group({
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required]
    })
  })
  user!:User;
  constructor(private fb: FormBuilder){}




  onSubmit() {
    console.log(this.userForm.value);
    this.user = {
      username: this.userForm.value.username,
      email: this.userForm.value.credentials?.email,
      password: this.userForm.value.credentials?.password,
      address: {
        street: this.userForm.value.address?.street,
        postalCode: this.userForm.value.address?.postalCode,
        city: this.userForm.value.address?.city
      }
    };
console.log(this.user)
  
 this.userForm.reset();
    
  }  
}

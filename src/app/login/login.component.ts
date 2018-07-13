import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private service: LoginService, private fb: FormBuilder, private router: Router) { 
    this.signInForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

  ngOnInit() {
    var sessionItem = localStorage.getItem("sessionItem");
    if(sessionItem == undefined || sessionItem == 'null'){
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  signIn(signInForm: FormGroup){
    var username = signInForm.value.username;
    var password = signInForm.value.password;

  	this.service.signIn(username, password).subscribe((loginData: any) => {
  		
      console.log(username,password);
      
      if(loginData.length > 0){
        localStorage.setItem('sessionItem',loginData[0].loginID);
  			console.log("Sign in to the system. We both know you need them.")
        this.router.navigate(['/dashboard']);
  		} else {
  			console.log("You can't fight the system. So, ease it off.");
        alert("Credentials Do Not Match. Please Try Again.");
  		}
  	
    });
  
  }

}

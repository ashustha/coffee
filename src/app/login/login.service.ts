import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  signIn(username, password){
  	return this.http.get('http://apicoffee.krennovatech.com/logins/signin/' + username + '/' + password);
  }
}

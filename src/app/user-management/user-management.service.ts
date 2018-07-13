import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserManagementService {

  constructor(private http: HttpClient) { }

  insertLogins(logins){
  	return this.http.post('http://apicoffee.krennovatech.com/logins/add', logins);
  }

  getAllProducerLogins(){
  	return this.http.get('http://apicoffee.krennovatech.com/logins/all/level1');
  }

  getAllCooperativeLogins(){
  	return this.http.get('http://apicoffee.krennovatech.com/logins/all/level2');
  }

  getAllCoffeeCompanyLogins() {
  	return this.http.get('http://apicoffee.krennovatech.com/logins/all/level3');
  }

}

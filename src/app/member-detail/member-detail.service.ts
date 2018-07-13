import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MemberDetailService {

  constructor(private http: HttpClient) { }

  getAllCoffeeDetails(){
  	return this.http.get('http://apicoffee.krennovatech.com/coffee/details');
  }

  getAllFarmerDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/farmers/details');
  }

  getPulperDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/pulpers/details');
  }

  getProcessorDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/processors/details');
  }

  getCooperativeDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/cooperatives/details');
  }

  getCafeDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/cafe/details');
  }

  getNurseryDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/nurseries/details');
  }
}

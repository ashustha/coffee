import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataEntryService {

  constructor(private http: HttpClient) { }

  getCooperativeForAffiliation(){
    return this.http.get('http://apicoffee.krennovatech.com/pulpers/get/cooperatives');
  }

  /* Coffee Services */
  addNewCoffee(newCoffee){
    return this.http.post('http://apicoffee.krennovatech.com/coffee/add', newCoffee);
  }

  addNewAreaOfCultivation(cult){
    return this.http.post('http://apicoffee.krennovatech.com/coffee/area/cultivation/add', cult);
  }

  addNewCoffeeProductionDetails(prodDetails){
    return this.http.post('http://apicoffee.krennovatech.com/coffee/prod/details/add', prodDetails);
  }

  /* Farmer Services */
  addNewFarmer(farmer){
  	return this.http.post('http://apicoffee.krennovatech.com/farmers/add', farmer);
  }

  addNewFarmerAddress(address){
  	console.log(address);
  	return this.http.post('http://apicoffee.krennovatech.com/farmers/address/add', address);
  }

  addNewFarmerAffiliation(newAffiliation){
    return this.http.post('http://apicoffee.krennovatech.com/farmers/affiliation/add', newAffiliation)
  }



  /* Cooperative Services */
  addNewCooperative(newCooperative){
    return this.http.post('http://apicoffee.krennovatech.com/cooperatives/add', newCooperative);
  }

  addNewCooperativeAddress(newAddress) {
    return this.http.post('http://apicoffee.krennovatech.com/cooperatives/address/add', newAddress);
  }


  addNewCooperativeContact(newContact){
    return this.http.post('http://apicoffee.krennovatech.com/cooperatives/contact/add', newContact);
  }

  addNewCooperativeAffiliation(newAffiliationDetials) {
    return this.http.post('http://apicoffee.krennovatech.com/cooperatives/affiliation/add', newAffiliationDetials);
  }

  /* Pulper Services */
  addNewPulper(newPulper){
    return this.http.post('http://apicoffee.krennovatech.com/pulpers/add', newPulper);
  }

  addNewPulperAddress(newPulperAddress) {
    return this.http.post('http://apicoffee.krennovatech.com/pulpers/address/add', newPulperAddress);
  }

  addNewAffiliationDetails(newAffiliation) {
    return this.http.post('http://apicoffee.krennovatech.com/pulpers/affiliations/add', newAffiliation);
  }

 

  /* Processors Services */

  addNewProcessors(newProcessor){
    return this.http.post('http://apicoffee.krennovatech.com/processors/add', newProcessor);
  }

  addNewProcessorAddress(newAddress) {
    return this.http.post('http://apicoffee.krennovatech.com/processors/address/add', newAddress);
  }

  addProcessorContactDetails(newDetails){
    return this.http.post('http://apicoffee.krennovatech.com/processors/contact/add', newDetails);
  }



  /* Cafe Services */
  addNewCafe(newCafe){
    return this.http.post('http://apicoffee.krennovatech.com/cafe/add', newCafe);
  }

  addNewCafeAddress(newAddress){
    return this.http.post('http://apicoffee.krennovatech.com/cafe/address/add', newAddress);
  }

  addNewCafeContactPerson(newContact){
    return this.http.post('http://apicoffee.krennovatech.com/cafe/contact/add', newContact);
  }

  /* Nursery Services */

  addNewNursery(newNursery) {
    return this.http.post('http://apicoffee.krennovatech.com/nurseries/add', newNursery);
  }

  addNewNurseryAddress(newAddress){
    return this.http.post('http://apicoffee.krennovatech.com/nurseries/address/add', newAddress);
  }

  addNewNurseryContact(newContact) {
    return this.http.post('http://apicoffee.krennovatech.com/nurseries/contact/add', newContact);
  }
  
  addNewCoffeeAddressDetails(newCoffeeAddressDetails){
    return this.http.post('http://apicoffee.krennovatech.com/coffee/add/address', newCoffeeAddressDetails);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductionDetailsService {

  constructor(private http: HttpClient) { }

  getAllCoffeeDetails(){
  	return this.http.get('http://apicoffee.krennovatech.com/coffee/details');
  }

  getAllFarmerDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/farmers/details');
  }

  getLatestProductionDetailsByFarmerID(farmerID){
    return this.http.get('http://apicoffee.krennovatech.com/farmers/prod/farmerID/' + farmerID);
  }

  getCooperativeDetails() {
    return this.http.get('http://apicoffee.krennovatech.com/cooperatives/details');
  }

  getLatestProductionDetailsByCooperativeID(cooperativeID) {
    return this.http.get('http://apicoffee.krennovatech.com/cooperatives/prod/cooperativeID/' + cooperativeID);
  }

  getPulperDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/pulpers/details');
  }

  getLatestProductionDetailsByPulperID(pulperID){
    return this.http.get('http://apicoffee.krennovatech.com/pulpers/prod/pulperID/' + pulperID );
  }

  getProcessorDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/processors/details');
  }

  getLatestProductionDetailsByProcessorID(processorsID){
    return this.http.get('http://apicoffee.krennovatech.com/processors/prod/processorsID/' + processorsID);
  }



  getCafeDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/cafe/details');
  }

  getNurseryDetails() {
  	return this.http.get('http://apicoffee.krennovatech.com/nurseries/details');
  }

  addNewFarmerProductionDetails(prodDetails){
  	console.log(prodDetails);
  	return this.http.post('http://apicoffee.krennovatech.com/farmers/production/details/add', prodDetails);
  }

  addNewCooperativeProductionDetails(prodDetails){
    return this.http.post('http://apicoffee.krennovatech.com/cooperatives/prod/details/add', prodDetails);
  }

  addNewProductionDetails(newProductionDetails) {
    return this.http.post('http://apicoffee.krennovatech.com/pulpers/prod/details/add', newProductionDetails);
  }

  addNewProcessorProductionDetails(newProcessorProduction){
    return this.http.post('http://apicoffee.krennovatech.com/processors/prod/details/add', newProcessorProduction);
  }

  addProcessorSupplyDetails(newSupplyDetails) {
    return this.http.post('http://apicoffee.krennovatech.com/processors/supply/add', newSupplyDetails);
  }

  addNewNurseryCoffee(newNurseryCoffee){
    return this.http.post('http://apicoffee.krennovatech.com/nurseries/coffee/plants/add', newNurseryCoffee);
  }


  searchFilter(routeParam, member){
    switch(member){
      case 'individualFarmer': {
        return this.http.get('http://apicoffee.krennovatech.com/farmers/search/filter/' + routeParam);
      }

      case 'pulper': {
        return this.http.get('http://apicoffee.krennovatech.com/pulpers/search/filter/' + routeParam);
      }

      case 'entity': {
        return this.http.get('http://apicoffee.krennovatech.com/cooperatives/search/filter/' + routeParam);
      }

      case 'processor': {
        return this.http.get('http://apicoffee.krennovatech.com/processors/search/filter/' + routeParam);
      }

      default: {
        console.log("Invalid");
      }
    }
  }



}

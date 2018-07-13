import { Component, OnInit } from '@angular/core';
import {MemberDetailService} from './member-detail.service';
@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberDetailService]
})
export class MemberDetailComponent implements OnInit {

 coffeeDetails;
	farmerDetails;
	pulperDetails;
	processorDetails;
	cooperativeDetails;
	cafeDetails;
	nurseryDetails;

  constructor(private service: MemberDetailService) { }

  ngOnInit() {
  	this.service.getAllCoffeeDetails().subscribe((coffeeDetailsData) => {
  		this.coffeeDetails = coffeeDetailsData;
  	});

  	this.service.getAllFarmerDetails().subscribe((farmerDetailsData) => {
  		this.farmerDetails = farmerDetailsData;
  	});

  	this.service.getPulperDetails().subscribe((pulperDetailsData) => {
  		this.pulperDetails = pulperDetailsData;
  	});

  	this.service.getProcessorDetails().subscribe((processorDetailsData) => {
  		console.log(processorDetailsData);
  		this.processorDetails = processorDetailsData;
  	});

  	this.service.getCooperativeDetails().subscribe((cooperativeDetailsData) => {
  		this.cooperativeDetails = cooperativeDetailsData;
  	});

  	this.service.getCafeDetails().subscribe((cafeDetailsData) => {
  		this.cafeDetails = cafeDetailsData;
  	});

  	this.service.getNurseryDetails().subscribe((nurseryDetailsData) => {
  		this.nurseryDetails = nurseryDetailsData;
  	});


  }
}

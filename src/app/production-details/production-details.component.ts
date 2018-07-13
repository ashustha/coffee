import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductionDetailsService } from './production-details.service';

@Component({
  selector: 'app-production-details',
  templateUrl: './production-details.component.html',
  styleUrls: ['./production-details.component.css'],
  providers: [ProductionDetailsService],
})
export class ProductionDetailsComponent implements OnInit {
  p:number =1 ;
  detailsLength;
	coffeeForm: FormGroup;
  individualFarmerForm;
  cooperativeForm;
  pulperForm;
  processorForm;
  cafeForm;
  nurseryMenForm;
  plantDetailsArray = [];
  farmerProductionDetails;
  pulperProductionDetails;
  processorProductionDetails;
  cooperativeProductionDetails;
  cafeProductionDetails;
  nurseryProductionDetails;
  
  farmerModal = {};
  farmerID;
  modalName;
  modalAreaOfCultivation;
  modalEstimatedProduction;
  modalThreeToFive;
  modalFiveToFifteen;
  modalFifteenPlus;
  
  entityModal = {};
  entityModalID;
  entityModalName;
  entityModalAreaOfCultivation;
  entityModalEstimatedProduction;
  entityModalThreeToFive;
  entityModalFiveToFifteen;
  entityModalFifteenPlus;

  pulperModal;
  modalPulperID;
  pulpModalName;
  pulpModalPulpingCapacity;
  pulpModalFermentation;
  pulpModalCollection;
  pulpModalParchment;

  processorModal;
  processorModalID;
  processorModalName;
  processorModalCollection;
  processorModalGreenBeans;
  processorModalRoastedBeans;
  processorModalGroundCoffee;
  processorModalTotalQuantity;

  nurseryModalID;
  nurseryModalName;
  nurseryModalYear;
  nurseryModalNoPlants;
  nurseryModalSoldPlants;

 
  count;
  pulperCount = 0;
  entityCount = 0;
  processingCount = 0;
  nurseryCount = 0;



  constructor(private fb: FormBuilder, private service: ProductionDetailsService) { 
    this.coffeeForm = fb.group({

      
      'areaOfCultivation': [null, Validators.required],
      'fruitingPlant': [null, Validators.required],
      'nonFruitingPlant': [null, Validators.required],
      'numberOfPlants': [null, Validators.required],
      'estimatedProduction': [null, Validators.required]
    
    });

    this.individualFarmerForm = fb.group({
      'year': [null, Validators.required],
      'estimatedProduction': [null, Validators.required],
      'threeToFive': [null, Validators.required],
      'fiveToFifteen': [null, Validators.required],
      'fifteenplus': [null, Validators.required],
      'areaOfCultivation': [null, Validators.required],
      'farmerAffiliationType': [null, Validators.required],
      'farmerAffiliationEntity': [null, Validators.required],
      
    });

      this.cooperativeForm = fb.group({
    
      'year': [null, Validators.required],
      'areaOfCultivation': [null,  Validators.required],
      'affiliationEntity': [null, Validators.required],
      'affiliationType':[null, Validators.required],
      'estimatedProduction': [null, Validators.required],
      'threeToFive': [null, Validators.required],
      'fiveToFifteen': [null, Validators.required],
      'fifteenPlus': [null, Validators.required],
    
    });

    this.pulperForm = fb.group({
      'year': [null, Validators.required],
      'pulperCapacity': [null, Validators.required],
      'formentationProcess': [null, Validators.required],
      'collectionFromFarmers': [null, Validators.required],
      'parchmentQuantity': [null, Validators.required]
  
    });

    this.processorForm = fb.group({
      
      'year': [null, Validators.required], 
      'collectionFromFarmer': [null, Validators.required],
      'greenBeans': [null, Validators.required],
      'roastedBeans': [null, Validators.required],
      'groundCoffee': [null, Validators.required],
      'totalQuantityProcessed': [null, Validators.required],
      'domesticMarket': [null, Validators.required],
      'internationalMarket': [null, Validators.required]

    });

  


    this.nurseryMenForm = fb.group({

      'year': [null, Validators.required],
      'numberOfPlants':[null, Validators.required],
      'soldPlants': [null, Validators.required],
      
      
    });

  }

  ngOnInit() {
    // this.service.getAllCoffeeDetails().subscribe((coffeeDetailsData) => {
    //   this.coffeeProductionDetails = coffeeDetailsData;
    // });
    this.count = 0;
    this.service.getAllFarmerDetails().subscribe((farmerDetailsData) => {
      this.farmerProductionDetails = farmerDetailsData;
      console.log(farmerDetailsData);
    });

    this.service.getPulperDetails().subscribe((pulperDetailsData) => {
      this.pulperProductionDetails = pulperDetailsData;
      console.log(this.pulperProductionDetails);
    });

    this.service.getProcessorDetails().subscribe((processorDetailsData) => {
      console.log(processorDetailsData);
      this.processorProductionDetails = processorDetailsData;
    });

    this.service.getCooperativeDetails().subscribe((cooperativeDetailsData) => {
      this.cooperativeProductionDetails = cooperativeDetailsData;
    });

    this.service.getCafeDetails().subscribe((cafeDetailsData) => {
      this.cafeProductionDetails = cafeDetailsData;
    });

    this.service.getNurseryDetails().subscribe((nurseryDetailsData) => {
      this.nurseryProductionDetails = nurseryDetailsData;
    });
   
  }

  showFields() {
    if(this.count % 2 == 0) {
      var individualFarmerForm = document.getElementById('individualFarmerForm');
      individualFarmerForm.style.display = 'block';
      
    } else {
        var individualFarmerForm = document.getElementById('individualFarmerForm');
        individualFarmerForm.style.display = 'none';
        
    }
    this.count = this.count+1;
 
  }


  showEntityFields() {
    if(this.entityCount % 2 == 0) {
      var cooperativeForm = document.getElementById('cooperativeForm');
      cooperativeForm.style.display = 'block';
      
    } else {
        var cooperativeForm = document.getElementById('cooperativeForm');
        cooperativeForm.style.display = 'none';
        
    }
    this.entityCount = this.entityCount+1;
  }

  showPulperFields(){
    if(this.pulperCount % 2 == 0) {
      var pulperForm = document.getElementById('pulperForm');
      pulperForm.style.display = 'block';
      
    } else {
        var pulperForm = document.getElementById('pulperForm');
        pulperForm.style.display = 'none';
        
    }
    this.pulperCount = this.pulperCount+1;
  }


  showProcessingFields(){
    if(this.processingCount % 2 == 0) {
      var processorForm = document.getElementById('processorForm');
      processorForm.style.display = 'block';
      
    } else {
        var processorForm = document.getElementById('processorForm');
        processorForm.style.display = 'none';
        
    }
    this.processingCount = this.processingCount+1;
  }

  showNurseryFields(){
    if(this.nurseryCount % 2 == 0) {
      var nurseryForm = document.getElementById('nurseryForm');
      nurseryForm.style.display = 'block';
      
    } else {
        var nurseryForm = document.getElementById('nurseryForm');
        nurseryForm.style.display = 'none';
        
    }
    this.nurseryCount = this.nurseryCount+1;
  }
  
  addToCoffePlants(year, numberOfPlants, soldPlants){
    var newCoffeePlants = {
      year,
      numberOfPlants,
      soldPlants,
    }

    console.log(newCoffeePlants);

    this.plantDetailsArray.push(newCoffeePlants);
  }

  addFarmerDetails(fg: FormGroup){
    var year = fg.value.year;
    var areaOfCultivation = fg.value.areaOfCultivation;
    var estimatedProduction = fg.value.estimatedProduction;
    var threeToFive = fg.value.threeToFive;
    var fiveToFifteen = fg.value.fiveToFifteen;
    var fifteenPlus = fg.value.fifteenplus;

    console.log(areaOfCultivation);

    var farmerID = this.farmerID;

     var prodDetails =  {
      farmerID,
      year,
      areaOfCultivation,
      // potentialOfProduction,
      estimatedProduction,
      threeToFive,
      fiveToFifteen,
      fifteenPlus,
      
    } 
    this.service.addNewFarmerProductionDetails(prodDetails).subscribe(() => {});
  }

  addCooperativeProductionDetails(fg: FormGroup) {
    var year = fg.value.year;
    var cooperativeAreaOfCultivation = fg.value.areaOfCultivation;
    var cooperativeEstimatedProduction = fg.value.estimatedProduction;
    var threeToFive = fg.value.threeToFive;
    var fiveToFifteen = fg.value.fiveToFifteen;
    var fifteenPlus = fg.value.fifteenPlus;

    var cooperativeID = this.entityModalID;
    var prodDetails =  {
      cooperativeID,
      year,
      cooperativeAreaOfCultivation,
      cooperativeEstimatedProduction,
      threeToFive,
      fiveToFifteen,
      fifteenPlus,
    } 
    this.service.addNewCooperativeProductionDetails(prodDetails).subscribe(() => {});
  }

  addPulperProductionDetails(fg: FormGroup) {
    var year = fg.value.year;
    var pulperCapacity = fg.value.pulperCapacity;
    var formentationProcess = fg.value.formentationProcess;
    var collectionFromFarmer = fg.value.collectionFromFarmers;
    var parchmentQuantity = fg.value.parchmentQuantity;

    var pulperID = this.modalPulperID;
    
    var newProductionDetails = {
        pulperID,
        year,
        pulperCapacity,
        formentationProcess,
        collectionFromFarmer,
        parchmentQuantity,
    }

      console.log(newProductionDetails);
      this.service.addNewProductionDetails(newProductionDetails).subscribe(() => {});
  }

  addProcessorProductionDetails(fg: FormGroup) {
    var year = fg.value.year;
    var collectionFromFarmer = fg.value.collectionFromFarmer;
    var greenBeans = fg.value.greenBeans;
    var roastedBeans = fg.value.roastedBeans;
    var groundCoffee = fg.value.groundCoffee;
    var totalQuantityProcessed = parseInt(greenBeans) + parseInt(roastedBeans) + parseInt(groundCoffee);

    var domesticMarket = fg.value.domesticMarket;
    var internationalMarket = fg.value.internationalMarket;
    var processorsID = this.processorModalID;
    console.log(processorsID);
    var newProcessorsProductionDetails = {

      processorsID,
      year,
      collectionFromFarmer,
      greenBeans,
      roastedBeans,
      groundCoffee,
      totalQuantityProcessed
    }


    this.service.addNewProcessorProductionDetails(newProcessorsProductionDetails).subscribe(() => {});
    
    var newProcessorsSupplyDetails = {
        processorsID,
        domesticMarket,
        internationalMarket,
      }
    this.service.addProcessorSupplyDetails(newProcessorsSupplyDetails).subscribe(() => {});
  }

  addNurseryProductionDetails() {
    console.log(this.plantDetailsArray);
    var nurseryID = this.nurseryModalID;
    var newNurseryCoffee = {
      nurseryID,
      nurseryCoffeeDetails: this.plantDetailsArray,
    }
    this.service.addNewNurseryCoffee(newNurseryCoffee).subscribe(() => {});
  }

  showProductionDetails(farmerID){
    this.service.getLatestProductionDetailsByFarmerID(farmerID).subscribe((details: any) => {

      this.farmerID = details[0].farmerID
      if(details.length != 0){
        this.modalName = details[0].name;
        this.modalAreaOfCultivation = details[0].areaOfCultivation;
        this.modalEstimatedProduction = details[0].estimatedProduction;
        this.modalThreeToFive = details[0].threeToFive;
        this.modalFiveToFifteen = details[0].fiveToFifteen;
        this.modalFifteenPlus = details[0].fifteenPlus;
      } else {
        this.modalName = 'Not Available. Add New';
        this.modalAreaOfCultivation = 'Not Available. Add New';
        this.modalEstimatedProduction = 'Not Available. Add New';
        this.modalThreeToFive = 'Not Available. Add New';
        this.modalFiveToFifteen = 'Not Available. Add New';
        this.modalFifteenPlus = 'Not Available. Add New';
      }
    
    
    });

  }

  showProductionDetailsCooperative(cooperativeID) {
    this.service.getLatestProductionDetailsByCooperativeID(cooperativeID).subscribe((detailsData) => {
      var details = detailsData[0];
      this.entityModalID = cooperativeID; 
      if(details.length != 0){
        
        this.entityModalName = details.name;
        this.entityModalAreaOfCultivation = details.cooperativeAreaOfCultivation;
        this.entityModalEstimatedProduction = details.cooperativeEstimatedProduction;
        this.entityModalThreeToFive = details.threeToFive;
        this.entityModalFiveToFifteen = details.fiveToFifteen;
        this.entityModalFifteenPlus = details.fifteenPlus;

      } else {
          this.entityModalName = 'Not Available. Add New';
          this.entityModalAreaOfCultivation = 'Not Available. Add New';
          this.entityModalEstimatedProduction = 'Not Available. Add New';
          this.entityModalThreeToFive = 'Not Available. Add New';
          this.entityModalFiveToFifteen = 'Not Available. Add New';
          this.entityModalFifteenPlus = 'Not Available. Add New';
      }

    });
    
  }

  showProductionDetailsPulper(pulperID) {
   
    this.service.getLatestProductionDetailsByPulperID(pulperID).subscribe((detailsData: any) => {
      console.log(detailsData);

      this.modalPulperID = pulperID;
      var details = detailsData[0];
      if(detailsData.length != 0){
        this.pulpModalName = details.name;
        this.pulpModalPulpingCapacity = details.pulperCapacity;
        this.pulpModalFermentation = details.formentationProcess;
        this.pulpModalCollection = details.collectionFromFarmer;
        this.pulpModalParchment = details.parchmentQuantity;
      } else {
        this.pulpModalName = 'Not Available. Add New';
        this.pulpModalPulpingCapacity = 'Not Available. Add New';
        this.pulpModalFermentation = 'Not Available. Add New';
        this.pulpModalCollection = 'Not Available. Add New';
        this.pulpModalParchment = 'Not Available. Add New';
      }
      

    })

  }

  showProductionDetailsProcessor(processorsID) {

    this.service.getLatestProductionDetailsByProcessorID(processorsID).subscribe((detailsData:any) => {
      var details = detailsData[0];
      this.processorModalID = processorsID;
      if(detailsData.length != 0){
        this.processorModalName = details.name;
        this.processorModalCollection = details.collectionFromFarmer;
        this.processorModalGreenBeans = details.greenBeans;
        this.processorModalRoastedBeans = details.roastedBeans;
        this.processorModalGroundCoffee = details.groundCoffee;
        this.processorModalTotalQuantity = details.totalQuantityProcessed;
      }
      else {
        this.processorModalName = 'Not Available. Add New';
        this.processorModalCollection = 'Not Available. Add New';
        this.processorModalGreenBeans = 'Not Available. Add New';
        this.processorModalRoastedBeans = 'Not Available. Add New';
        this.processorModalGroundCoffee = 'Not Available. Add New';
        this.processorModalTotalQuantity = 'Not Available. Add New';
      }
      
    });
   

  }

  showNurseryProductionDetails(details){

    this.nurseryModalID = details.nurseryID
    this.nurseryModalName = details.name;
    this.nurseryModalYear = details.year;
    this.nurseryModalNoPlants = details.nurseryID;
    this.nurseryModalSoldPlants = details.soldPlants;
  }

  /* 
    =>Search functionality for each members in production details.
    =>This function takes two arguments: a) Value from search field b) Member
    =>The member passed as parameter defines which tab in production details is calling the function.
  */

  filterSearch(filterValue, member){
    console.log(member);
      if(member == 'individualFarmer'){
        this.service.searchFilter(filterValue, 'individualFarmer').subscribe((data) => {
          this.farmerProductionDetails = data;
        });
      }

      else if(member == 'pulper'){
        this.service.searchFilter(filterValue, 'pulper').subscribe((data) => {
          this.pulperProductionDetails = data;
          console.log("Pulper")
        })
      }

      else if(member == 'entity') {
        this.service.searchFilter(filterValue, 'entity').subscribe((data) => {
          this.cooperativeProductionDetails = data;
          console.log(data);
        });
      }

      else if(member == 'processor') {
        this.service.searchFilter(filterValue, 'processor').subscribe((data) => {
          this.processorProductionDetails = data;
          console.log(data);
        });
      }

      else{
        console.log("Invalid Search.")
      }

    }

}


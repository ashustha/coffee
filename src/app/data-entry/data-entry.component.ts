import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataEntryService } from './data-entry.service'

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css'],
  providers: [DataEntryService],
})
export class DataEntryComponent implements OnInit {
  coffeeForm;
  individualFarmerForm;
  pulperForm;		
  processorForm;
  cooperativeForm;
  cooperativeData;
  cafeForm;
  nurseryMenForm;
  plantDetailsArray = [];


  constructor(private fb: FormBuilder, private service: DataEntryService) {

    this.coffeeForm = fb.group({

      'coffeeProvince': [null, Validators.required],
      'coffeeDistrict': [null, Validators.required],
      'coffeeEntityName': [null, Validators.required],
      'coffeeRuralMunicipality': [null, Validators.required],
      'coffeeWardNo': [null, Validators.required],
      'coffeeVillageCity': [null, Validators.required],
      'proprietorName': [null, Validators.required],
      'proprietorPhone': [null, Validators.required],
     
    
    });

  	this.individualFarmerForm = fb.group({
  		
      'farmerName': [null, Validators.required],
  		'contactNumber': [null, Validators.required],
  		'farmerProvince': [null, Validators.required],
  		'farmerDistrict': [null, Validators.required],
  		'farmerMunicipality': [null, Validators.required],
  		'villageCity': [null, Validators.required],
  		'wardNo': [null, Validators.required],
      'farmerAffiliationType': [null, Validators.required],
      'farmerAffiliationEntity': [null, Validators.required],
  	});

      this.cooperativeForm = fb.group({
    
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'email': [null, Validators.required],
      'province': [null, Validators.required],
      'district': [null, Validators.required],
      'ruralMunicipality': [null, Validators.required],
      'villageCity': [null, Validators.required],
      'wardNo': [null, Validators.required],
      'contactName': [null, Validators.required],
      'contactPhone': [null, Validators.required],
      'contactPosition': [null, Validators.required],
      'contactEmail': [null, Validators.required],
      'affiliationEntity': [null, Validators.required],
      'affiliationType':[null, Validators.required],
      
    
    });

    this.pulperForm = fb.group({
  
      'pulperName': [null, Validators.required],
      'phone': [null, Validators.required],
      'pulperType': [null, Validators.required],
      'province': [null, Validators.required],
      'district': [null, Validators.required],
      'ruralMunicipality': [null, Validators.required],
      'villageCity': [null, Validators.required],
      'wardNo': [null, Validators.required],
      'affiliationType': [null, Validators.required],
      'cooperativeName': [null, Validators.required],
  
    });

    this.processorForm = fb.group({
      
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'email': [null, Validators.required],
      'website': [null, Validators.required],
      'pan': [null, Validators.required],
      'contactPersonel': [null, Validators.required],
      'province': [null, Validators.required],
      'district': [null, Validators.required],
      'ruralMunicipality': [null, Validators.required],
      'villageCity': [null, Validators.required],
      'wardNo': [null, Validators.required],
      'processorContactName': [null, Validators.required],
      'processorContactPosition': [null, Validators.required],
      'processorContactNumber': [null, Validators.required],
      'processorEmail': [null, Validators.required],

    });

  

    this.cafeForm = fb.group({
      
      'name': [null, Validators.required],
      'phone': [null, Validators.required],
      'email': [null, Validators.required],
      'province': [null, Validators.required],
      'district': [null, Validators.required],
      'ruralMunicipality': [null, Validators.required], 
      'villageCity': [null, Validators.required],
      'wardNo': [null, Validators.required],
      'contactName': [null, Validators.required],
      'position': [null, Validators.required],
      'contactPhone': [null, Validators.required],
      'contactEmail': [null, Validators.required]

    });

    this.nurseryMenForm = fb.group({

      'name': [null, Validators.required],
      'nurseryPhone': [null, Validators.required],
      'nurseryEmail': [null, Validators.required],
      'yearOfEstablishment': [null, Validators.required],
      'nurseryProvince': [null, Validators.required],
      'nurseryDistrict': [null, Validators.required],
      'nurseryRuralMunicipality': [null, Validators.required],
      'nurseryVillageCity': [null, Validators.required],
      'nurseryWardNo': [null, Validators.required],
      'nurseryContactName': [null, Validators.required],
      'nurseryContactPosition': [null, Validators.required],
      'nurseryContactPhone': [null, Validators.required],
      'nurseryContactEmail': [null, Validators.required],
      
    });
  
  }

  ngOnInit() {
    this.service.getCooperativeForAffiliation().subscribe((cooperativeData)=>{
      console.log(cooperativeData);
      this.cooperativeData = cooperativeData;
    });
  }

  // addCoffee(fg: FormGroup) {
  //  console.log(fg.value);
  //  var proprietorName = fg.value.proprietorName;
  //  var proprietorPhone = fg.value.proprietorPhone;
  //  var coffeeProvince = fg.value.coffeeProvince;
  //  var individualEntityName = fg.value.coffeeEntityName;
  //  var coffeeDistrict = fg.value.coffeeDistrict;
  //  var coffeeRuralMunicipality = fg.value.coffeeRuralMunicipality;
  //  var coffeeWardNo = fg.value.coffeeWardNo;
  //  var coffeeVillageCity = fg.value.coffeeVillageCity;
  //  var name = fg.value.name;
  //  var areaOfCultivation = fg.value.areaOfCultivation;
  //  var fruitingPlant = fg.value.fruitingPlant;
  //  var nonFruitingPlant = fg.value.nonFruitingPlant;
  //  var numberOfPlants = fg.value.numberOfPlants;
  //  var estimatedProduction = fg.value.estimatedProduction;

  //  // var loginID = localStorage.getItem("loginID");
  //  var loginID = 1;

  //  var newCoffee = {
  //    loginID,
  //    proprietorName,
  //    proprietorPhone,
  //  }

  //  this.service.addNewCoffee(newCoffee).subscribe((idData)=> {
  //     var coffeeID = idData[0].coffeeID;
  //     // var newAreaOfCultivation = {
  //     //   coffeeID,
  //     //   name,
  //     //   aana,
  //     //   paisa,
  //     //   daam,
  //     //   ropaniDhur,
  //     //   kattha,
  //     //   ropani,
  //     //   bighaDhur
  //     // }
  //     // this.service.addNewAreaOfCultivation(newAreaOfCultivation).subscribe(() => {});

  //     var newCoffeeAddressDetails = {
  //       coffeeID,
  //       individualEntityName,
  //       coffeeProvince,
  //       coffeeDistrict,
  //       coffeeRuralMunicipality,
  //       coffeeWardNo,
  //       coffeeVillageCity,

  //     }
  //     this.service.addNewCoffeeAddressDetails(newCoffeeAddressDetails).subscribe(() => {});

  //     var newCoffeeProductionDetails = {
  //       coffeeID,
  //       fruitingPlant,
  //       areaOfCultivation,
  //       nonFruitingPlant,
  //       numberOfPlants,
  //       estimatedProduction
  //     }
  //     this.service.addNewCoffeeProductionDetails(newCoffeeProductionDetails).subscribe(() => {});
  //     location.reload();
  //  });



  // }

  addFarmerDetails(fg: FormGroup) {
    console.log(fg.value);
    var name = fg.value.farmerName;
    var phone = fg.value.contactNumber;
    var province = fg.value.farmerProvince;
    var district = fg.value.farmerDistrict;
    var ruralMunicipality = fg.value.farmerMunicipality;
    var villageCity = fg.value.villageCity;
    var wardNo = fg.value.wardNo;
    var affiliationType = fg.value.farmerAffiliationType;
    var affiliationEntity = fg.value.farmerAffiliationEntity;
    // var loginID = localStorage.getItem('sessionItem');
    var loginID = 1;

    var newFarmer = {
      loginID,
      name,
      phone,
    }
    this.service.addNewFarmer(newFarmer).subscribe((latestID) => {
      var farmerID = latestID[0].farmerID;


    var newAddress = { 
      farmerID,
      province,
      district,
      ruralMunicipality,
      villageCity,
      wardNo,
    }
    this.service.addNewFarmerAddress(newAddress).subscribe(() => {});

    var newAffiliation = {
      farmerID,
      affiliationType,
      affiliationEntity,
    }

    this.service.addNewFarmerAffiliation(newAffiliation).subscribe(() => {});

   
    location.reload();
    });    
  }

  addCooperativeDetails(fg: FormGroup){
    var name = fg.value.name;
    var phone = fg.value.phone;
    var email = fg.value.email;
    
    var province = fg.value.province;
    var district = fg.value.district;
    var ruralMunicipality = fg.value.ruralMunicipality;
    var villageCity = fg.value.villageCity;
    var wardNo = fg.value.wardNo;
    var cooperativeAffiliationType = fg.value.affiliationType;
    var cooperativeAffiliationEntity = fg.value.affiliationEntity;
    
    var contactName = fg.value.contactName;
    var position = fg.value.contactPosition;
    var contactPhone = fg.value.contactPhone;
    var contactEmail = fg.value.contactEmail;


    // var loginID = localStorage.getItem('sessionItem');
    var loginID = 1
    
    var newCooperative = {
      loginID,
      name,
      phone,
      email
    }

    this.service.addNewCooperative(newCooperative).subscribe((latestCooperativeID) => {
      var cooperativeID = latestCooperativeID[0].cooperativeID;

      var newCooperativeAddress = {
        cooperativeID,
        province,
        district,
        ruralMunicipality,
        villageCity,
        wardNo
      }
      this.service.addNewCooperativeAddress(newCooperativeAddress).subscribe(() => {});

      var newCooperativeAffiliationDetails = {
        cooperativeID,
        cooperativeAffiliationType,
        cooperativeAffiliationEntity,
      }
      this.service.addNewCooperativeAffiliation(newCooperativeAffiliationDetails).subscribe(() => {});

      var newCooperativeContact = {
        cooperativeID,
        contactName,
        position,
        contactPhone,
        contactEmail
      }

      this.service.addNewCooperativeContact(newCooperativeContact).subscribe(() => {});
      location.reload();
    });

  }

  addPulper(fg: FormGroup){

    var name = fg.value.pulperName;
    var phone = fg.value.phone;
    var pulperType = fg.value.pulperType;
    var province = fg.value.province;
    var district = fg.value.district;
    var ruralMunicipality = fg.value.ruralMunicipality;
    var villageCity = fg.value.villageCity;
    var wardNo = fg.value.wardNo;
    var affiliationType = fg.value.affiliationType;
    var cooperativeID = (fg.value.cooperativeName);

    // var loginID = localStorage.getItem("sessionItem");
    var loginID = 1;
    // var cooperativeID = 1;
    var date = new Date();

    var newPulper = {
      loginID,
      name,
      phone,
      pulperType,
    }
    console.log(newPulper);
    
    this.service.addNewPulper(newPulper).subscribe((latestPulperID) => {
    
      var pulperID = latestPulperID[0].pulperID;
      console.log(pulperID);

      var newAddress = {
        pulperID,
        province,
        district,
        ruralMunicipality,
        villageCity,
        wardNo,
      }

      console.log(newAddress);
      this.service.addNewPulperAddress(newAddress).subscribe(() => {});


      var newAffiliation = {
        pulperID,
        cooperativeID,
        type: affiliationType,
      }

      console.log(newAffiliation);
      this.service.addNewAffiliationDetails(newAffiliation).subscribe(() => {});
      
      location.reload();
    });
  }

  addProcessors(fg: FormGroup) {
    var name = fg.value.name;
    var phone = fg.value.phone;
    var processorEmail = fg.value.email;
    var processorWebsite = fg.value.website;
    var pan = fg.value.pan;
    var contactPerson = fg.value.contactPersonel;
    var province = fg.value.province;
    var district = fg.value.district;
    var ruralMunicipality = fg.value.ruralMunicipality;
    var villageCity = fg.value.villageCity;
    var wardNo = fg.value.wardNo;

    var processorContactName = fg.value.processorContactName;
    var processorContactPosition = fg.value.processorContactPosition;
    var processorContactNumber = fg.value.processorContactNumber;
    var processorContactEmail = fg.value.processorEmail;

    

    // var loginID = localStorage.getItem('sessionItem');
    var loginID = 1;
    console.log(fg.value);

    var newProcessors = {
      loginID,
      name,
      phone,
      processorEmail,
      processorWebsite,
      pan,
      contactPerson      
    }
    this.service.addNewProcessors(newProcessors).subscribe((processorsIDData) => {
      var processorsID = processorsIDData[0].processorsID;

      console.log(processorsID);

      var newProcessorsAddressDetails = {
        processorsID,
        province,
        district,
        ruralMunicipality,
        villageCity,
        wardNo
      }

      this.service.addNewProcessorAddress(newProcessorsAddressDetails).subscribe(() => {});
      var processorID = processorsID;
      var newProcessorContactDetails = {
        processorID,
        processorContactName,
        processorContactPosition,
        processorContactNumber,
        processorContactEmail,

      }
      this.service.addProcessorContactDetails(newProcessorContactDetails).subscribe(() => {});
      
      

      location.reload();
    });
  }

  addCafe(fg: FormGroup) {
    var name = fg.value.name;
    var phone = fg.value.phone;
    var email = fg.value.email;
    var province = fg.value.province;
    var district = fg.value.district;
    var ruralMunicipality = fg.value.ruralMunicipality;
    var villageCity = fg.value.villageCity;
    var wardNo = fg.value.wardNo;
    var contactName = fg.value.contactName;
    var position = fg.value.position;
    var contactPhone = fg.value.contactPhone;
    var contactEmail = fg.value.contactEmail;
    // var loginID = localStorage.getItem("sessionItem");
    var loginID = 1
    var newCafe = {
      loginID,
      name,
      phone,
      email,
    }

     this.service.addNewCafe(newCafe).subscribe((cafeIDData) => {
        var cafeID = cafeIDData[0].cafeID;

        var newCafeAddress = {
          cafeID:cafeID,
          province,
          district,
          ruralMunicipality,
          villageCity,
          wardNo,
       
        }
        this.service.addNewCafeAddress(newCafeAddress).subscribe(() => {});

        var newCafeContactPerson = {
          cafeID: cafeID,
          contactName,
          position,
          contactPhone,
          contactEmail
        }
        this.service.addNewCafeContactPerson(newCafeContactPerson).subscribe(() => {});   
        location.reload();
     });
  }

  addNurseryMen(fg: FormGroup){
    // var loginID = localStorage.getItem('sessionItem');
    var loginID = 1;
    var newNurseryMen = {
      loginID,
      name: fg.value.name,
      nurseryPhone: fg.value.nurseryPhone,
      nurseryEmail: fg.value.nurseryEmail,
      yearOfEstablishment: fg.value.yearOfEstablishment
    }

    this.service.addNewNursery(newNurseryMen).subscribe((idData) => {
      var nurseryID = idData[0].nurseryID;

      var newNurseryAddress = {
        nurseryID,
        nurseryProvince: fg.value.nurseryProvince,
        nurseryDistrict: fg.value.nurseryDistrict,
        nurseryRuralMunicipality: fg.value.nurseryRuralMunicipality,
        nurseryVillageCity: fg.value.nurseryVillageCity,
        nurseryWardNo: fg.value.nurseryWardNo
      }

      this.service.addNewNurseryAddress(newNurseryAddress).subscribe(() => {});

      var newNurseryContact = {
        nurseryID,
        nurseryContactName: fg.value.nurseryContactName,
        nurseryContactPosition: fg.value.nurseryContactPosition,
        nurseryContactPhone: fg.value.nurseryContactPhone,
        nurseryContactEmail: fg.value.nurseryContactEmail
      }
      this.service.addNewNurseryContact(newNurseryContact).subscribe(() => {});
      location.reload();
    });

  }



}

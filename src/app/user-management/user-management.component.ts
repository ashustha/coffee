import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers: [ UserManagementService ],
})
export class UserManagementComponent implements OnInit {
	loginsForm: FormGroup;
  level1Data;
  level2Data;
  level3Data;

  constructor(private fb: FormBuilder, private service: UserManagementService) {
  	this.loginsForm = fb.group({
  		'username': [null, Validators.required],
  		'password': [null, Validators.required],
  		'mainEmail': [null, Validators.required],
  		'loginType': [null, Validators.required],
 
  		'mainProvince': [null, Validators.required],
  		'mainDistrict': [null, Validators.required],
  		'mainRuralMunicipality': [null, Validators.required],
  		'mainVillageCity': 	[null, Validators.required],
  		'mainWardNo': [null, Validators.required],
  		'note': [null, Validators.required],
  
  		'number': [null, Validators.required],
  		'contactNote': [null, Validators.required],

  		'contactPersonName': [null, Validators.required],
  		'contactPosition': [null, Validators.required],
  		'contactNumber': [null, Validators.required],
  		'contactEmail': [null, Validators.required]
  	});


  }

  ngOnInit() {
    this.service.getAllProducerLogins().subscribe((level1) => {
      this.level1Data= level1;
    });

    this.service.getAllCooperativeLogins().subscribe((level2) => { 
      this.level2Data = level2;
    });

    this.service.getAllCoffeeCompanyLogins().subscribe((level3) => {
      this.level3Data = level3;
    }); 

  }

  addLogins(fg: FormGroup){
    
    var username = fg.value.username;
    var password = fg.value.password;
    var email = fg.value.mainEmail;
    var loginType = fg.value.loginType;

    var province = fg.value.mainProvince;
    var district = fg.value.mainDistrict;
    var ruralMunicipality = fg.value.mainRuralMunicipality;
    var villageCity = fg.value.mainVillageCity;
    var wardNo = fg.value.mainWardNo;
    var note = fg.value.note;

    var number = fg.value.number;
    var contactNote = fg.value.contactNote;

    var contactPersonName = fg.value.contactPersonName;
    var position = fg.value.contactPosition;
    var contactNumber = fg.value.contactNumber;
    var contactEmail = fg.value.contactEmail;

    var newLogins = {
      username,
      password,
      email,
      loginType,
     
      province,
      district,
      ruralMunicipality,
      villageCity,
      wardNo,
      note,
      
      number,
      contactNote,
   
      contactPersonName,
      position,
      contactNumber,
      contactEmail,
    }
    this.service.insertLogins(newLogins).subscribe();
    alert("User Credentials Successfully Added");
    location.reload();

  }

}

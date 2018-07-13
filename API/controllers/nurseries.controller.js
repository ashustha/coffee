const mysql = require('mysql');

const host = 'localhost';
const user = 'root';
const password = '';
const database = 'coffee';

const db = mysql.createConnection({
	host,
	user,
	password,
	database,
});


module.exports = {
	getAllNurseryDetails,
	insertNursery,
	insertNurseryCoffee,
	insertNurseryAddress,
	insertNurseryContactPerson,
}

function getAllNurseryDetails(req, res) {
	db.query("SELECT * FROM nurseries, nurseryAddressDetails, nurseryCoffeeDetails, nurseryContactDetails WHERE " +
			"nurseries.nurseryID = nurseryAddressDetails.nurseryID && nurseries.nurseryID = nurseryCoffeeDetails.nurseryID && nurseries.nurseryID = nurseryContactDetails.nurseryID", (err,data) => {
				if(err){
					console.log(err);
				} else {
					res.json(data);
				}
			});
}

function insertNursery(req, res) {
	db.query("INSERT INTO nurseries (loginID, name, nurseryPhone, nurseryEmail, yearOfEstablishment) values (?,?,?,?,?)", [req.body.loginID, req.body.name, req.body.nurseryPhone, req.body.nurseryEmail,req.body.yearOfEstablishment], (err, data) => {
		if(err)
			console.log(err)
		else{
			console.log("Nursery Inserted Successfully");

			db.query("SELECT nurseryID from nurseries WHERE nurseryID = (SELECT MAX(nurseryID) from nurseries)", (err, data) => {
				res.json(data);
			});
		}

	})
}

function insertNurseryCoffee(req, res) {
	var nurseryID = req.body.nurseryID;
	var nursCoffeeArray = req.body.nurseryCoffeeDetails;	

	console.log(nursCoffeeArray);
	for(var i = 0; i < nursCoffeeArray.length; i++) {
		db.query("INSERT INTO nurseryCoffeeDetails (nurseryID, year, numberOfPlants, soldPlants) values (?,?,?,?)", [nurseryID,nursCoffeeArray[i].year,nursCoffeeArray[i].numberOfPlants,nursCoffeeArray[i].soldPlants], (err,data) => {
		if(err){
			console.log(err)
		} else {
			console.log("Nurseries Coffee Details Added Successfully On: " + new Date() + " . Total Data Added: " +i);
		}
	})
	}
	
}

function insertNurseryAddress(req, res) {
	var nurseryID = req.body.nurseryID;
	var nurseryProvince = req.body.nurseryProvince;
	var nurseryDistrict = req.body.nurseryDistrict;
	var nurseryRuralMunicipality = req.body.nurseryRuralMunicipality;
	var nurseryVillageCity = req.body.nurseryVillageCity;
	var nurseryWardNo = req.body.nurseryWardNo;

	db.query("INSERT INTO nurseryAddressDetails (nurseryID, nurseryProvince,nurseryDistrict, nurseryRuralMunicipality, nurseryVillageCity, nurseryWardNo) values (?,?,?,?,?,?)", [nurseryID, nurseryProvince,nurseryDistrict,nurseryRuralMunicipality,nurseryVillageCity,nurseryWardNo], (err, data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Nursery Address Details Has Been Added Successfully. On: " + new Date());
		}
	});
}

function insertNurseryContactPerson(req, res) {
	var nurseryID = req.body.nurseryID;
	var nurseryContactName = req.body.nurseryContactName;
	var nurseryContactPosition = req.body.nurseryContactPosition;
	var nurseryContactPhone = req.body.nurseryContactPhone;
	var nurseryContactEmail = req.body.nurseryContactEmail;

	db.query("INSERT INTO nurseryContactDetails (nurseryID, nurseryContactName, nurseryContactPosition, nurseryContactPhone, nurseryContactEmail) values (?,?,?,?,?)", [nurseryID, nurseryContactName,nurseryContactPosition,nurseryContactPhone, nurseryContactEmail], (err, data) => {
		if(err){
			console.log(err)
		} else {
			console.log("Nursery Contact Person Details Added Successfully On: " + new Date());
		}
	});
}

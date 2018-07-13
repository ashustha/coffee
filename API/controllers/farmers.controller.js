var sql = require('mysql');

var db = sql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'coffee'
});

module.exports = {
	getFarmerDetails,
	searchFarmer,
	getLatestProductionDetailsByFarmerID,
	insertFarmer,
	insertFarmerAddress,
	insertFarmerAffiliationDetails,
	insertFarmerProductionDetails,
	
}

function getFarmerDetails(req, res){
	db.query("SELECT * FROM farmers,farmerAddressDetails,farmerProductionDetails WHERE farmers.farmerID = farmerAddressDetails.farmerID && farmers.farmerID = farmerProductionDetails.farmerID", (err,data)=> {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function searchFarmer(req, res) {
	var param = parseInt(req.params.filter);

	db.query("SELECT * FROM farmers, farmerAddressDetails, farmerAffiliationDetails WHERE farmers.farmerID = ? && farmerAddressDetails.farmerID = ? &&farmerAffiliationDetails.farmerID = ? " , [param, param, param], (err,data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
			console.log(data[0]);
		}
	});
}

function insertFarmer(req, res) {
	var name = req.body.name;
	var phone = req.body.phone;
	var loginID = req.body.loginID;

	db.query("INSERT INTO farmers(name,phone,loginID) values (?,?,?)", [name,phone,loginID],(err, insertData)=>{
		if(err){
			console.log(err);
		} else {
			console.log("Farmer Data Successfully Inserted On: " + new Date());
			db.query("SELECT farmerID from farmers WHERE farmerID = (SELECT MAX(farmerID) FROM farmers)", (err, latestID) => {
				if(err)
					console.log(err);
				else
					console.log(latestID);
					res.json(latestID);
			});
		}
	});
}

function insertFarmerAddress(req, res) {
	var farmerID = req.body.farmerID;
	var province =  req.body.province;
	var district = req.body.district;
	var ruralMunicipality = req.body.ruralMunicipality;
	var villageCity = req.body.villageCity;
	var wardNo = req.body.wardNo;

	db.query("INSERT INTO farmerAddressDetails (farmerID, province, district, ruralMunicipality, villageCity, wardNo) values(?,?,?,?,?,?)", [farmerID,province, district,ruralMunicipality,villageCity,wardNo], (err,data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Farmer Address Inserted Successfully On: " + new Date())
		}
	});
}

function insertFarmerAffiliationDetails(req, res) {
	var farmerID = req.body.farmerID;
	var affiliationType = req.body.affiliationType;
	var affiliationEntity = req.body.affiliationEntity;

	db.query("INSERT INTO farmerAffiliationDetails (farmerID, affiliationType,affiliationEntity) values(?,?,?)", [farmerID, affiliationType, affiliationEntity], (err,data) => {
		if(err) {
			console.log(err);
		} else {
			console.log("Farmer affiliations added On: " + new Date());
		}
	});
}

function insertFarmerProductionDetails(req, res) {
	var farmerID = req.body.farmerID;
	var year = req.body.year;
	var areaOfCultivation = req.body.areaOfCultivation;
	// var potentialOfProduction = req.body.potentialOfProduction;
	var estimatedProduction = req.body.estimatedProduction;
	var threeToFive = req.body.threeToFive;
	var fiveToFifteen = req.body.fiveToFifteen;
	var fifteenPlus = req.body.fifteenPlus;

	db.query("INSERT INTO farmerProductionDetails (farmerID, year, areaOfCultivation, estimatedProduction, threeToFive, fiveToFifteen,fifteenPlus) values (?,?,?,?,?,?,?)", [farmerID,year,areaOfCultivation,estimatedProduction,threeToFive,fiveToFifteen,fifteenPlus], (err, data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Farmer Production Details Added Successfully On: " + new Date());
		}
	});

}

function getLatestProductionDetailsByFarmerID(req, res) {
	var farmerID = req.params.farmerID;

	db.query("SELECT * FROM farmers, farmerProductionDetails WHERE farmers.farmerID = ? && farmerProductionDetails.farmerID = ? && farmerProductionDetails.productionDetailsID = (SELECT MAX(productionDetailsID) from farmerProductionDetails WHERE farmerID = ?)",[farmerID, farmerID, farmerID], (err, data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}
var sql = require('mysql');

var db = sql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'coffee'
});

module.exports = {
	getAllPulperDetails,
	searchPulper1,
	getLatestProductionDetailsByPulperID,
	insertPulper,
	insertPulperAddress,
	insertAffiliationDetails,
	insertPulperProductionDetails,
	getCooperativeForAffiliations
}

function getAllPulperDetails(req, res) {
	db.query("SELECT * from pulpers, pulperAddressDetails,affiliationDetails, pulperProductionDetails WHERE" + 
			" pulpers.pulperID = pulperAddressDetails.pulperID && pulpers.pulperID = affiliationDetails.pulperID && pulpers.pulperID = pulperProductionDetails.pulperID", (err,data) => {
				if(err){
					console.log(err);
				} else {
					res.json(data);
				}
	});
}

function searchPulper1(req, res) {
	var param = req.params.filter;

	db.query("SELECT * FROM pulpers, pulperAddressDetails, affiliationDetails WHERE pulpers.pulperID = ? && pulperAddressDetails.pulperID = ? && affiliationDetails.pulperID = ?",[param, param, param], (err,data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function getCooperativeForAffiliations(req, res) {
	db.query("SELECT * FROM cooperatives", function(err,data){
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	})
}

function insertPulper(req, res) {
	db.query("INSERT INTO pulpers(loginID, name, phone, pulperType) values (?,?,?,?)", [req.body.loginID,req.body.name,req.body.phone, req.body.pulperType], (err, data) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Pulper Inserted Successfully. On: " + new Date());
			db.query("SELECT pulperID from pulpers WHERE pulperID = (SELECT MAX(pulperID) from pulpers)", (err,data) => {
				console.log(data);
				res.json(data);
			});

		}
	})
}

function insertPulperAddress(req, res) {
	var pulperID = req.body.pulperID;
	var province = req.body.province;
	var district = req.body.district;
	var ruralMunicipality = req.body.ruralMunicipality;
	var villageCity = req.body.villageCity;
	var wardNo = req.body.wardNo;

	db.query("INSERT INTO pulperAddressDetails (pulperID, province, district, ruralMunicipality, villageCity, wardNo) values (?,?,?,?,?,?)", [pulperID,province,district,ruralMunicipality,villageCity,wardNo], (err, data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Pulper Address Added Successfully On: " + new Date());
		}
	});
}

function insertAffiliationDetails(req, res) {
	db.query("INSERT INTO affiliationDetails (pulperID, cooperativeID, type) values (?,?,?)", [req.body.pulperID, req.body.cooperativeID,req.body.type], (err, data)=> {
		if(err){
			console.log(err);
		} else {
			console.log("Affiliations Added Successfully. On: " + new Date());
		}
	});
}

function insertPulperProductionDetails(req, res) {
	var pulperID = req.body.pulperID;
	var pulperCapacity = req.body.pulperCapacity;
	var formentationProcess = req.body.formentationProcess;
	var year = req.body.year;
	var collectionFromFarmer = req.body.collectionFromFarmer;
	var parchmentQuantity = req.body.parchmentQuantity;

	db.query("INSERT INTO pulperProductionDetails (pulperID, pulperCapacity, year, formentationProcess, collectionFromFarmer, parchmentQuantity) values(?,?,?,?,?,?)", [pulperID,pulperCapacity,year,formentationProcess,collectionFromFarmer,parchmentQuantity], (err, data) => {
		if(err){
			console.log(err)
		} else {
			console.log("Pulper Production Details Added Successfully. On: " + new Date());
		}
	});
}

function getLatestProductionDetailsByPulperID(req, res) {
	var pulperID = parseInt(req.params.pulperID);
	console.log(pulperID);
	db.query("SELECT * from pulpers, pulperProductionDetails WHERE pulpers.pulperID = ? && pulperProductionDetails.pulperID = ? && pulperProductionDetails.pulperProductionDetailsID = (SELECT MAX(pulperProductionDetailsID) from pulperProductionDetails WHERE pulperProductionDetails.pulperID = ?) ", [pulperID, pulperID, pulperID], (err,data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}
var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'coffee'
});

module.exports = {
	getAllProcessorDetails,
	searchProcessors,
	getLatestProductionDetailsByProcessorsID,
	insertProcessors,
	insertProcessorAddressDetail,
	insertProcessorContactDetails,
	insertProcessorProductionDetails,
	insertProcessorSupplyDetails,
};

function getAllProcessorDetails(req, res) {
	db.query("SELECT * FROM processors, processorAddressDetails, processorProductionDetails WHERE processors.processorsID = processorAddressDetails.processorsID && processors.processorsID = processorProductionDetails.processorsID", (err,data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function searchProcessors(req, res) {
	var processorsID = req.params.filter;

	db.query("SELECT * FROM processors, processorAddressDetails, processorContactPerson WHERE processors.processorsID = ? && processorAddressDetails.processorsID = ? && processorContactPerson.processorsID = ?", [processorsID,processorsID,processorsID], (err,data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function getLatestProductionDetailsByProcessorsID(req, res) {
	var processorsID = req.params.processorsID;

	db.query("SELECT * FROM processors, processorProductionDetails WHERE processors.processorsID = ? && processorProductionDetails.processorsID = ? && processorProductionDetails.processorProductionDetailID = (SELECT MAX(processorProductionDetailID) FROM processorProductionDetails WHERE processorProductionDetails.processorsID = ?)", [processorsID,processorsID,processorsID], (err,data) => {
		if(err){
			console.log(err)
		} else {
			res.json(data);
		}
	});
}

function insertProcessors(req, res){
	var loginID = req.body.loginID;
	var name = req.body.name;
	var phone = req.body.phone;
	var processorEmail = req.body.processorEmail;
	var processorWebsite = req.body.processorWebsite;
	var pan = req.body.pan;
	var contactPerson = req.body.contactPerson;

	db.query("INSERT INTO processors (loginID,name,phone,processorEmail, processorWebsite, pan, contactPerson) values(?,?,?,?,?,?,?)", [loginID, name, phone,processorEmail, processorWebsite, pan, contactPerson],(err, data) => {
		if(err){
			console.log(err)
		} else {
			console.log("Processor Added Successfully On: " + new Date());

			db.query("SELECT processorsID from processors WHERE processorsID = (SELECT MAX(processorsID) from processors)", (err, data) => {
				console.log(data);
				res.json(data);
			});
		}
	});
}

function insertProcessorAddressDetail(req, res) {
	var processorsID = req.body.processorsID;
	var province = req.body.province;
	var district = req.body.district;
	var ruralMunicipality = req.body.ruralMunicipality;
	var villageCity = req.body.villageCity;
	var wardNo = req.body.wardNo;

	db.query("INSERT INTO processorAddressDetails (processorsID, province, district, ruralMunicipality, villageCity, wardNo) values (?,?,?,?,?,?)",[processorsID, province, district,ruralMunicipality, villageCity, wardNo],(err, data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Processor Address Details Added On: " + new Date());
		}
	});
}

function insertProcessorContactDetails(req, res) {
	db.query("INSERT INTO processorContactPerson (processorID, processorContactName, processorContactPosition, processorContactNumber, processorContactEmail) values (?,?,?,?,?)", [req.body.processorID, req.body.processorContactName, req.body.processorContactPosition, req.body.processorContactNumber, req.body.processorContactEmail], (err,data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Processor Contact Details Added Successfully On :" + new Date());
		}
	});
}

function insertProcessorProductionDetails(req, res) {
	var processorsID = req.body.processorsID;
	var year = req.body.year;
	var collectionFromFarmer = req.body.collectionFromFarmer;
	var greenBeans = req.body.greenBeans;
	var roastedBeans = req.body.roastedBeans;
	var groundCoffee = req.body.groundCoffee;
	var totalQuantityProcessed = req.body.totalQuantityProcessed

	db.query("INSERT INTO processorProductionDetails (processorsID, year, collectionFromFarmer, greenBeans,roastedBeans,groundCoffee,totalQuantityProcessed) values(?,?,?,?,?,?,?)", [processorsID, year, collectionFromFarmer,greenBeans, roastedBeans,groundCoffee,totalQuantityProcessed], (err,data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Processor Production Details Added Successfully On: " + new Date());
		}
	});
}

function insertProcessorSupplyDetails(req, res) {
	var processorsID = req.body.processorsID;
	var domesticMarket = req.body.domesticMarket;
	var internationalMarket = req.body.internationalMarket;

	db.query("INSERT INTO processorSupplyDetails (processorsID,domesticMarket,internationalMarket) values (?,?,?)", [processorsID, domesticMarket, internationalMarket], (err,data) => {
		if(err) {
			console.log(err)
		} else {
			console.log("Processor Supply Details Added Successfully On: " + new Date());
		}
	});
}
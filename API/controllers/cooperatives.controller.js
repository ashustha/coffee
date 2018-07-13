var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'coffee'
});

module.exports = {
	getAllCooperativeData,
	searchEntity,
	getLatestProductionDetailsByEntityID,
	insertCooperative,
	insertCooperativeAddress,
	insertCooperativeAffiliationDetails,
	insertCooperativeProductionDetails,
	insertCooperativeContact
}

function getAllCooperativeData(req, res) {
	db.query("SELECT * FROM cooperatives, cooperativeAddress, cooperativeContact, cooperativeProductionDetails WHERE cooperatives.cooperativeID = cooperativeAddress.cooperativeID && cooperatives.cooperativeID = cooperativeContact.cooperativeID && cooperatives.cooperativeID = cooperativeProductionDetails.cooperativeID", (err, data) => {
		if(err) {
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function searchEntity(req,res){
	var cooperativeID = req.params.filter;

	db.query("SELECT * FROM cooperatives, cooperativeAddress, cooperativeContact, cooperativeAffiliationDetails WHERE cooperatives.cooperativeID = ? && cooperativeAddress.cooperativeID = ? && cooperativeContact.cooperativeID = ? && cooperativeAffiliationDetails.cooperativeID = ?", [cooperativeID,cooperativeID,cooperativeID,cooperativeID],(err,data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	})
}

function insertCooperative(req, res) {
	db.query("INSERT INTO cooperatives (loginID,name,phone,email) values(?,?,?,?)",[req.body.loginID, req.body.name, req.body.phone, req.body.email], (err, data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Cooperatives Successfully Added On: " + new Date());
			db.query("SELECT cooperativeID from cooperatives WHERE cooperativeID = (SELECT MAX(cooperativeID) from cooperatives)", function(err, data){
				if(err){
					console.log(err)
				} else {
					console.log(data);
					res.json(data);
				}
			});
		}
	});
}

function insertCooperativeAddress(req, res) {
	db.query("INSERT INTO cooperativeAddress (cooperativeID, province, district, ruralMunicipality, villageCity, wardNo) values(?,?,?,?,?,?)", [req.body.cooperativeID, req.body.province, req.body.district, req.body.ruralMunicipality, req.body.villageCity, req.body.wardNo], (err, data) => {
		if(err){
			console.log(err)
		} else {
			console.log("Cooperative Address Inserted On: " + new Date() + ".");
		}
	});
}

function insertCooperativeAffiliationDetails(req, res) {
	var cooperativeID = req.body.cooperativeID;
	var cooperativeAffiliationType = req.body.cooperativeAffiliationType;
	var cooperativeAffiliationEntity = req.body.cooperativeAffiliationEntity;
	db.query("INSERT INTO cooperativeAffiliationDetails (cooperativeID, cooperativeAffiliationType, cooperativeAffiliationEntity) values (?,?,?)", [cooperativeID, cooperativeAffiliationType,cooperativeAffiliationEntity], (err,data) => {
		if(err) {
			console.log(err);
		} else {
			console.log("Cooperative Affiliations Added On: " + new Date());
		}
	})
}

function insertCooperativeProductionDetails(req, res) {
	var cooperativeID = req.body.cooperativeID;
	var year = req.body.year;
	var cooperativeAreaOfCultivation = req.body.cooperativeAreaOfCultivation;
	var cooperativeEstimatedProduction = req.body.cooperativeEstimatedProduction;
	var threeToFive = req.body.threeToFive;
	var fiveToFifteen = req.body.fiveToFifteen;
	var fifteenPlus = req.body.fifteenPlus;

	db.query("INSERT INTO cooperativeProductionDetails (cooperativeID,year, cooperativeAreaOfCultivation, cooperativeEstimatedProduction,threeToFive,fiveToFifteen,fifteenPlus) values (?,?,?,?,?,?,?)", [cooperativeID, year, cooperativeAreaOfCultivation, cooperativeEstimatedProduction,threeToFive,fiveToFifteen,fifteenPlus], (err,data) => {
		if(err) {
			console.log(err)
		} else {
			console.log("Cooperative Production Details Successfully Added On: " + new Date());
		}
	});
}

function getLatestProductionDetailsByEntityID(req, res) {
	var cooperativeID = req.params.cooperativeID;

	db.query("SELECT * from cooperatives, cooperativeProductionDetails WHERE cooperatives.cooperativeID = ? && cooperativeProductionDetails.cooperativeID = ? && cooperativeProductionDetails.cooperativeProductionDetailsID = (SELECT MAX(cooperativeProductionDetailsID) FROM cooperativeProductionDetails WHERE cooperativeProductionDetails.cooperativeID = ?)", [cooperativeID,cooperativeID,cooperativeID], (err, data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function insertCooperativeContact(req, res) {
	db.query("INSERT INTO cooperativeContact (cooperativeID, contactName, position, contactPhone, contactEmail) values(?,?,?,?,?)", [req.body.cooperativeID, req.body.contactName, req.body.position, req.body.contactPhone, req.body.contactEmail], (err, data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Cooperative Contact Added Successfully On: " + new Date());
		}
	});
}
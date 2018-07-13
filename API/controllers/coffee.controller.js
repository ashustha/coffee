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
	getAllCoffeeDetails,
	insertCoffee,
	insertCoffeeAddress,
	insertCoffeeAreaOfCultivation,
	insertCoffeeProductionDetails,
}

function getAllCoffeeDetails(req, res) {
	db.query("SELECT * FROM coffee,coffeeAddressDetails,areaOfCultivation,coffeeProductionDetails WHERE coffee.coffeeID = coffeeAddressDetails.coffeeID && coffee.coffeeID = areaOfCultivation.coffeeID && coffee.coffeeID = coffeeProductionDetails.coffeeID", (err, data) => {
		if(err) {
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function insertCoffee(req, res) {
	var loginID = req.body.loginID;
	var proprietorName = req.body.proprietorName;
	var proprietorPhone = req.body.proprietorPhone;

	db.query("INSERT INTO coffee(loginID, proprietorName,proprietorPhone) values (?,?,?)", [loginID, proprietorName, proprietorPhone], (err,data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Coffee Added Successfully On: " + new Date());
			db.query("SELECT coffeeID from coffee WHERE coffeeID = (SELECT MAX(coffeeID) from coffee)", (err, data) => {
				if(err){
					console.log(err);
				} else {
					res.json(data);
				}
			})
		}
	});
}

function insertCoffeeAddress(req, res) {
	var coffeeID = req.body.coffeeID;
	var individualEntityName = req.body.individualEntityName;
	var coffeeProvince = req.body.coffeeProvince;
	var coffeeDistrict = req.body.coffeeDistrict;
	var coffeeRuralMunicipality = req.body.coffeeRuralMunicipality;
	var coffeeWardNo = req.body.coffeeWardNo;
	var coffeeVillageCity = req.body.coffeeVillageCity;

	db.query("INSERT INTO coffeeAddressDetails (individualEntityName, coffeeID, coffeeProvince,coffeeDistrict,coffeeRuralMunicipality,coffeeWardNo,coffeeVillageCity) values(?,?,?,?,?,?,?)", [individualEntityName, coffeeID, coffeeProvince,coffeeDistrict,coffeeRuralMunicipality,coffeeWardNo,coffeeVillageCity], (err,data)=> {
		if(err){
			console.log(err);
		} else {
			console.log("Coffee Address Successfully Added On: " + new Date());
		}
	});

}

function insertCoffeeAreaOfCultivation(req, res) {
/*	
	var coffeeID = req.body.coffeeID;
	var name = req.body.name;
	var aana =req.body.aana;
	var paisa = req.body.paisa;
	var daam = req.body.daam;
	var ropaniDhur = req.body.ropaniDhur;
	var kattha = req.body.kattha;
	var ropani =req.body.ropani;
	var bighaDhur = req.body.bighaDhur;

	db.query("INSERT into areaOfCultivation (coffeeID, name, aana, paisa, daam, ropaniDhur, kattha, ropani,bighaDhur) values(?,?,?,?,?,?,?,?,?)", [coffeeID, name, aana, paisa,daam,ropaniDhur, kattha, ropani,bighaDhur], (err, data) => {
		if(err){
			console.log(err);
		} else {
			console.log("Area of cultivation Added Successfully");
		}
	});
*/
}


function insertCoffeeProductionDetails(req, res) {
	var coffeeID = req.body.coffeeID;
	var fruitingPlant = req.body.fruitingPlant;
	var nonFruitingPlant = req.body.nonFruitingPlant;
	var numberOfPlants = req.body.numberOfPlants;
	var estimatedProduction = req.body.estimatedProduction;
	var areaOfCultivation = req.body.areaOfCultivation;

	db.query("INSERT INTO coffeeProductionDetails(coffeeID, fruitingPlant,nonFruitingPlant,numberOfPlants,estimatedProduction, areaOfCultivation) values (?,?,?,?,?,?)",[coffeeID, fruitingPlant,nonFruitingPlant,numberOfPlants,estimatedProduction, areaOfCultivation], (err, dat) => {
		if(err){
			console.log(err);
		} else {
			console.log("Coffee Production Details Added Successfully On: " + new Date());
		}
	});
}
var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'coffee'
});

module.exports = {
	getAllCafeDetails,
	insertCafe,
	insertCafeAddress,
	insertCafeContactPerson,
}

function getAllCafeDetails(req, res){
	db.query("SELECT * FROM cafe, cafeAddress, cafeContactPerson WHERE cafe.cafeID = cafeAddress.cafeID && cafe.cafeID = cafeContactPerson.cafeID", (err, data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function insertCafe(req, res) {
	var name = req.body.name;
	var phone = req.body.phone;
	var email = req.body.email;
	var loginID = req.body.loginID;

	db.query("INSERT INTO cafe (loginID,name,phone,email) values (?,?,?,?)", [loginID, name, phone, email],(err, data) => {
		if(err) {
			console.log(err);
		} else {
			console.log("Cafe Inserted Successfully On: " + new Date());
			db.query("SELECT cafeID from cafe WHERE cafeID = (SELECT MAX(cafeID) from cafe)", (err,data) => {
				console.log(data);
				res.json(data);
			})
		}
	});
}

function insertCafeAddress(req, res) {
	var cafeID = req.body.cafeID;
	var province = req.body.province;
	var district = req.body.district;
	var ruralMunicipality = req.body.ruralMunicipality;
	var villageCity = req.body.villageCity;
	var wardNo = req.body.wardNo;

	db.query("INSERT INTO cafeAddress (cafeID, province, district, ruralMunicipality, villageCity, wardNo) values(?,?,?,?,?,?)", [cafeID, province,district,ruralMunicipality,villageCity,wardNo], (err, data) => {
		if(err){
			console.log(err)
		} else {
			console.log("Cafe Address Details Added Successfully On: " + new Date());
		}
	})


}

function insertCafeContactPerson(req, res) {
	var cafeID = req.body.cafeID;
	var contactName = req.body.contactName;
	var position = req.body.position;
	var contactPhone = req.body.contactPhone;
	var contactEmail = req.body.contactEmail;

	db.query("INSERT INTO cafeContactPerson (cafeID, contactName, position, contactPhone, contactEmail) values (?,?,?,?,?)", [cafeID, contactName,position,contactPhone,contactEmail], (err,data) => {
		if(err){
			console.log(err)
		} else {
			console.log("Cafe Contact Person Added Successfully On: " + new Date());
		}
	})
}
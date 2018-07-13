var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'coffee'
});

module.exports = {
	getAllLogins: getAllLogins,
	getLoginsByLoginID: getLoginsByLoginID,
	getAllLevel1: getAllLevel1,
	getAllLevel2: getAllLevel2,
	getAllLevel3: getAllLevel3,
	signIn: signIn,
	insertLogins: insertLogins,
}

function insertLogins(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var loginType = req.body.loginType;

	db.query("INSERT INTO logins (username, password, email, loginType) values (?,?,?,?)", [username, password,email,loginType], (err, data) => {
		if(err){
			console.log(err);
		} else {
			db.query("SELECT loginID from logins WHERE loginID = (SELECT MAX(loginID) from logins)", (err, data) => {
				var loginID = data[0].loginID;
				console.log(loginID);

				db.query("INSERT INTO address (loginID, province, district, ruralMunicipality, villageCity, wardNo, note) values (?,?,?,?,?,?,?)", [loginID, req.body.province, req.body.district, req.body.ruralMunicipality, req.body.villageCity, req.body.wardNo, req.body.note], (err, data) => {
					if(err){
						console.log(err)
					} else {
						console.log("Address Successfully Added. On: " + new Date())
					}
				});

				db.query("INSERT INTO contacts (loginID, number, contactNote) values (?,?,?)", [loginID, req.body.number, req.body.contactNote], (err, data) => {
					if(err){
						console.log(err)
					} else {
						console.log("Contacts Added Successfully On: " + new Date());
					}
				});

				db.query("INSERT INTO contactPersonels (loginID, contactPersonName, position, contactNumber, contactEmail) values(?,?,?,?,?)", [loginID, req.body.contactPersonName, req.body.position, req.body.contactNumber, req.body.contactEmail], (err,data) => {
					if(err){
						console.log(err);
					} else {
						console.log("Contact Personels Added Successfully On: " + new Date());
					}
				})
			});
		}
	})

}

function getAllLogins(req, res) {
	db.query("SELECT * FROM logins", (err, data) => {
		if(err){
			console.log(err)
		} else {
			res.json(data);
		}
	})
}

function getLoginsByLoginID(req, res) {
	var loginID = req.params.loginID;
	db.query("SELECT * FROM logins WHERE loginID = ?", [loginID], function(err,data) {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function getAllLevel1(req, res) {
	db.query("SELECT * FROM logins, address,contacts,contactPersonels WHERE logins.loginID = address.loginID && logins.loginID = contacts.loginID && logins.loginID = contactPersonels.loginID && logins.loginType = 'level1'", (err, data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function getAllLevel2(req, res) {
	db.query("SELECT * FROM logins, address,contacts,contactPersonels WHERE logins.loginID = address.loginID && logins.loginID = contacts.loginID && logins.loginID = contactPersonels.loginID && logins.loginType = 'level2'", (err, data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}

function getAllLevel3(req, res) {
	db.query("SELECT * FROM logins, address,contacts,contactPersonels WHERE logins.loginID = address.loginID && logins.loginID = contacts.loginID && logins.loginID = contactPersonels.loginID && logins.loginType = 'level3'", (err, data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}



function signIn(req, res) {
	var username = req.params.username;
	var password = req.params.password;

	db.query("SELECT * FROM logins WHERE username = ? && password = ?", [username, password], (err, data) => {
		if(err){
			console.log(err);
		} else {
			res.json(data);
		}
	});
}
const express = require('express');
const router = express.Router();

module.exports = router;

const loginsController = require('./controllers/logins.controller');
const coffeeController = require('./controllers/coffee.controller');
const farmersController = require('./controllers/farmers.controller');
const cooperativesController =require('./controllers/cooperatives.controller');
const pulpersController = require('./controllers/pulpers.controller');
const processorsController = require('./controllers/processors.controller');
const cafeController = require('./controllers/cafe.controller');
const nurseriesController = require('./controllers/nurseries.controller');

/* ----- Routes For Logins ----- */

router.get('/logins/all', loginsController.getAllLogins);
router.get('/logins/loginID/:loginID', loginsController.getLoginsByLoginID);
router.get('/logins/all/level1', loginsController.getAllLevel1);
router.get('/logins/all/level2', loginsController.getAllLevel2);
router.get('/logins/all/level3', loginsController.getAllLevel3);
router.get('/logins/signin/:username/:password', loginsController.signIn);
router.post('/logins/add',loginsController.insertLogins);

/* ----- Routes For Coffee ----- */
router.get('/coffee/details', coffeeController.getAllCoffeeDetails);
router.post('/coffee/add', coffeeController.insertCoffee);
router.post('/coffee/add/address', coffeeController.insertCoffeeAddress);
router.post('/coffee/area/cultivation/add', coffeeController.insertCoffeeAreaOfCultivation);
router.post('/coffee/prod/details/add', coffeeController.insertCoffeeProductionDetails);

/* ----- Routes For Farmers ----- */
router.get('/farmers/details',farmersController.getFarmerDetails);
router.get('/farmers/search/filter/:filter', farmersController.searchFarmer);
router.get('/farmers/prod/farmerID/:farmerID', farmersController.getLatestProductionDetailsByFarmerID);

router.post('/farmers/add', farmersController.insertFarmer);
router.post('/farmers/address/add', farmersController.insertFarmerAddress);
router.post('/farmers/affiliation/add', farmersController.insertFarmerAffiliationDetails);
router.post('/farmers/production/details/add', farmersController.insertFarmerProductionDetails);

/* ----- Routes For Cooperatives ----- */

router.get('/cooperatives/details', cooperativesController.getAllCooperativeData);
router.get('/cooperatives/search/filter/:filter', cooperativesController.searchEntity);
router.get('/cooperatives/prod/cooperativeID/:cooperativeID', cooperativesController.getLatestProductionDetailsByEntityID);

router.post('/cooperatives/add', cooperativesController.insertCooperative);
router.post('/cooperatives/address/add', cooperativesController.insertCooperativeAddress);
router.post('/cooperatives/affiliation/add', cooperativesController.insertCooperativeAffiliationDetails);
router.post('/cooperatives/contact/add', cooperativesController.insertCooperativeContact);
router.post('/cooperatives/prod/details/add', cooperativesController.insertCooperativeProductionDetails);

/* ----- Routes for Pulpers ----- */
router.get('/pulpers/get/cooperatives', pulpersController.getCooperativeForAffiliations);
router.get('/pulpers/details', pulpersController.getAllPulperDetails);
router.get('/pulpers/search/filter/:filter', pulpersController.searchPulper1);
router.get('/pulpers/prod/pulperID/:pulperID', pulpersController.getLatestProductionDetailsByPulperID);

router.post('/pulpers/add', pulpersController.insertPulper);
router.post('/pulpers/address/add',pulpersController.insertPulperAddress);
router.post('/pulpers/affiliations/add', pulpersController.insertAffiliationDetails);
router.post('/pulpers/prod/details/add', pulpersController.insertPulperProductionDetails);

/* ----- Routes For Processors ----- */
router.get('/processors/details', processorsController.getAllProcessorDetails);
router.get('/processors/search/filter/:filter', processorsController.searchProcessors);
router.get('/processors/prod/processorsID/:processorsID', processorsController.getLatestProductionDetailsByProcessorsID);

router.post('/processors/add', processorsController.insertProcessors);
router.post('/processors/address/add', processorsController.insertProcessorAddressDetail);
router.post('/processors/contact/add',processorsController.insertProcessorContactDetails);
router.post('/processors/prod/details/add', processorsController.insertProcessorProductionDetails);
router.post('/processors/supply/add', processorsController.insertProcessorSupplyDetails);

/* ----- Routes For Cafe ----- */
router.get('/cafe/details', cafeController.getAllCafeDetails);
router.post('/cafe/add', cafeController.insertCafe);
router.post('/cafe/address/add', cafeController.insertCafeAddress);
router.post('/cafe/contact/add', cafeController.insertCafeContactPerson);

/* ----- Routes For Nurseries ----- */
router.get('/nurseries/details', nurseriesController.getAllNurseryDetails);
router.post('/nurseries/add', nurseriesController.insertNursery);
router.post('/nurseries/coffee/plants/add', nurseriesController.insertNurseryCoffee);
router.post('/nurseries/address/add', nurseriesController.insertNurseryAddress);
router.post('/nurseries/contact/add', nurseriesController.insertNurseryContactPerson);
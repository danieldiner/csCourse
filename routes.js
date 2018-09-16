
var express = require('express');
var functions = require("./functions");

var router = express.Router();

router.get('/orders', functions.showAll)

router.get('/orders/:id', functions.byID)


// router.get('/orders/:id/items', functions.)
//There are no items in the order :O 


router.get('/customer/:id', functions.getCustomers)





module.exports = router;


const express = require("express");
const router = express.Router();

const RetrieveSaleController = require("../controllers/sales");

router.get("/", RetrieveSaleController.getAllRetrieveSales);

module.exports = router;

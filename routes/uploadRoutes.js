
const express = require('express');
const router = express.Router();
const { addCostingSheet } = require('../controllers/uploadController');
const {addtrimSheet} = require('../controllers/trimUploadController');


const { uploadExcel } = require('../utils/uploadfile');
const CostingSheetController = require('../controllers/uploadController');


router.post('/upload', uploadExcel.any(), addCostingSheet);
router.post('/upload/trim', uploadExcel.any(), addtrimSheet);


router.get('/exportDataToExcel',CostingSheetController.exportDataToExcel)

module.exports = { router};

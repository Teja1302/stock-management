
const express = require('express');
const router = express.Router();
const { addCostingSheet } = require('../controllers/uploadController');
const {addtrimSheet} = require('../controllers/trimUploadController');

const { uploadExcel } = require('../utils/uploadfile');


router.post('/upload', uploadExcel.any(), addCostingSheet);
router.post('/upload/trim', uploadExcel.any(), addtrimSheet);
module.exports = { router};

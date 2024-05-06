const path = require('path');
const xlsx = require('xlsx');
const { costingDetails } = require('../database/models');



const ExcelJS = require('exceljs');
const { sendEmailWithAttachment } = require('../helpers/sendVerificationEmail');

class CostingSheetController { }

CostingSheetController.addCostingSheet = async (req, res, next) => {
    try {
 
        const filePath = path.join(__dirname, `../../stock_management/uploads/temp-COSHTING_SHEET1.xlsx`);
        
        
        const workbook = xlsx.readFile(filePath);
        
        
        const sheetName = workbook.SheetNames[0];
        
        
        const sheet = workbook.Sheets[sheetName];
        
        
        const data = xlsx.utils.sheet_to_json(sheet);


        for (let item of data) {
         let createData = {
                No: item.No,
                fabricName: item.FABRIC,
                curValue: item.CUR,
                dutyValue : item.DUTY ?? 0,
                price: item.PRICE,
                cons: item.CONS,
               Inr: item.INR
            }

            console.log("crreaa",createData)

            await costingDetails.create(createData)
        }

         
      }
      catch(err){

        console.log("errr",err)

      }
  
    }

  CostingSheetController.exportDataToExcel = async (req, res) => {
  try {
    // Fetch data from the database
    let costingDetailss = await costingDetails.findAll();

    // Create a new Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Costing Details');

    // Define column headers
    worksheet.columns = [
      { header: 'Costing Sheet ID', key: 'costingSheetId', width: 15 },
      { header: 'Fabric Name', key: 'fabricName', width: 20 },
      { header: 'Currency Value', key: 'curValue', width: 15 },
      { header: 'Duty Value', key: 'dutyValue', width: 15 },
      { header: 'Price', key: 'price', width: 15 },
      { header: 'Cons', key: 'cons', width: 15 },
      { header: 'Inr', key: 'Inr', width: 15 }
    ];

    // Add rows to the worksheet
    costingDetailss.forEach(detail => {
      worksheet.addRow(detail.toJSON());
    });
   
    const filePath = path.join(__dirname, `../../stock_management/exportSheet/costingDetails.xlsx`);

    console.log(filePath);

   

    await workbook.xlsx.writeFile(filePath);

    sendEmailWithAttachment(req.query.email,filePath)


    res.json({ message: 'Data exported to Excel successfully', filePath });
  } catch (error) {
    console.error('Error exporting data to Excel:', error);
    res.status(500).json({ error: 'Error exporting data to Excel' });
  }
};



    
module.exports = CostingSheetController;






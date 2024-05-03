const path = require('path');
const xlsx = require('xlsx');
const { costingDetails } = require('../database/models');


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
                curType: item.INR,
                dutyValue : item.DUTY ?? 0,
                price: item.PRICE,
                cons: item.CONS
            }

            console.log("crreaa",createData)

            await costingDetails.create(createData)
        }

         
      }
      catch(err){

        console.log("errr",err)

      }
  
    }
   
    


module.exports = CostingSheetController ;






const path = require('path');
const xlsx = require('xlsx');
const {TrimDetails} = require('../database/models');


class trimSheetDetails { }

trimSheetDetails.addtrimSheet = async (req, res, next) => {
    try {
 
        const filePath = path.join(__dirname, `../../stock_management/uploads/temp-Trim_Details1.xlsx`);
        
        
        const workbook = xlsx.readFile(filePath);
        
        
        const sheetName = workbook.SheetNames[0];
        
        
        const sheet = workbook.Sheets[sheetName];
        
        
        const data = xlsx.utils.sheet_to_json(sheet);


        for (let item of data) {
         let createData = {
                No: item.No,
                code: item.Code,
                trimDetails: item["TRIM DETAILS"],
                curType: item.CUR,
                dutyValue : item.DUTY ?? 0,
                price: item.PRICE,
                cons: item.CONSP,
                inr:item.INR
            }

            console.log("crreaa",createData)

            await TrimDetails.create(createData)
        }

         
      }
      catch(err){

        console.log("errr",err)

      }
  
    }
   
    


module.exports = trimSheetDetails ;






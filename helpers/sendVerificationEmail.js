const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');


let transporter = nodemailer.createTransport({
  host: "teja.doodleblue@gmail.com`",
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: 'teja.doodleblue@gmail.com',
    pass: 'dfnu rgte kjja aclk'
  }
});

exports.sendEmailWithAttachment = async (to, subject, text, filename, filepath = path.join(__dirname, `../../stock_management/exportSheet/costingDetails.xlsx`)) => {
  console.log("jen",path.join(__dirname, `../../stock_management/exportSheet/costingDetails.xlsx`))
  const mailOptions = {
    from: 'teja.doodleblue@gmail.com',
    to: to, // Change the recipient email address as needed
    subject: 'Task2',
    text:'Json to Excel Conversion',
    attachments: [
      {
        filename: 'costingDetails.xlsx',
        content: fs.createReadStream(filepath)
      }
    ]
  };

  console.log(text, 'text');

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    setTimeout(() => {
      fs.unlink(filepath, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
          return;
        }
        console.log('File deleted successfully');
      });
    }, 10000);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error sending email' };
  }
};



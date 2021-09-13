"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "aakashrathod1593@gmail.com", // generated ethereal user
      pass: "8827204787", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"shyam premi 👻" <shyamsarkar@gmail.com>', // sender address
    to: "aman.rathod.sdb@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world? 13-09-2021", // plain text body
    html: "<b>Jai Shree Shyam</b>  13-09-2021", // html body
    attachments:[
        {
            filename : 'god.jpg', 
            path :'./god.jpg'
        },
        {
            filename : 'message.txt', 
            path :'./message.txt'
        }
    ]
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);




var http =require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("hello aman");
}).listen(3000);
console.log("server started at http://127.0.0.1");
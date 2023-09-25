const nodemailer = require('nodemailer');

var transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'findoutmobile@gmail.com',
        pass: 'eiorarwtsqtyxaee'        
    }
});

var mailOptions = {
    from : 'findoutmobile@gmail.com',
    to: 'khore.sid2@gmail.com',
    subject: 'NodeJS test email',
    text: 'NodeJS...email'
}

transpoter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log("Email sent.. " + info.envelope);
    }
});


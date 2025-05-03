let nodemailer=require('nodemailer');

let transporter=nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'mdjahangirhussain786@gmail.com',
            pass:'xepw gert pnct hlgt'// use 2 step verification and then use app password and create it and use it here
        }
    }
);

let mailOptions={
    from:'mdjahangirhussain786@gmail.com',
    to:'mdjahangirhussain57@gmail.com',
    subject:'Node js Mail module Node mailer....',
    text:'This is demo email sent through Node js backend...Thank You'
};

transporter.sendMail(mailOptions,function (error,info){
    if(error)
        console.log(error)
    else
    console.log(info.response)
});
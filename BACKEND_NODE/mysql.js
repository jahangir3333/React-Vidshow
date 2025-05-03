// let mysql=require('mysql');
// const myfile=require('./myfile');
// const os=require('os')
const mailer=require('nodemailer'); //This is importing nodemailer module or package

// let con=mysql.createConnection(
//  {
//     host:'localhost',
//     user:'root',
//     password:""
//  }
// );

// con.connect((error)=>{
// if(error)
//     console.log(error);
// else{
//     console.log("Connected to Mysql");
//     con.query("use harsh_db");
//     con.query("select * from harsh_tb", (error, result)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             console.log(result)
//         }
//     })
// }
// })

// console.log(myfile.obj)

// console.log(os.version());

let mymail=mailer.createTransport({
    service:'gmail', //service gmail
    auth:{
        user:'mdjahangirhussain786@gmail.com',
        pass:'mbtp ujyp dzmm puif'
    }, // authentication with user and app creator password
    tls: {
        rejectUnauthorized: false
    }// if self service certificate error happens.
});

let data={
    from:'mdjahangirhussain786@gmail.com',
    to:'harshmandloi67@gmail.com,gitikachouksey@gmail.com,mdjahangirhussain786@gmail.com',
    subject:'Checkin node js',
    text:'sir, Iam sending this email from NOde js, and will connect it with frontend later.'
}; // data to be sent in sendMail()

mymail.sendMail(data, (err,info)=>{
    if(err)
        console.log(err)
    else
    console.log(info)
});//sendMail() to send mail
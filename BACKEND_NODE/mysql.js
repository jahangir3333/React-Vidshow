let mysql=require('mysql');
// const myfile=require('./myfile');
// const os=require('os')
// const mailer=require('nodemailer'); //This is importing nodemailer module or package

let con=mysql.createConnection(
 {
    host:'localhost',
    user:'root',
    password:""
 }
);

con.connect((error)=>{
if(error)
    console.log(error);
else{
    console.log("Connected to Mysql");
    con.query("USE harsh_db");
    // con.query("CREATE TABLE table1(id INT(50) PRIMARY KEY, name VARCHAR(20), email VARCHAR(50), pass VARCHAR(15),contact INT(11), address VARCHAR(200))");
    // con.query("INSERT INTO table1(id,name,email,pass,contact,address) values(4,'gitika','mdjahangirhussain786@gmail.com','12345',8756947544,'gauri nagar petrol pump opp. SBI bank')");
    con.query("SELECT * from table1 where id>2", (error, result)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(result)
        }
    })
}
})

// console.log(myfile.obj)

// console.log(os.version());

// let mymail=mailer.createTransport({
//     service:'gmail', //service gmail
//     auth:{
//         user:'mdjahangirhussain786@gmail.com',
//         pass:'rdyu cthm achw pods'
//     }, // authentication with user and app creator password
//     tls: {
//         rejectUnauthorized: false
//     }// if self service certificate error happens.
// });

// let data={
//     from:'mdjahangirhussain786@gmail.com',
//     to:'harshmandloi67@gmail.com,gitikachouksey@gmail.com,mdjahangirhussain786@gmail.com',
//     subject:'Checkin node js',
//     text:'sir, Iam sending this email from NOde js, and will connect it with frontend later.'
// }; // data to be sent in sendMail()

// mymail.sendMail(data, (err,info)=>{
//     if(err)
//         console.log(err)
//     else
//     console.log(info)
// });//sendMail() to send mail
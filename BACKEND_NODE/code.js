let express=require('express')
let app=express()
let cors=require('cors')
let bp=require("body-parser")

// http.createServer(function (req, res) {
//   // res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("hello Node....")
//   // res.write(req.url);
//   console.log("BACKEND RUNNING...");
//   // res.end('Hello World!');
//   res.end();
// }).listen(8080);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/", (req,res)=>{
  // let name=req.body.name;
  // let email=req.body.email;
  // let category=req.body.category;
res.json(req.body)
console.log("Backend Running")
console.log(req.body)

}).listen(8080);


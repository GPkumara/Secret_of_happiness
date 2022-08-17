import http from 'http'
import url from 'url'
// post 
let database=[]
let user;
http.createServer(function(req,res){
    if(req.method == "POST" && req.url == "/create-user"){
        req.setEncoding("utf-8")
        req.on("data",(data)=>{
            user=data;
        });
        req.on("end",()=>{
            database.push(user);
            console.log(user);
            
        });
        res.end("Your data is stored");
    }

    //get
    if(req.method=="GET" && req.url == "/find-user"){
        res.write(JSON.stringify(database));
        res.end()
    }
    
}).listen(8080);
console.log("Server on");

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

    //put
    if(req.method == "PUT" && req.url == "/update-value"){
        const userd1=[]
        req.on("data",(data)=>{
            user=data;
        });
        req.on("end",()=>{
            console.log("Data modified");
            res.write("Data modified");
            
        });
        let data1=database.forEach((item)=>{
            let obj = JSON.parse(item)
            obj.name=user;
            JSON.stringify(obj);
        })
        userd1.push(data1);
        res.write(JSON.stringify(userd1));
        res.end();

    }
    
}).listen(8080);
console.log("Server on");

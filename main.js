import http from 'http'
import url from 'url'
// post 
let database=[]
let user;
let user1;
http.createServer(function(req,res){
    if(req.method == "POST" && req.url == "/create-user"){
        req.setEncoding("utf-8")
        req.on("data",(data)=>{
            user=data;
        });
        req.on("end",()=>{
            user=JSON.parse(user)
            database.push(user);
            console.log(database); 
            res.end("Your data is stored");
        });
    }

    //get
    if(req.method=="GET" && req.url == "/find-user"){
        res.write(JSON.stringify(database));
        res.end()
    }

    //put
    if(req.method == "PUT" && req.url == "/update-value"){
        req.on("data",(data)=>{
            user1=data;
        });
        req.on("end",()=>{
            console.log("Data is modifiying"); 
            let obj1=JSON.parse(user1);
        database.forEach((item)=>{
            if(obj1.id == item.id)
            {
                item.name=obj1.name;
                item.role=obj1.role;
            }
        })
        res.write("Data modified");
        res.end();
        });
        
    }
    
}).listen(8080);
console.log("Server on");

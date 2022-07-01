const express=require('express')
const app=express();

app.get('/',function(req,res){res.send("Goto /api/main/json or /api/main/about ")})

app.get('/api/main/html',function(req,res){
    res.send("<h1>  Express js</h1>")
})

app.get('/api/main/json',function(req,res){
    res.json({name:"Happy Soni"})
})

app.get('/api/main/about',function(req,res){
    res.send("Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.")

})
app.listen(3000);
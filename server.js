const express=require("express");
const colors=require("colors");
const dotenv=require("dotenv").config();
const morgan=require("morgan");
const path=require("path")
const products=require("./utility/productdata.json")
const rootroute=require("./routes/rootroutes");
const productroute=require("./routes/productroutes");


const app=express();
const PORT=8000;

app.use(morgan("dev"))

app.use(express.json())  //app.use is middleware
// app.use(express.static(path.resolve(__dirname,'./public')))//express.static is used to serve static paged

// const data=[
//     {
//         name:"helen",
//         age:23
//     },
//     {
//         name:"aman",
//         age:23
//     },
//     {
//         name:"suhaani",
//         age:12
//     }
// ]

// // localhost:8080/
// // C:\--local host(backward slash)
// //domain 
// //www.google.com/--online(forward slash)
// app.use('/',rootroute)
// // app.get('/',(req,res)=>{
// //     res.send("<h1>Hello world</h1>")
// //     console.log("hello")
// // })
// app.use('/products',productroute)

// app.get('/users',(req,res)=>{
 
//     res.send(data)
//     console.log("bye")

// })
// app.get('/users/greaterthan20',(req,res)=>{
//     const greaterthan20=data.filter((user)=>user.age>20)
//     res.send(greaterthan20)
//     console.log("hi")

// })

// app.get('/home',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public',"page.html"))
// })

// app.get('/stopwatch',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public',"stopwatch.html"))
// })


// app.get('/products',(req,res)=>{
//     res.send(products)
// })

app.use('/',rootroute)
app.use('/pro',productroute)

app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`.bgBlue.black)
}); 

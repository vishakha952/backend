const products=require("../utility/productdata.json")

const productcontroller=(req,res)=>{

    const {name}=req.params
    const {category}=req.params
    if(name){
        const product=products.find((product)=>product.name===name)
        res.send(product)
    }
    else if(category){
        const product=products.filter((product)=>product.category===category)
        res.send(product)
    }

    else{
        res.send(products)
    }
    console.log("hello")
}
module.exports=productcontroller;
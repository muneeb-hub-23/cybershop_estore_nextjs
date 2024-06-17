import products from "@/models/products";
import connectDB from "@/middleware/mongoose";

const handler = async (req,res)=>{
    if(req.method == "POST"){
        for(let i=0; i<req.body.length; i++){

            let p = await products.findByIdAndUpdate(req.body[i]._id,req.body[i])
        }
        res.status(200).json({and:true})
    }else{
        res.status(400).json({err:"Not Allowed"})
    }
}
export default connectDB(handler)
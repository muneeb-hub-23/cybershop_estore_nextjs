import products from "@/models/products";
import connectDB from "@/middleware/mongoose";

const handler =  async (req,res) =>{
    let productcList = await products.find()
    res.status(200).json({productcList})
}
export default connectDB(handler)
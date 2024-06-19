import connectDB from "@/middleware/mongoose";
import stock from "@/models/stock";
const handler =  async (req,res) =>{
    let stocklist = await stock.find()
    //productcList =await JSON.parse(JSON.stringify(productcList))
    //res.status(200)
    res.send({stocklist})
}
export default connectDB(handler)
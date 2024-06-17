const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userID:{type:String},
    products:[{
        productID: {type: String},
        quantity:{tpe:Number,default:1}
    }],
    address: {type:String,required:true},
    amount: {type:Number,required:true},
    status: {type:String,defaulty:'Pending',required:true}
},{timestamps:true});
mongoose.models = {}
export default mongoose.model("Order",OrderSchema)
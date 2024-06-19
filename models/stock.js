const mongoose = require('mongoose')

const StockSchema = new mongoose.Schema({
product_ID:{type:String},
colors:[{
    colorName:{type:String},
    details:{
        size:[{
            size_name:{type:String},
            qty:{type:Number}
        }]
    }
}],

},
{timestamps:true});
mongoose.models = {}
export default mongoose.model("Stock",StockSchema)
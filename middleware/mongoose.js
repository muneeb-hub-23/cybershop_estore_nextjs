import mongoose from "mongoose";

const connectDB = handler => async (req,res) =>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }

await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to cybershopdb database");
}).catch((error) => {
  console.error("Error connecting to database: ", error);
});
    return handler(req,res)
}
export default connectDB
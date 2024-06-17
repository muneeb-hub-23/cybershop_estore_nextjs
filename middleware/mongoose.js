import mongoose from "mongoose";

const connectDB = handler => async (req,res) =>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }

    const MONGO_URI = "mongodb://127.0.0.1:27017/cybershop?directConnection=true&serverSelectionTimeoutMS=2000";

await mongoose.connect(MONGO_URI, {
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
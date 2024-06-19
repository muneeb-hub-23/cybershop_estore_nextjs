import stock from "@/models/stock";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            //console.log(req.body[i])
            let p = new stock(req.body[i])
            await p.save()
            .then((res)=>{
                console.log("the result is",res)
            })
        }
        res.status(200).json({ and: true })
    } else {
        res.status(400).json({ err: "Not Allowed" })
    }
}
export default connectDB(handler)
import Customer from "../../../models/customer";
import connectDB from "../../../utils/connectDB";

export default async function handler (req , res) {
    try{
        await connectDB();
    }catch (err) {
        console.log(err);
        res.status(500).json({status:"failed" , message:"Error  in connection to Database"});
        return;
    }

    if(req.method === "DELETE"){
        const id = req.query.customerId;
        try{
            await Customer.deleteOne({_id:id});
            res.status(200).json({status:"success" , message:"Data Deleted"});
        }catch(err){
            console.log(err);
            res.status(500).json({status:"failed" , message:"Error  in connection to Database"});        }
    }
}
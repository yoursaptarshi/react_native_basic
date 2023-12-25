const jwt=require("jsonwebtoken");
const User = require("../Models/User");

exports.isAuthenticated = async(req,res,next)=>{
    try {
        const {token}=req.cookies;
        if(!token){
            res.status(400).json({
                success:false,
                message:"Login First!"
            })
        }
        else{
            const decoded = await jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded._id);
            next();
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
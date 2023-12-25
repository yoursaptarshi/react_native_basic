const User = require("../Models/User")
const jwt = require("jsonwebtoken")
exports.register= async(req,res)=>{
    try {
        const{name,username,password}=req.body;
    const check_user = await User.findOne({username:username});
    if(check_user){
        res.status(400).json({
            success:false,
            message:"Username already exists!"
        })
    }
    else{
        await User.create({
            name:name,
            username:username,
            password:password
        })
        
        res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.login=async(req,res)=>{
    try {
        const {username,password}=req.body;
    const user = await User.findOne({username:username});
    if(!user){
        res.status(400).json({
            success:false,
            message:"User do not exist!"
        })
    }
    else{
        if(user.password==password){

          const token =  await jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:Date.now()+'72h'})

            res.status(200).cookie("token",token).json({
                success:true,
                message:"login success",
                user,
                token
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:"Passwords no not match",
                user
            })
        }
    }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.loadUser = async(req,res)=>{

    try {
        const user = await User.findById(req.user._id);
        res.status(200).json({
            success:true,
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
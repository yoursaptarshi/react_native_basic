const mongoose = require("mongoose")

exports.connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(
        ()=>{
            console.log(`Database created ${process.env.MONGO_URI}`)
        }
    ).catch(
        (error)=>{
            console.log("database creation failed!")
        }
    )
}

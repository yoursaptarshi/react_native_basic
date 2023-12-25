const express = require("express")
const app = express();
const cookieparser = require("cookie-parser");
require("dotenv").config({path:"./config/config.env"})

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieparser());
//using routes
const user = require("./routes/user")
app.use(user)
module.exports = app;
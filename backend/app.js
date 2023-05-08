const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const errorMiddleware = require("./middleware/error");
 

app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({extended:true}))


const user  = require("./routes/userRoutes");



app.use("/api/v1",user);

app.use(errorMiddleware);
module.exports = app  
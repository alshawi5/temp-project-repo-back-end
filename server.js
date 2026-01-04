const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
//const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoBD")
})

//controllers

//middleware
const morgan = require("morgan")
app.use(morgan("dev"))
app.use(express.json())
//app.use(cors())

//Routes
app.get("/", (req, res) => {
  res.send("API is running");
});


app.listen(3000, () => {
    console.log("Express is ready")
})
const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');


const connectDB = require('./server/database/connection')

const app = express()

const PORT = process.env.PORT||8080;


dotenv.config({path:'config.env'})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

//load requests
app.use(morgan('tiny'));


//mongoDB connection
connectDB()

//parser request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")


//load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

//load router
app.use('/',require('./server/routes/router'))

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./Router/userRouter')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config()

mongoose.connect(process.env.DataBaseConnecting,{ useNewUrlParser: true },()=>{
    console.log('DataBase Connected Successful')
})
const PortNumber = process.env.PortNumber || 8000

const JungleServer = express()

JungleServer.use(cors())
JungleServer.use(bodyParser.json())

JungleServer.use('/user',userRouter)




JungleServer.listen(PortNumber,()=>{
    console.log(`Server is runing on local Port Host ${PortNumber}`)
})
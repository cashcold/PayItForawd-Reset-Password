const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    full_Name: {
        type: String,
        require: true,
    },
    user_Name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
    },
    bitcoin: {
        type: String,
    },
    bitcoinCash: {
        type: String,
    },
    perfectMoney: {
        type: String,
    },
    payPal: {
        type: String,
    },
    restartLinkPassword: {
        type: String,
    }
    ,
    date: {
        type: Date,
        default: Date.now
    }
    
})

const User = mongoose.model("User",userSchema)

module.exports = User
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minLength:[4,"minimun 4 letter"]
    },
    password:{
        type:String,
        minLength:[5,"minimum 5 letter"]
    },
    email:{
        type:String
    },
    Number:{
        type:Number,
        minLength:[10,"number must be 10 letter"],
        maxLength:[10,"number only 10 letter"]
    }
})

module.exports = mongoose.model("User", userSchema)


const mongoose = require("mongoose")

const dataConnection = () =>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((data)=>{console.log(`data conected with ${data.connection.host}`)})
    .catch((err)=>{err.message})
}
module.exports = dataConnection

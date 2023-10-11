const app = require("./app")
const dataConnection = require("./config/dataConection")

dataConnection();

const router = require("./router/userRouter")
app.use("/api/v1/", router);

app.listen(process.env.PORT,()=>{
console.log(`server runing on port ${process.env.PORT}`);
})
const express = require("express");
const cors = require("cors");   
const app = express();
const port = 5000;
const AllCapsulesRoute = require("./routes/AllCapsulesRoute");
const Auth = require("./middleware/autherization")

app.use(cors())
app.use(express.json())

app.use("/" , Auth ,AllCapsulesRoute);

app.get('/',(req,res)=>{
    res.status(200).json({
        "Message":"Server is OK"
    })
})

app.listen(port , ()=> console.log(`Server is Live @ ${port}`)) // listening @ port 5000

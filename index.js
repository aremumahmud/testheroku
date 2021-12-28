
var express = require("express")
var app = express()
app.listen(process.env.PORT || 2000)

app.get("/" ,(req,res)=>{
res.send("i am working "+process.pid)
})

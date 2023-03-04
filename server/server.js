require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2345
const mongoose = require('mongoose')
const cors = require('cors')

const verifyJwt = require('./src/middleware/auth')
mongoose.set("strictQuery", false)
mongoose.connect(process.env.CONNECTION_URI, ()=>console.log("DATABASE CONNECTED"))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

<<<<<<< HEAD
app.use('/api/auth', require('./src/controllers/auth-controller'))
// app.use(verifyJwt)
=======
app.use((req, res, next)=>{
   res.setHeader('Access-Control-Allow-Originn', '*');
   res.setHeader('Access-Control-Allow-Method', 'OPTIONS, POST, PUT, GET, DELETE, PATCH');
   res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
   next();
})

app.use('/auth', require('./src/controllers/UserController'))
app.use('/branch', require('./src/controllers/BranchController'))

app.use('/auth', require('./src/controllers/auth-controller'))
app.use(verifyJwt)
>>>>>>> cb0de3819944e3c81283b669cc01c1c5280c8725

app.use('/', (req, res, next)=>{
    res.send("Home")
})
app.listen(PORT, ()=> console.log(`currently connected at Port ${PORT}`))

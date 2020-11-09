const express = require('express')
const mongoose = require('mongoose')
const app= express()
const bodyPrarser = require('body-parser')
require('dotenv/config')
const cors = require('cors')

app.use(cors())

app.use(bodyPrarser.json())

//Import Router
const postRouter = require('./routers/posts')

app.use('/posts', postRouter)

//Router
app.get('/',(req,res)=> res.send('Welcome'))


//connect db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true  },
    ()=> console.log('connected to db'))


//listen 
app.listen(3000)
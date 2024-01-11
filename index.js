require ('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello ')
})

app.get('/twitter',(req,res)=>{
  res.send('hii twitter')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

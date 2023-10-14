const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const mysql = require('mysql')
var cors = require('cors');


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Tillu0201",
    database:"Lingeswara",
})

app.get('/', (req, res) => {
  res.send("Backen server")
})


app.get('/products', (req, res) => {
    const q = "SELECT * FROM products"
    db.query(q, (error, data) => {
      if (error) {
        res.status(500).json({ error: "Internal Server Error" });
    } else {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.json(data);
      }
    });
  })

 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const nedb = require('nedb-promises')
const app = express()

let db = nedb.create('db')
db.load('dbs.db').then(() => {
    console.log("Data base cool");
})


const port = 4000 || process.env.PORT

app.get('/', async (req, res) => {
    res.send('<h1>Hola Kiro</h1>')
    let date = new Date()
    let ip = req.ip
    db.insert({ ip, date })
})

app.listen(port, console.log(`Server on port ${port}`))
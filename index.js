const express = require('express')
const nedb = require('nedb-promises')
const app = express()

let db = nedb.create('dbs.db')
db.load().then(() => {
    console.log("Data base cool");
})


const port = 4000 || process.env.PORT

app.get('/', async (req, res) => {
    res.send('<h1>Hola Kiro</h1>')
    let date = new Date()
    let ip = req.ip
    await db.insert({ ip, date })
})

app.get('/read', async (req, res) => {
    let data = await db.find({})
    res.json(data)
})

app.listen(port, console.log(`Server on port ${port}`))

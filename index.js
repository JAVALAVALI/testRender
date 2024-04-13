const express = require('express')
const nedb = require('nedb-promises')
const { memoryUsage } = require('process');
const app = express()

let db = nedb.create('db')
db.load('dbs.db').then(() => {
    console.log("Data base cool");
})


const port = 4000 || process.env.PORT

app.get('/', async (req, res) => {
    const usage = memoryUsage();
    res.send('<h1>Hola Kiro</h1>')
    res.send(`Memoria utilizada: ${usage.heapUsed} bytes`)
    let date = new Date()
    let ip = req.ip
    await db.insert({ ip, date })
})

app.get('/read', async (req, res) => {
    let data = await db.find({})
    res.json(data)
})

app.listen(port, console.log(`Server on port ${port}`))

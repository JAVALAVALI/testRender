const express = require('express')
const app = express()

const port = 4000 || process.env.PORT

app.get('/', (req, res) => {
    res.send('<h1>Hola Kiro</h1>')
})

app.listen(port, console.log(`Server on port ${port}`))
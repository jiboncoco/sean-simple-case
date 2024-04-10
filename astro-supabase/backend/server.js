const express = require('express')
const app = express()
const PORT = 3211 || process.env.PORT

app.get('/', (req, res) => {
    console.log("API first endpoint successfully accessed")
    res.send("this is the first endpoint")
})

app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})
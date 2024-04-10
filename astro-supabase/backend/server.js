const express = require('express')
const supabase = require('@supabase/supabase-js')

const app = express()
app.use(express.json())

const PORT = 3211 || process.env.PORT
const SUPABASE_URL = "https://unciirpmrcadghxvjhas.supabase.co"
const SUPABASE_SERVICE_ROLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuY2lpcnBtcmNhZGdoeHZqaGFzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTIwMzY5NCwiZXhwIjoyMDI2Nzc5Njk0fQ.QJGBbSs5mZip-4_inCbzCDJ_un0bBNM800dkowgpIY8"

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE)

app.get('/', async(req, res) => {

    const getBlog = await db.from("blog").select()

    // console.log(getBlog)
    // console.log("API first endpoint successfully accessed")
    // res.send("this is the first endpoint")

    res.json({
        getBlog
    })
})

app.post('/', async(req, res) => {
    const { title, description } = req.body
    const createPost = await db.from("blog").insert({ title, description})

    // console.log(title, description)
    console.log(createPost)

    res.json({createPost})
})

app.listen(PORT, () => {
    console.log('listening on port ', PORT)
})
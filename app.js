const express = require('express')
const app = express()
app.use(express.json())
const callApis = require('./routes/index')

app.use('/', callApis)


app.listen(9000, (err) => {
    if(err) throw err;
    console.log('server is running---')
});
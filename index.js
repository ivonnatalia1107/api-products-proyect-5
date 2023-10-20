const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const {readData} = require ("./function")

app.use(bodyParser.json())


app.get('/products', (req, res) => {
const data = readData()
res.json(data.products)

 })

app.get('/', (req, res) => {

res.send('API productos frutas y verduras')

})


app.listen(port, () => {
    console.log(`la aplicacion esta funcionando en local: http://localhost:${port}` )
})

const calculatorRoutes = require('./Routes/calculatorRoutes');
const testRoutes = require('./Routes/myTestRoutes');
const express = require('express')
const app = express()
const app2 = express()
const port = 3002
const port2= 3001


const app = require('./app');

// start the app to listen on the right port
app.listen(port, () => {
console.log(`Example app listening at
http://localhost:${port}`)
})


app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes)

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/', express.static('public'))

app2.listen(port2, () => {
    console.log(`Server 2 listening on port ${port2}`);
  });
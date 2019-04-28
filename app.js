const express = require('express')
const app = new express()
const cors = require('cors')
var bodyParser = require('body-parser')
var User = require('./user')
var colors = require('color')

app.use(cors())

app.use(bodyParser.json({type   : 'application/json'}))
// app.use(bodyParser.text({type   : 'text/html'}))



app.get('/api/users',(req,res)=>{
    let users = [
        {
            name: "AB werwwC",
            age: 23
        },
        {
            name: "Test",
            age: 22
        }
    ]
    res.json(users)

    console.log(req.url , ' - ',req.headers['user-agent'])
})

app.post('/api/users/add', (req, res) =>  {
    var AddUser = require('./userController')
    console.log('INSERT result: ', AddUser(req.body))
    res.json(req.body)
})

app.listen(9000)
console.log('App running at localhost:9000')
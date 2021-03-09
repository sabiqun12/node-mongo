const express = require('express');
const app = express();

// const rootCall = (req, res) => res.send("Thank you");
const user = ['mita', 'rita', 'mimi', 'simi', 'asad', 'mou'];
app.get('/fruit/banana', (req, res) =>{
    res.send({fruit: 'banana', vegetable:'green leaf', price: 1000})
})

 app.get('/', (req, res) => {
     res.send("Thank you for calling me!");
 })

 app.get('/users/:id', (req, res) => {
     //console.log(req.params);
     const userId = req.params.id; //reading id from request params and set in userID variable
     const name = user[userId];
     res.send(name);
 })

app.listen(3000, (req, res) => console.log('listening on port 3000'));
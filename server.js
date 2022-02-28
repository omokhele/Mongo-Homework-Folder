const Employee = require('./models/employee')

const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require("./db/index");

const app = express()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/employees', async(req, res) => {
    const employees = await Employee.find()
    res.json(employees);
})




app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})
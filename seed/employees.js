const db = require('../db')
const Employee = require('../models/employee')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const employees = [
        {first_name: 'Peter', last_name: 'Croaker', email: 'pete@aol.com', job_title: 'Line Cook', address: 
        {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}},
        {first_name: 'Betty', last_name: 'Sue', email: 'bes@aol.com', job_title: 'Sous Chef', address: 
        {street: '55b Broadway', city: 'Augusta', state: 'Georgia', zip: 30654}},
        {first_name: 'Alan', last_name: 'Coleman', email: 'Coleman@aol.com', job_title: 'Sous Chef', address: 
        {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}},
        {first_name: 'Dorothy', last_name: 'Patterson', email: 'Dorothy@aol.com', job_title: 'Chief Marketing Officer', address:  
        {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}},
        {first_name: 'Joe', last_name: 'Nathan', email: 'joe@aol.com', job_title: 'Manager', address: 
        {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}},
    ]

    await Employee.insertMany(employees)
    console.log("Created employees!")  
}

const run = async () => {
    await main()
    db.close()
}
run()
const db = require('./db')
const Employee = require('./models/employee')
const faker = require('faker')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const findEmployees = async () => {
    const findAllEmployees = await Employee.find({last_Name: 'Nathan'})
    console.log(findAllEmployees)
}

const createOneEmployee = async () => {
    const newEmployee = new Employee({ first_name: 'Barrack', last_name: 'Obama', email: 'obamaB@aol.com', job_title: 'President', address: {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}
})
await newEmployee.save()
    console.log(newEmployee)
}

// const createThreeEmployees = async () => {
//     const newEmployees = [
//         {first_name: 'Beatrice', last_name: 'Lee', email: 'bea@aol.com', job_title: 'Secretary', address: {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}},
//         {first_name: 'Tishana', last_name: 'Carpenter', email: 'tish@aol.com', job_title: 'Vice President', address: {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}},
//         {first_name: 'Laravel', last_name: 'Moose', email: 'moose@aol.com', job_title: 'Techie', address: {street: '17 New Street', city: 'NYC', state: 'New York', zip: 01011}}
// ]
//     // await newEmployees.save()
//     // console.log(newEmployees)

//     await Employee.insertMany(newEmployees)
//     console.log(newEmployees)  
// }

    const newEmployees = [...Array(100)].map(employee => (
    {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        job_title: faker.name.jobTitle(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode()
        }
    }
    ))
    await Employee.insertMany(newEmployees)
    console.log(newEmployees)
    

     


const updateOneEmployee = async() => {
    const updateOne = await Employee.updateOne({ first_name: 'Barrack'}, {first_name: 'Michelle', last_name: 'Obama', email: 'm@aol.com', job_title: 'First lady', address: {street: 'White House', city: 'Chicago', state: 'Illinois', zip: 56789}})
    console.log(updateOne)
}

const deleteOneEmployee = async() => {
    const deleteOne = await Employee.deleteOne({first_name: 'Michelle'})
    console.log(deleteOne)
}

const employeesNames = async() => {
    const firstNameLastName = await Employee.find({zip: 01011}, 'first_name last_name')
    console.log(firstNameLastName)
}

const run = async () => {
    // await findEmployees()
    // await createOneEmployee()
    // await createThreeEmployees()
    // await updateOneEmployee()
    // await deleteOneEmployee() 
    // await employeesNames()
    
    db.close()
    }
    
    run()
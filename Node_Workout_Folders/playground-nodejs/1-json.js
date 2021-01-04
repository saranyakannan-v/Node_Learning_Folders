const fs = require('fs')
    /*-----------This is to write file sync----- */
    // const book = {
    //     title: 'Ego is the enemy',
    //     author: 'Ryan Holiday'
    // }
    // const bookJSON = JSON.stringify(book) // it converts the js to JSON stringified method
    // fs.writeFileSync('1-json.json', bookJSON) // to create a new file

/*----------This is for Read file Sync-----*/

// const dataBuffer = fs.readFileSync('1-json.json') // Reads the binary data
// const dataJSON = dataBuffer.toString() // toString() is used to convert the binary data to the string
// const data = JSON.parse(dataJSON) // Parse is used to convert the JSON string into an object
// console.log(data.title)

/*----------Work with JSON and the file System-----------------*/
// Step 1: Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

//Step 2: Change the name and age property using your info
user.name = "Saranya Kannan"
user.age = 28

//Step 3: Stringfy the changed object and overwrite the original data
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
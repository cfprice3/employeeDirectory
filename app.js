const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'root')));

app.listen(port, () => console.log(`Connected on PORT: ${port}`))



//make a utils folder, api.js with ajax call

//
//ajax call needed
// export default {
//     // Gets all users
//     getUsers: function() {
//       return axios.get("https://randomuser.me/api/?results=200&nat=us");
//     }
//   };
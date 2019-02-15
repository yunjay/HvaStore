// starts Node.js server
//makes sure env variables are here

require('dotenv').config({path:'.env'});
const createServer  = require ('./createServer');
const db = require('./db');

const server = createServer();

//todo use express middleware to handle cookies (json web tokens)

// todo use express middleware to populate current user

server.start({
    cors:{
        credentials: true,
        origin: process.env.FRONTEND_URL,
    }
}, deets =>{
    console.log(`server is now running on  http:/localhost:${deets.port}`);
});
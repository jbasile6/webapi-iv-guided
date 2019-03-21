require('dotenv').config();
//^^^^imports the .env file variables
const server = require('./api/server.js');

const port = process.env.PORT || 4000;
//makes the port dynamic^^^
const greeting = process.env.GREETING;

server.listen(4000, () => {

  console.log(`\n***  ${greeting} Server Running on http://localhost:${port} ***\n`);
});

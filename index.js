require('dotenv').config();
//^^^^imports the .env file variables
const server = require('./api/server.js');

server.listen(4000, () => {
  const port = process.env.PORT || 4000;
  //makes the port dynamic^^^
  const greeting = process.env.GREETING;
  console.log(`\n***  ${greeting} Server Running on http://localhost:${port} ***\n`);
});

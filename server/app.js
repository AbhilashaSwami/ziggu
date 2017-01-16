const app = require('express')();
const http = require('http').Server(app);
const config = require('./config');
require('./io')(http);

app.get('/',(req, res) => {
  res.send('Hello, World!');
});

http.listen(config.port, () => {
  console.log('ExpressJS listening on port:', config.port);
});

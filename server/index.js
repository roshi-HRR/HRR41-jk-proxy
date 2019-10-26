const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');
const port = 1007;

//main carousel
app.use(proxy('/api/photos', {target: 'http://localhost:3333'}));
//home detail
app.use(proxy('/house', {target: 'http://localhost:3005'}));
//bookings
app.use(proxy('/api/houses', {target: 'http://localhost:3006'}));
//more homes
app.use(proxy('/homes', {target: 'http://localhost:1022'}));

app.use(express.static('public'));

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

'use strict';

const express = require('express');

const PORT = process.env.PORT || 80;

let app = express();

app.use(function(_, res, next) {
  res.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
  next();
});

app.get('/api/whoami', function parseHeaders(req, res) {
  let resObj = {};
  resObj.ipaddress = req.connection.remoteAddress;
  resObj.language = req.headers['accept-language'].match(/(.*),/)[1];
  resObj.software = req.headers['user-agent'].match(/\((.*)\)/)[1];
  res.send(resObj);
});

app.get('/', function index(req, res) {
  res.render('index.pug');
});

app.listen(PORT, function() {
  console.log('process is listening on port ' + PORT);
});

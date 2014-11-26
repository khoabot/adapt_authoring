var configuration = require('../../lib/configuration');
var express = require('express');
var server = module.exports = express();

server.set('views', __dirname);
server.set('view engine', 'hbs');

server.get('/', function (req, res, next) {
  // this needs to do more. may have config in memory (from process.env) but still need to load framework, database etc.


  // check if config file is loaded, if not, redirect to install
  if (!configuration.configLoaded) {
    return res.redirect('/install');
  }

  // @TODO if user isn't authenticated, redirect to login
  res.render('index');
});

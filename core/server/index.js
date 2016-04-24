var express = require('express'),
  routes = require('./routes'),
  models = require('./models'),

  server = express();

function init() {
  // ## CORS
  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  // ## Init models
  models.init();
  
  // ## Routing
  routes.api(server);

  // ## Boot server
  server.set('port', process.env.PORT || 3000);
  server.listen(server.get('port'), function() {
    console.log('\nServer listening on port ' + server.get('port'));
    console.log('Ctrl-C to shut down server');
  });
}

module.exports = init;

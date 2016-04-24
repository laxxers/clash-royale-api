var api = require('../api');

module.exports = function(server) {
  // ## Troops
  server.get('/api/v1.0/troops', api.http(api.troops.browse));

  // ## Spells
  server.get('/api/v1.0/spells', api.http(api.spells.browse));

  // ## Buildings

  // ## Arenas
  server.get('/api/v1.0/arenas', api.http(api.arenas.browse));
  
  // ## Experiences
  server.get('/api/v1.0/experiences', api.http(api.experiences.browse));
}

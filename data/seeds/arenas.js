
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('arenas').del(),
    knex('arenas').insert([{
      arena: 'training camp',
      trophies: 'tutorial',
      demotion_at: 'tutorial'
    }, {
      arena: 'goblin stadium',
      trophies: '0+',
      demotion_at: 'N/A'
    }, {
      arena: 'bone pit',
      trophies: '400+',
      demotion_at: '350'
    }, {
      arena: 'barbarian bowl',
      trophies: '800+',
      demotion_at: '750'
    }, {
      arena: 'P.E.K.K.A\'s playhouse',
      trophies: '1100+',
      demotion_at: '1050'
    }, {
      arena: 'spell valley',
      trophies: '1400+',
      demotion_at: '1350'
    }, {
      arena: 'builder\'s workshop',
      trophies: '1700+',
      demotion_at: '1650'
    }, {
      arena: 'royal arena',
      trophies: '2000+',
      demotion_at: '1950'
    }, {
      arena: 'legendary arena',
      trophies: '3000+',
      demotion_at: '2950'
    }])
  );
};

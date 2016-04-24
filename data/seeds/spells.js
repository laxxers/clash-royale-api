
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('spells').del(),
    knex('spells').insert([{
      name: 'fireball',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20160318164945',
      bio: 'Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.',
      duration: 'N/A',
      radius: '2.5',
      cost: '4 elixirs',
      targets: 'N/A',
      type: 'spell',
      rarity: 'rare',
      unlock_at: '1'
    }, {
      name: 'lightning',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest/scale-to-width-down/218?cb=20160124213214',
      bio: 'Bolts of lightning hit up to 3 enemy troops or buildings with the most hitpoints in the target area. Reduced damage to Crown Towers.',
      duration: '1.5 seconds',
      radius: '3.5',
      cost: '6 elixirs',
      targets: '3',
      type: 'spell',
      rarity: 'epic',
      unlock_at: '2'
    }, {
      name: 'arrow',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest/scale-to-width-down/200?cb=20160120003751',
      bio: 'Arrows pepper a large area damaging everyone hit. Reduced damage to crown towers.',
      duration: 'N/A',
      radius: '4',
      cost: '3 elixirs',
      targets: 'N/A',
      type: 'spell',
      rarity: 'common',
      unlock_at: '1'
    }, {
      name: 'rage',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest/scale-to-width-down/218?cb=20160124213511',
      bio: 'Increases troop movement and attack speed by 40%. Troop buildings and summoners deploy troops faster. Chaaarge!',
      duration: 'N/A',
      radius: '5',
      cost: '3 elixirs',
      targets: 'N/A',
      type: 'spell',
      rarity: 'epic',
      unlock_at: '4'
    }, {
      name: 'rocket',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest/scale-to-width-down/218?cb=20160124213513',
      bio: 'Deals high damage to a small area. Looks really awesome doing it. Reduced damage to Crown Towers.',
      duration: 'N/A',
      radius: '2',
      cost: '6 elixirs',
      targets: 'N/A',
      type: 'spell',
      rarity: 'rare',
      unlock_at: '4'
    }, {
      name: 'goblin barrel',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212',
      bio: 'Spawns three Goblins anywhere on the Arena. It\'s going to be a thrilling ride, boys!',
      duration: 'N/A',
      radius: '1.5',
      cost: '4 elixirs',
      targets: 'x3',
      type: 'spell',
      rarity: 'epic',
      unlock_at: '2'
    }, {
      name: 'poison',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20160302020202',
      bio: 'Covers the target area in a sticky toxin, damaging and slowing down troops and buildings. Remember: solvent abuse can kill!',
      duration: '10 seconds',
      radius: '3.5',
      cost: '4 elixirs',
      targets: 'N/A',
      type: 'spell',
      rarity: 'epic',
      unlock_at: '6'
    }, {
      name: 'freeze',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211',
      bio: 'Freezes troops and buildings, making them unable to move or attack. Everybody chill.',
      duration: 'N/A',
      radius: '3',
      cost: '4 elixirs',
      targets: 'N/A',
      type: 'spell',
      rarity: 'epic',
      unlock_at: '5'
    }, {
      name: 'zap',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest/scale-to-width-down/200?cb=20160124213524',
      bio: 'Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers.',
      duration: 'N/A',
      radius: '2.5',
      cost: '2 elixirs',
      targets: 'N/A',
      type: 'spell',
      rarity: 'common',
      unlock_at: '6'
    }, {
      name: 'mirror',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20160317213846',
      bio: 'Mirrors your last card played for +1 Elixir',
      duration: 'N/A',
      radius: 'N/A',
      cost: 'cost of previous card played + 1',
      targets: 'N/A',
      type: 'spell',
      rarity: 'epic',
      unlock_at: '6'
    }])
  );
};

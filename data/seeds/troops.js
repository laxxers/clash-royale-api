
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('troops').del(),
    knex('troops').insert([{
      name: 'globins',
      image: 'http://vignette4.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213213',
      bio: 'Three fast, unarmored melee attackers. Small, fast, green and mean!',
      hit_speed: '1 sec',
      speed: 'fast',
      deploy_time: '1 second',
      range: '2.5',
      target: 'air & ground',
      cost: '3 elixirs',
      count: 'x3',
      type: 'troop',
      rarity: 'common',
      unlock_at: '2'
    }, {
      name: 'minions',
      image: 'http://vignette2.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213503',
      bio: 'Three fast, unarmored flying attackers. Roses are red, minions are blue, they can fly, and will crush you!',
      hit_speed: '1.1 sec',
      speed: 'very fast',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '2 elixirs',
      count: 'x3',
      type: 'troop',
      rarity: 'common',
      unlock_at: '3'
    }, {
      name: 'musketeer ',
      image: 'http://vignette2.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest/scale-to-width-down/218?cb=20160220210318',
      bio: 'Don\'t be fooled by her delicately coiffed hair, the musketeer is a mean shot with her trusty boomstick.',
      hit_speed: '1.1 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '6.5',
      target: 'air & ground',
      cost: '4 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'rare',
      unlock_at: '1'
    }, {
      name: 'skeletons ',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213515',
      bio: 'Four fast, very weak melee fighters. Swarm your enemies with this pile of bones!',
      hit_speed: '1 sec',
      speed: 'fast',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '1 elixir',
      count: 'x4',
      type: 'troop',
      rarity: 'common',
      unlock_at: '3'
    }, {
      name: 'archers ',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest/scale-to-width-down/200?cb=20160124213208',
      bio: 'A pair of unarmored ranged attackers. They\'ll help you with ground and air unit attacks, but you\'re on your own with coloring your hair.',
      hit_speed: '1.2 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '5.5',
      target: 'air & ground',
      cost: '3 elixirs',
      count: 'x2',
      type: 'troop',
      rarity: 'common',
      unlock_at: '1'
    }, {
      name: 'spear goblins',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest/scale-to-width-down/200?cb=20160124213517',
      bio: 'Three unarmored ranged attackers. Who the heck taught these guys to throw spears!?! Who thought that was a good idea?!',
      hit_speed: '1.3 sec',
      speed: 'very fast',
      deploy_time: '1 second',
      range: '5.5',
      target: 'air & ground',
      cost: '2 elixirs',
      count: 'x3',
      type: 'troop',
      rarity: 'common',
      unlock_at: '2'
    }, {
      name: 'bomber',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209',
      bio: 'Small, lightly protected skeleton that throws bombs. Deals damage that can wipe out a swarm of enemies.',
      hit_speed: '1.9 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '5',
      target: 'ground',
      cost: '3 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'common',
      unlock_at: '1'
    }, {
      name: 'valkyrie',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest/scale-to-width-down/218?cb=20160124213520',
      bio: 'Tough melee fighter, deals area damage around her. Swarm or horde, no problem! She can take them all out with a few spins.',
      hit_speed: '1.5 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '4 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'rare',
      unlock_at: '2'
    }, {
      name: 'knight',
      image: 'http://vignette4.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest/scale-to-width-down/200?cb=20160319223232',
      bio: 'A tough melee fighter. The Barbarian\'s handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.',
      hit_speed: '1.1 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '3 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'common',
      unlock_at: '1'
    }, {
      name: 'giant',
      image: 'http://vignette2.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest/scale-to-width-down/218?cb=20160124213211',
      bio: 'Slow but durable, only attacks buildings. A real one-man wrecking crew!',
      hit_speed: '1.5 sec',
      speed: 'slow',
      deploy_time: '1 second',
      range: 'melee',
      target: 'buildings',
      cost: '5 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'rare',
      unlock_at: '1'
    }, {
      name: 'skeleton army',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest/scale-to-width-down/218?cb=20160124213514',
      bio: 'Summons an army of skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc.',
      hit_speed: '1 sec',
      speed: 'fast',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '4 elixirs',
      count: 'x20',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '1'
    }, {
      name: 'mini P.E.K.K.A',
      image: 'http://vignette2.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160124213504',
      bio: 'The arena is a certified butterfly-free zone. No distractions for P.E.K.K.A, only destruction.',
      hit_speed: '1.8 sec',
      speed: 'fast',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '4 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'rare',
      unlock_at: '1'
    }, {
      name: 'barbarians',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest/scale-to-width-down/200?cb=20160124213209',
      bio: 'A horde of swordsmen with mean mustaches and even meaner tempers.',
      hit_speed: '1.5 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '5 elixirs',
      count: 'x4',
      type: 'troop',
      rarity: 'common',
      unlock_at: '4'
    }, {
      name: 'minion horde',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest/scale-to-width-down/200?cb=20160124213501',
      bio: 'Six fast, unarmored flying attackers. Three\'s a crowd, six is a horde!',
      hit_speed: '1 sec',
      speed: 'fast',
      deploy_time: '1 second',
      range: '2.5',
      target: 'air & ground',
      cost: '5 elixirs',
      count: 'x6',
      type: 'troop',
      rarity: 'common',
      unlock_at: '5'
    }, {
      name: 'witch',
      image: 'http://vignette4.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest/scale-to-width-down/218?cb=20160124213521',
      bio: 'Summons skeletons, shoots destructo beams, has glowing pink eyes that unfortunately don\'t shoot lasers.',
      hit_speed: '0.7 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '5.5',
      target: 'air & ground',
      cost: '5 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '1'
    }, {
      name: 'balloon',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213208',
      bio: 'As pretty as they are, you won\'t want a parade of THESE balloons showing up on the horizon. Drops powerful bombs and when shot down, crashes dealing area damage.',
      hit_speed: '3 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: 'melee',
      target: 'buildings',
      cost: '5 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '3'
    }, {
      name: 'giant skeleton',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest/scale-to-width-down/218?cb=20160124213212',
      bio: 'The bigger the skeleton, the bigger the bomb. Carries a bomb that blows up when the Giant Skeleton dies.',
      hit_speed: '1.5 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '6 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '3'
    }, {
      name: 'baby dragon',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest/scale-to-width-down/218?cb=20160120003759',
      bio: 'Flying troop that deals area damage. Baby dragons hatch cute, hungry, and ready for a barbeque.',
      hit_speed: '1.8 sec',
      speed: 'fast',
      deploy_time: '1 second',
      range: '3.5',
      target: 'air & ground',
      cost: '4 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '1'
    }, {
      name: 'three musketeers',
      image: 'http://vignette4.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20160401121106',
      bio: 'Trio of powerful, independent markswomen, fighting for justice and honor. Disrespecting them would not be just a mistake, it would be a cardinal sin!',
      hit_speed: '1.1 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '6.5',
      target: 'air & ground',
      cost: '9 elixirs',
      count: 'x3',
      type: 'troop',
      rarity: 'rare',
      unlock_at: '8'
    }, {
      name: 'wizard',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest/scale-to-width-down/218?cb=20160124213522',
      bio: 'The most awesome man to ever set foot in the arena, the Wizard will blow you away with his handsomeness... and/or fireballs.',
      hit_speed: '1.7 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '5.5',
      target: 'air & ground',
      cost: '5 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'rare',
      unlock_at: '6'
    }, {
      name: 'hog rider',
      image: 'http://vignette1.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213',
      bio: 'Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of "Hog Riderrrrr" all the way through the arena doors.',
      hit_speed: '1.5 sec',
      speed: 'very fast',
      deploy_time: '1 second',
      range: 'melee',
      target: 'buildings',
      cost: '4 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'rare',
      unlock_at: '5'
    }, {
      name: 'prince',
      image: 'http://vignette2.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest/scale-to-width-down/218?cb=20160124213510',
      bio: 'Don\'t let the little pony fool you. Once the Prince gets a running start, you WILL be trampled. Does 2x damage once he gets charging.',
      hit_speed: '1.5 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '2.5',
      target: 'ground',
      cost: '5 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '1'
    }, {
      name: 'P.E.K.K.A',
      image: 'http://vignette4.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest/scale-to-width-down/218?cb=20160220212507',
      bio: 'A heavily armored, slow melee fighter. Swings from the hip but packs a huge punch.',
      hit_speed: '1.8 sec',
      speed: 'slow',
      deploy_time: '3 seconds',
      range: 'melee',
      target: 'ground',
      cost: '7 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '5'
    }, {
      name: 'golem',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest/scale-to-width-down/218?cb=20160124213213',
      bio: 'Slow but durable, only attacks buildings. When destroyed, explosively splits into two Golemites and deals area damage!',
      hit_speed: '2.5 sec',
      speed: 'slow',
      deploy_time: '3 seconds',
      range: 'melee',
      target: 'buildings',
      cost: '8 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '7'
    }, {
      name: 'dark prince',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20160301012029',
      bio: 'Dealing area damage with each swing and double after charging, the Dark Prince is a formidable fighter. To harm his squishy core, break his shield first.',
      hit_speed: '1.5 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: 'melee',
      target: 'ground',
      cost: '4 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'epic',
      unlock_at: '8'
    }, {
      name: 'royal giant',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20160302023049',
      bio: 'Sighting his massive cannon at enemy buildings, the Royal Giant comes in like a wrecking ball.',
      hit_speed: '1.5 sec',
      speed: 'slow',
      deploy_time: '1 second',
      range: '6',
      target: 'buildings',
      cost: '4 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'common',
      unlock_at: '8'
    }, {
      name: 'ice wizard',
      image: 'http://vignette3.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20160325170843',
      bio: 'This chill caster hails from the far North. He shoots ice shards at enemies, slowing down their movement and attack speed.',
      hit_speed: '1.5 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '6',
      target: 'air & ground',
      cost: '3 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'legendary',
      unlock_at: '6'
    }, {
      name: 'princess',
      image: 'http://vignette2.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20160409191645',
      bio: 'Shoots a volley of flaming arrows halfway across the Arena. The Princess is afraid of germs, so keep the rabble away from her!',
      hit_speed: '3 sec',
      speed: 'medium',
      deploy_time: '1 second',
      range: '9.5',
      target: 'air & ground',
      cost: '3 elixirs',
      count: 'x1',
      type: 'troop',
      rarity: 'legendary',
      unlock_at: '8'
    }])
  );
};

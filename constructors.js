///////////CONSTRUCTORS/////////////

const Pokemon = function(options){
  this.name =       options.name;
  this.speed =      options.speed;
  this.type =       options.type;
  this.moves =      options.moves
  this.health =     options.health;
  this.thumbnail =  options.thumbnail;
  this.number =     options.number;
};

const Type = function(options){
  this.name =       options.name;
  this.strength =   options.strength;
  this.element =    options.element;
};

const Moves = function(options){
  this.a =          options.a || tackle;
  this.b =          options.b || thundershock;
  this.c =          options.c || sandattack;
  this.d =          options.d || defenseCurl;
};



/////MOVE LIST////

          /////OFFENSIVE  A MOVES//////
const scratch =       ['Scratch', 'attack', 8];
const tackle =        ['Tackle', 'attack', 12];
const bodySlam =      ['Body Slam', 'attack', 16];

          //////OFFENSIVE B MOVES ///////
const ember =         ['Ember', 'attack', 20];
const flameThrower =  ['Flamethrower', 'attack', 30];
const bubble =        ['Bubble', 'attack', 20];
const watergun =      ['Watergun', 'attack', 28];
const vineWhip =      ['Vinewhip', 'attack', 20];
const razorLeaf =     ['Razor Leaf', 'attack', 35];
const confuse =       ['Confuse', 'attack', 25];
const psybeam =       ['Psybeam', 'attack', 50];
const boneclub =      ['Boneclub', 'attack', 20];
const nightshade =    ['Nightshade', 'attack', 50];
const thundershock =  ['Thundershock', 'attack', 30];
const thunderbolt =   ['Thunderbolt', 'attack', 45];
const rockThrow =     ['Rock Throw', 'attack', 28];
const avalanche =     ['Avalanche', 'attack', 40];

          ///////EVADE C MOVES/////////
const sandattack =    ['Sand Attack', 'evade', 3];
const tailwhip =      ['Tail Whip', 'evade', 5];

          ////////DEFENSIVE D MOVES///////
const defenseCurl =   ['Defense Curl', 'defend', 10];
const reflect =       ['Reflect', 'defend', 8];


//////////// THUMBNAILS //////////////
const charmanderThumbnail = '<img src = "http://img.pokemondb.net/artwork/charmander.jpg">';
const squirtleThumbnail =   '<img src = "http://img.pokemondb.net/artwork/squirtle.jpg">';
const bulbasaurThumbnail =  '<img src = "http://img.pokemondb.net/artwork/ivysaur.jpg">';
const mewtwoThumbnail =     '<img src = "http://img.pokemondb.net/artwork/mewtwo.jpg">';
const cuboneThumbnail =     '<img src = "http://img.pokemondb.net/artwork/cubone.jpg">';
const pikachuThumbnail =    '<img src = "http://img.pokemondb.net/artwork/pikachu.jpg">';
const flareonThumbnail =    '<img src = "http://img.pokemondb.net/artwork/flareon.jpg">';
const laprasThumbnail =     '<img src = "http://img.pokemondb.net/artwork/lapras.jpg">';
const gloomThumbnail =      '<img src = "http://img.pokemondb.net/artwork/gloom.jpg">';
const onixThumbnail =       '<img src = "http://img.pokemondb.net/artwork/onix.jpg">';


////////// MOVE STYLES ////////
const charmanderMoves =   new Moves({a: scratch, b: ember, c: flameThrower, d: reflect});
const squirtleMoves =     new Moves({a: tackle, b: bubble, c: watergun, d: reflect});
const bulbasaurMoves =    new Moves({a: tackle, b: vineWhip, c: razorLeaf, d: defenseCurl});
const mewtwoMoves =       new Moves({a: tackle, b: confuse, c: psybeam, d: reflect});
const cuboneMoves =       new Moves ({a: tackle, b: boneclub, c: nightshade, d: defenseCurl});
const pikachuMoves =      new Moves ({a: scratch, b: thundershock, c: thunderbolt, d: reflect});
const flareonMoves =      new Moves ({a: bodySlam, b: ember, c: flameThrower});
const laprasMoves =       new Moves ({a: bodySlam, b: bubble, c: watergun});
const gloomMoves =        new Moves ({b: vineWhip, c: razorLeaf});
const onixMoves =         new Moves ({a: bodySlam, b: rockThrow, c: avalanche, d: defenseCurl})


/////TYPES/////
const fire =        new Type({name: 'Fire', strength: 10, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/a/ad/Fire-attack.png'></aside>"});
const water =       new Type({name: 'Water', strength: 12, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/1/11/Water-attack.png'></aside>"});
const grass =       new Type({name: 'Grass', strength: 12, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/2/2e/Grass-attack.png'></aside>"});
const psychic =     new Type({name: 'Psychic', strength: 20, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/e/ef/Psychic-attack.png'></aside>"});
const ghost =       new Type({name: 'Ghost', strength: 15, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/a/ab/Darkness-attack.png'></aside>"});
const rock =        new Type({name: 'Rock', strength: 30, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/4/48/Fighting-attack.png'></aside>"});
const lightning =   new Type({name: 'Lightning', strength: 20, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/0/04/Lightning-attack.png'></aside>"});


/////POKEMON//////
const onix =        new Pokemon({number: 0, name: 'Onix', speed: 4, type: rock, moves: onixMoves, health: 300, thumbnail: onixThumbnail});
const charmander =  new Pokemon({number: 1, name: 'Charmander', speed: 10, type: fire, moves: charmanderMoves, health: 100, thumbnail: charmanderThumbnail});
const squirtle =    new Pokemon({number: 2, name: 'Squirtle', speed: 6, type: water, moves: squirtleMoves, health: 140, thumbnail: squirtleThumbnail});
const bulbasaur =   new Pokemon({number: 3, name: 'Bulbasaur', speed: 8, type: grass, moves: bulbasaurMoves, health: 120, thumbnail: bulbasaurThumbnail});
const mewtwo =      new Pokemon({number: 4, name: 'Mewtwo', speed: 100, type: psychic, moves: mewtwoMoves, health: 180, thumbnail: mewtwoThumbnail});
const cubone =      new Pokemon({number: 5, name: 'Cubone', speed: 20, type: ghost, moves: cuboneMoves, health: 140, thumbnail: cuboneThumbnail});
const pikachu =     new Pokemon({number: 6, name: 'Pikachu', speed: 50, type: lightning, moves: pikachuMoves, health: 80, thumbnail: pikachuThumbnail});
const flareon =     new Pokemon({number: 7, name: 'Flareon', speed: 45, type: fire, moves: flareonMoves, health: 120, thumbnail: flareonThumbnail});
const lapras =      new Pokemon({number: 8, name: 'Lapras', speed: 10, type: water, moves: laprasMoves, health: 220, thumbnail: laprasThumbnail});
const gloom =       new Pokemon({number: 9, name: 'Gloom', spped: 8, type: grass, moves: gloomMoves, health: 150, thumbnail: gloomThumbnail});


//////////// ARRAY//////////
const pokemonArray = [charmander, squirtle, bulbasaur, mewtwo, cubone, pikachu, flareon, lapras, gloom, onix];

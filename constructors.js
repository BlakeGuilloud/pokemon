///////////CONSTRUCTORS/////////////

var Pokemon = function(options){
  this.name = options.name;
  this.speed = options.speed;
  this.type = options.type;
  this.moves = options.moves
  this.health = options.health;
  this.thumbnail = options.thumbnail;
  this.key = options.key;
};

var Type = function(options){
  this.name = options.name;
  this.strength = options.strength;
  this.element = options.element;
}

var Moves = function(options){
  this.a = options.a || tackle;
  this.b = options.b || thundershock;
  this.c = options.c || sandattack;
  this.d = options.d || defenseCurl;
}





/////MOVE LIST////

          /////OFFENSIVE  A MOVES//////
var scratch = ['Scratch', 'attack', 8];
var tackle = ['Tackle', 'attack', 12];
var bodySlam = ['Body Slam', 'attack', 16];

          //////OFFENSIVE B MOVES ///////
var ember = ['Ember', 'attack', 20];
var flameThrower = ['Flamethrower', 'attack', 30];
var bubble = ['Bubble', 'attack', 20];
var watergun = ['Watergun', 'attack', 28];
var vineWhip = ['Vinewhip', 'attack', 20];
var razorLeaf = ['Razor Leaf', 'attack', 35];
var confuse = ['Confuse', 'attack', 25];
var psybeam = ['Psybeam', 'attack', 50];
var boneclub = ['Boneclub', 'attack', 20];
var nightshade = ['Nightshade', 'attack', 50];
var thundershock = ['Thundershock', 'attack', 30];
var thunderbolt = ['Thunderbolt', 'attack', 45];
var rockThrow = ['Rock Throw', 'attack', 28];
var avalanche = ['Avalanche', 'attack', 40];

          ///////EVADE C MOVES/////////
var sandattack = ['Sand Attack', 'evade', 3];
var tailwhip = ['Tail Whip', 'evade', 5];

          ////////DEFENSIVE D MOVES///////
var defenseCurl = ['Defense Curl', 'defend', 10];
var reflect = ['Reflect', 'defend', 8];


//////////// THUMBNAILS //////////////
var charmanderThumbnail = '<img src = "http://img.pokemondb.net/artwork/charmander.jpg">';
var squirtleThumbnail = '<img src = "http://img.pokemondb.net/artwork/squirtle.jpg">';
var bulbasaurThumbnail = '<img src = "http://img.pokemondb.net/artwork/ivysaur.jpg">';
var mewtwoThumbnail = '<img src = "http://img.pokemondb.net/artwork/mewtwo.jpg">';
var cuboneThumbnail = '<img src = "http://img.pokemondb.net/artwork/cubone.jpg">';
var pikachuThumbnail = '<img src = "http://img.pokemondb.net/artwork/pikachu.jpg">';
var flareonThumbnail = '<img src = "http://img.pokemondb.net/artwork/flareon.jpg">';
var laprasThumbnail = '<img src = "http://img.pokemondb.net/artwork/lapras.jpg">';
var gloomThumbnail = '<img src = "http://img.pokemondb.net/artwork/gloom.jpg">';
var onixThumbnail = '<img src = "http://img.pokemondb.net/artwork/onix.jpg">';



////////// MOVE STYLES ////////
var charmanderMoves = new Moves({a: scratch, b: ember, c: flameThrower, d: reflect});
var squirtleMoves = new Moves({a: tackle, b: bubble, c: watergun, d: reflect});
var bulbasaurMoves = new Moves({a: tackle, b: vineWhip, c: razorLeaf, d: defenseCurl});
var mewtwoMoves = new Moves({a: tackle, b: confuse, c: psybeam, d: reflect});
var cuboneMoves = new Moves ({a: tackle, b: boneclub, c: nightshade, d: defenseCurl});
var pikachuMoves = new Moves ({a: scratch, b: thundershock, c: thunderbolt, d: reflect});
var flareonMoves = new Moves ({a: bodySlam, b: ember, c: flameThrower});
var laprasMoves = new Moves ({a: bodySlam, b: bubble, c: watergun});
var gloomMoves = new Moves ({b: vineWhip, c: razorLeaf});
var onixMoves = new Moves ({a: bodySlam, b: rockThrow, c: avalanche, d: defenseCurl})


/////TYPES/////
var fire = new Type({name: 'Fire', strength: 10, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/a/ad/Fire-attack.png'></aside>"});
var water = new Type({name: 'Water', strength: 12, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/1/11/Water-attack.png'></aside>"});
var grass = new Type({name: 'Grass', strength: 12, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/2/2e/Grass-attack.png'></aside>"});
var psychic = new Type({name: 'Psychic', strength: 20, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/e/ef/Psychic-attack.png'></aside>"});
var ghost = new Type({name: 'Ghost', strength: 15, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/a/ab/Darkness-attack.png'></aside>"});
var rock = new Type({name: 'Rock', strength: 30, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/4/48/Fighting-attack.png'></aside>"});
var lightning = new Type({name: 'Lightning', strength: 20, element: "<aside><img class 'elementIcon' src = 'http://cdn.bulbagarden.net/upload/0/04/Lightning-attack.png'></aside>"})


/////POKEMON//////
var charmander = new Pokemon({key: 'charmander', name: 'Charmander', speed: 10, type: fire, moves: charmanderMoves, health: 100, thumbnail: charmanderThumbnail});
var squirtle = new Pokemon({key: 'squirtle', name: 'Squirtle', speed: 6, type: water, moves: squirtleMoves, health: 140, thumbnail: squirtleThumbnail});
var bulbasaur = new Pokemon({key: 'bulbasaur', name: 'Bulbasaur', speed: 8, type: grass, moves: bulbasaurMoves, health: 120, thumbnail: bulbasaurThumbnail});
var mewtwo = new Pokemon({key: 'mewtwo', name: 'Mewtwo', speed: 100, type: psychic, moves: mewtwoMoves, health: 180, thumbnail: mewtwoThumbnail});
var cubone = new Pokemon({key: 'cubone', name: 'Cubone', speed: 20, type: ghost, moves: cuboneMoves, health: 140, thumbnail: cuboneThumbnail});
var pikachu = new Pokemon({key: 'pikachu', name: 'Pikachu', speed: 50, type: lightning, moves: pikachuMoves, health: 80, thumbnail: pikachuThumbnail});
var flareon = new Pokemon({key: 'flareon', name: 'Flareon', speed: 45, type: fire, moves: flareonMoves, health: 120, thumbnail: flareonThumbnail});
var lapras = new Pokemon({key: 'lapras', name: 'Lapras', speed: 10, type: water, moves: laprasMoves, health: 220, thumbnail: laprasThumbnail});
var gloom = new Pokemon({key: 'gloom', name: 'Gloom', spped: 8, type: grass, moves: gloomMoves, health: 150, thumbnail: gloomThumbnail});
var onix = new Pokemon({key: 'onix', name: 'Onix', spped: 4, type: rock, moves: onixMoves, health: 300, thumbnail: onixThumbnail});








//////////// ARRAY//////////
var pokemonArray = [charmander, squirtle, bulbasaur, mewtwo, cubone, pikachu, flareon, lapras, gloom, onix];

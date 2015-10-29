///////////CONSTRUCTORS/////////////

var Pokemon = function(options){
  this.name = options.name;
  this.speed = options.speed;
  this.type = options.type;
  this.moves = options.moves
  this.health = options.health;
  this.thumbnail = options.thumbnail;
};

var Type = function(options){
  this.name = options.name;
  this.strength = options.strength;
}

var Moves = function(options){
  this.a = options.a;
  this.b = options.b;
  this.c = options.c;
  this.d = options.d;
}





/////MOVE LIST////

          /////OFFENSIVE MOVES//////
var scratch = ['Scratch', 'attack', 10];
var tackle = ['Tackle', 'attack', 12]
var ember = ['Ember', 'attack', 20];
var bubble = ['Bubble', 'attack', 20]
var vineWhip = ['Vinewhip', 'attack', 20]
var psybeam = ['Psybeam', 'attack', 100]

          ///////EVADE MOVES/////////
var sandattack = ['Sand Attack', 'evade', 10];
var tailwhip = ['Tail Whip', 'evade', 5];

          ////////DEFENSIVE MOVES///////
var defenseCurl = ['Defense Curl', 'defend', 10];
var reflect = ['Reflect', 'defend', 8];


//////////// THUMBNAILS //////////////
var charmanderThumbnail = '<img src = "http://img.pokemondb.net/artwork/charmander.jpg">';
var squirtleThumbnail = '<img src = "http://img.pokemondb.net/artwork/squirtle.jpg">'
var bulbasaurThumbnail = '<img src = "http://img.pokemondb.net/artwork/bulbasaur.jpg">'
var mewtwoThumbnail = '<img src = "http://img.pokemondb.net/artwork/mewtwo.jpg">'

////////// MOVE STYLES ////////
var charmanderMoves = new Moves({a: scratch, b: ember, c: sandattack, d: defenseCurl});
var squirtleMoves = new Moves({a: tackle, b: bubble, c: tailwhip, d: reflect});
var bulbasaurMoves = new Moves({a: tackle, b: vineWhip, c: tailwhip, d: defenseCurl});
var mewtwoMoves = new Moves({a: tackle, b: psybeam, c: sandattack, d: reflect});



/////TYPES/////
var fire = new Type({name: 'Fire', strength: 10});
var water = new Type({name: 'Water', strength: 12});
var grass = new Type({name: 'Grass', strength: 12});
var psychic = new Type({name: 'Psychic', strength: 40})


/////POKEMON//////
var charmander = new Pokemon({name: 'Charmander', speed: 10, type: fire, moves: charmanderMoves, health: 100, thumbnail: charmanderThumbnail});
var squirtle = new Pokemon({name: 'Squirtle', speed: 6, type: water, moves: squirtleMoves, health: 140, thumbnail: squirtleThumbnail});
var bulbasaur = new Pokemon({name: 'Bulbasaur', speed: 8, type: grass, moves: bulbasaurMoves, health: 120, thumbnail: bulbasaurThumbnail});
var mewtwo = new Pokemon({name: 'Mewto', speed: 100, type: psychic, moves: mewtwoMoves, health: 400, thumbnail: mewtwoThumbnail})

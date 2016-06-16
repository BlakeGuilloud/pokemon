$(document).ready(function(){
  page.init();
});
let randomPokemon;
const page = {
  init: function(){
    page.events();
    page.styling();
  },

  styling: function(){

    /////////// APPENDING STYLING //////////
    _.each(pokemonArray, function(currVal) {
        $(`.battle`).append(`<article class="selectPokemon" id=${currVal.number}>${currVal.thumbnail}<h4>${currVal.name}</h4></article>`);
    });

    ///////////// RANDOM POKEMON ////////////
    randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

    //////////// SELECTING POKEMON ///////////
    $('.selectPokemon').on('click', (event) => {
        getAttacker();
        getDefender();
        initiateBattle();
        prepareBattleField();
        displayMoves();
        displayHealth();
    });

    function getAttacker() {
        attacker = pokemonArray[event.currentTarget.id - 1];
    }

    function getDefender() {
        defender = randomPokemon;
    }

    function initiateBattle() {
        $('.battlefield').addClass('hidden');
        $('.showMatch').removeClass('hidden');
    }

    function prepareBattleField() {
        $('.attackerSlot').prepend(attacker.thumbnail);
        $('.attackerSlot').prepend(attacker.type.element);
        $('.defenderSlot').prepend(defender.thumbnail);
        $('.defenderSlot').prepend(defender.type.element);
    }

    function displayMoves() {
        $('.a').html(attacker.moves.a[0]);
        $('.b').html(attacker.moves.b[0]);
        $('.c').html(attacker.moves.c[0]);
        $('.d').html(attacker.moves.d[0]);
    }

    function displayHealth() {
        $('.defenderHealth').html(defender.name + "'s "+ "Remaining Health: "+ defender.health);
        $('.attackerHealth').html(attacker.name + "'s " + "Remaining Health: " + attacker.health);
    }

    //////////// ADJUSTING ADVANTAGE OF POKEMON.TYPE ////////////
    $('article').on('click', function(){
/////////// FIRE //////////////////
      if(attacker.type.name === 'Fire' && defender.type.name === 'Water'){
        attacker.moves.b[2] = attacker.moves.b[2] / 2;
        attacker.moves.c[2] = attacker.moves.c[2] / 2;
        defender.moves.b[2] = defender.moves.b[2] * 2;
        defender.moves.c[2] = defender.moves.c[2] * 2;
      } else if(attacker.type.name === 'Fire' && defender.type.name === 'Grass'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        attacker.moves.c[2] = attacker.moves.c[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
        defender.moves.c[2] = defender.moves.c[2] / 2;
      } else if(attacker.type.name === 'Fire' && defender.type.name === 'Rock'){
        attacker.moves.b[2] = attacker.moves.b[2] / 2;
        attacker.moves.c[2] = attacker.moves.c[2] / 2;
        defender.moves.b[2] = defender.moves.b[2] * 1.4;
        defender.moves.c[2] = defender.moves.c[2] * 1.4;
      } else if(attacker.type.name === 'Fire' && defender.type.name === 'Psychic'){
        attacker.moves.b[2] = attacker.moves.b[2] / 1.5;
        attacker.moves.c[2] = attacker.moves.c[2] / 1.2;
        defender.moves.b[2] = defender.moves.b[2] * 1.4;
        defender.moves.c[2] = defender.moves.c[2] * 1.4;
      }
/////////// WATER //////////////////
        else if(attacker.type.name === 'Water' && defender.type.name === 'Fire'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        attacker.moves.c[2] = attacker.moves.c[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
        defender.moves.c[2] = defender.moves.c[2] / 2;
      } else if(attacker.type.name === 'Water' && defender.type.name === 'Grass'){
        attacker.moves.b[2] = attacker.moves.b[2] / 2;
        attacker.moves.c[2] = attacker.moves.c[2] / 2;
        defender.moves.b[2] = defender.moves.b[2] * 2;
        defender.moves.c[2] = defender.moves.c[2] * 2;
      } else if(attacker.type.name === 'Water' && defender.type.name === 'Rock'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        attacker.moves.c[2] = attacker.moves.c[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
        defender.moves.c[2] = defender.moves.c[2] / 2;
      }
/////////// GRASS //////////////////
        else if(attacker.type.name === 'Grass' && defender.type.name === 'Water'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        attacker.moves.c[2] = attacker.moves.c[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
        defender.moves.c[2] = defender.moves.c[2] / 2;
      } else if(attacker.type.name === 'Grass' && defender.type.name === 'Fire'){
        attacker.moves.b[2] = attacker.moves.b[2] / 2;
        attacker.moves.c[2] = attacker.moves.c[2] / 2;
        defender.moves.b[2] = defender.moves.b[2] * 2;
        defender.moves.c[2] = defender.moves.c[2] * 2;
      } else if(attacker.type.name === 'Grass' && defender.type.name === 'Rock'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        attacker.moves.c[2] = attacker.moves.c[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
        defender.moves.c[2] = defender.moves.c[2] / 2;
      }
/////////// GHOST //////////////////
        else if(attacker.type.name === 'Ghost' && defender.type.name != 'Psychic'){
        attacker.moves.b[2] = attacker.moves.b[2] * 1.5;
        attacker.moves.c[2] = attacker.moves.c[2] * 1.5;
        defender.moves.b[2] = defender.moves.b[2] / 1.5;
      }
/////////// SAME //////////////////
        else if(attacker.type === defender.type){
        attacker.moves.b[2] = attacker.moves.b[2];
        defender.moves.b[2] = defender.moves.b[2];
      }
    });

  },

  events: function(){

    ////////////// LANDING PAGE //////////////////
    $('.yes').on('click', function(){
        $('.landingPage').addClass('hidden');
        $('.battlefield').removeClass('hidden');
    });

    $('.no').on('click', function(){
        $('.landingPage').addClass('hidden');
        $('.adventure').removeClass('hidden');
    });

    //////////////// DETERMINES WHO GOES FIRST //////////
    $('article').on('click', function(){
      console.log('attacker', attacker);
      if(attacker.speed > defender.speed){
        console.log('You attack first')
      } else {
        console.log('Your opponent attacks first')
      }
    });



    //////////// ATTACKER VS DEFENDER CLICKS/////////////
      var evadeMove = function(){
      if(attacker.moves.d[1] === "evade"){
        defender.moves.a[2] = defender.moves.a[2] - attacker.moves.d[2];
        defender.moves.b[2] = defender.moves.b[2] - attacker.moves.d[2];
        defender.moves.c[2] = defender.moves.c[2] - attacker.moves.d[2];
      } else if (attack.moves.d[1] === "defend"){
        attacker.health = attacker.health + attacker.moves.d[2];
      };
    }

      $('.a').on('click', function(){
        defender.health = defender.health - attacker.moves.a[2]
      });
      $('.b').on('click', function(){
        defender.health = defender.health - attacker.moves.b[2]
      });
      $('.c').on('click', function(){
        defender.health = defender.health - attacker.moves.c[2];
      });
      $('.d').on('click', function(){
        evadeMove;
      });




      ///////GAME LOG ////////

      $('.a').on('click', function(){
        $('.battleLog').html(attacker.name + " attacks " + defender.name + " with " + attacker.moves.a[0] + " for " + attacker.moves.a[2] + " damage.");
      });
      $('.b').on('click', function(){
        $('.battleLog').html(attacker.name + " uses special attack  on " + defender.name + " with " + attacker.moves.b[0] + " for " + attacker.moves.b[2] + " damage.");
      });
      $('.c').on('click', function(){
        $('.battleLog').html(attacker.name + " uses spcial attack on " + defender.name + " with " + attacker.moves.c[0] + " for " + attacker.moves.c[2] + " damage.");
      });
      $('.d').on('click', function(){
        $('.battleLog').html(attacker.name + " uses " + attacker.moves.d[0] + " and increases " + attacker.name + "'s health by " + attacker.moves.d[2] + ".");
      });
      $('.move').on('click', function(){

      });



      ///////////////DEFENDER FIGHTS BACK///////////////

      $('.move').on('click', function(){
        var defenderAttack = "";
        var defenderAttackName = "";
        var randomMove = Math.floor(Math.random()*10);
        if(randomMove >= 6){
          defenderAttack = defender.moves.a[2];
          defenderAttackName = defender.moves.a[0];
        } else if (randomMove > 3 && randomMove <= 5){
          defenderAttack = defender.moves.b[2];
          defenderAttackName = defender.moves.b[0];
        } else if (randomMove >= 0  && randomMove <= 3){
          defenderAttack = defender.moves.c[2];
          defenderAttackName = defender.moves.c[0];
        }

        attacker.health = attacker.health - defenderAttack;
        $('.battleLog').append('<br> <br>' + defender.name + " responds with " + defenderAttackName + " and deals " + defenderAttack + " damage.")
        $('.defenderHealth').html(defender.name + "'s "+ "Remaining Health: "+ defender.health);
        $('.attackerHealth').html(attacker.name + "'s " + "Remaining Health: " + attacker.health);
      });





      /////////////ENDING THE FIGHT ///////////////////
      $('.move').on('click', function(){
        if(attacker.health <= 0){
          $('.attackerSlot').slideUp(2000);
          $('.battleLog').html("<h1>" + defender.name + " WINS</h1>");
        } else if(defender.health <= 0){
          $('.defenderSlot').slideUp(2000);
          $('.battleLog').html("<h1>" + attacker.name + " WINS</h1>");
          $('.')
        } else {
          return;
        }
      });



  },










};

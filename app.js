$(document).ready(function(){
  page.init();
});

var page = {
  init: function(){
    page.styling();
    page.events();
  },

  styling: function(){
    
    /////////// APPENDING STYLING //////////
    $('.charmander').html(charmander.thumbnail);
    $('.squirtle').html(squirtle.thumbnail);
    $('.bulbasaur').html(bulbasaur.thumbnail);
    $('.mewtwo').html(mewtwo.thumbnail);




    ///////////// RANDOM POKEMON ////////////

    var mathRandomPokemon = Math.floor(Math.random()*10);
    var randomPokemon = "";
    if(mathRandomPokemon >= 7){
      randomPokemon = squirtle;
    } else if (mathRandomPokemon >= 4 && mathRandomPokemon < 7){
      randomPokemon = bulbasaur;
    } else if (mathRandomPokemon >= 1 && mathRandomPokemon < 4){
      randomPokemon = charmander;
    } else {
      randomPokemon = mewtwo;
      $('.mewtwo').removeClass('hidden');
    };



    //////////// SELECTING POKEMON ///////////
    $('.charmander').on('click', function(){
      attacker = charmander;
      defender = randomPokemon;
    });
    $('.squirtle').on('click', function(){
      attacker = squirtle;
      defender = randomPokemon;
    });
    $('.bulbasaur').on('click', function(){
      attacker = bulbasaur;
      defender = randomPokemon;
    });
    $('.box').on('click', function(){
      console.log("You have chosen " + attacker.name + ". And your opponent has chosen " + defender.name)
    });




    //////////// ADJUSTING ADVANTAGE OF POKEMON.TYPE ////////////
    $('.box').on('click', function(){
      if(attacker.type.name === 'Fire' && defender.type.name === 'Water'){
        attacker.moves.b[2] = attacker.moves.b[2] / 2;
        defender.moves.b[2] = defender.moves.b[2] * 2;
      } else if(attacker.type.name === 'Fire' && defender.type.name === 'Grass'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
      } else if(attacker.type.name === 'Water' && defender.type.name === 'Fire'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
      } else if(attacker.type.name === 'Water' && defender.type.name === 'Grass'){
        attacker.moves.b[2] = attacker.moves.b[2] / 2;
        defender.moves.b[2] = defender.moves.b[2] * 2;
      } else if(attacker.type.name === 'Grass' && defender.type.name === 'Water'){
        attacker.moves.b[2] = attacker.moves.b[2] * 2;
        defender.moves.b[2] = defender.moves.b[2] / 2;
      } else if(attacker.type.name === 'Grass' && defender.type.name === 'Fire'){
        attacker.moves.b[2] = attacker.moves.b[2] / 2;
        defender.moves.b[2] = defender.moves.b[2] * 2;
      } else if(attacker.type === defender.type){
        attacker.moves.b[2] = attacker.moves.b[2];
        defender.moves.b[2] = defender.moves.b[2];
      }
    });

  },

  events: function(){


    //////////////// DETERMINES WHO GOES FIRST //////////
      $('.box').on('click', function(){
        if(attacker.speed > defender.speed){
          console.log('You attack first')
        } else {
          console.log('Your opponent attacks first')
        }
      });



    //////////// ATTACKER VS DEFENDER CLICKS/////////////
      $('.a').on('click', function(){
        defender.health = defender.health - attacker.moves.a[2]
        // console.log(defender.health)
        // console.log('blue')
      });
      $('.b').on('click', function(){
        defender.health = defender.health - attacker.moves.b[2]
        // console.log(defender.health)
        // console.log('blue')
      });
      $('.c').on('click', function(){
        defender.moves.a[2] = defender.moves.a[2] - 2;
        defender.moves.b[2] = defender.moves.b[2] - 2;
        // console.log(defender.health)
        // console.log('blue')
      });
      $('.d').on('click', function(){
        attacker.health = attacker.health + 5;
      });

      ///////GAME LOG ////////



      ///////////////DEFENDER FIGHTS BACK///////////////
      $('.move').on('click', function(){
        var randomMove = Math.floor(Math.random()*10);
        console.log(randomMove);
        var defenderAttack = "";
        var defenderAttackName = "";
        if(randomMove > 7){
          defenderAttack = defender.moves.a[2];
          defenderAttackName = defender.moves.a[0];
          console.log(defender.moves.a[0]);
        } else if (randomMove > 5 && randomMove <= 7){
          defenderAttack = defender.moves.b[2];
          defenderAttackName = defender.moves.a[0];
          console.log(defender.moves.b[0]);
        } else if (randomMove > 3 && randomMove <= 5){
          defenderAttack = defender.moves.c[2];
          defenderAttackName = defender.moves.a[0];
          console.log(defender.moves.c[0]);
        } else {
          defenderAttack = defender.moves.d[2];
          defenderAttackName = defender.moves.a[0];
          console.log(defender.moves.d[0]);
        }
        console.log(defenderAttack);
        attacker.health = attacker.health - defenderAttack;
        console.log(attacker.name + " attacked " + defender.name + " their health: " + defender.health)
        console.log(defender.name + " attacked " + attacker.name + " your health: " + attacker.health)
      });


      /////////////ENDING THE FIGHT ///////////////////
      $('.move').on('click', function(){
        if(attacker.health <= 0){
          $('body').html(defender.thumbnail + 'YOU LOSE');
        } else if(defender.health <= 0){
          $('body').html(attacker.thumbnail + 'YOU WIN');
        } else {
          return;
        }
      });



  },










};

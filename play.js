$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=50px" }, "slow" );
});

$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "slow" );
});

$( "#up" ).click(function(){
  $( ".block" ).animate({ "top": "+=50px" }, "slow" );
});

$( "#down" ).click(function(){
  $( ".block" ).animate({ "top": "-=50px" }, "slow" );
});
//
// $('body').keydown(function(e){
//   if(e.which === 39){
//     $( ".block" ).animate({ "top": "-=50px" }, "slow" );
//   }
// })

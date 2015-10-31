
$('body').keydown(function(e){
  if(e.which === 87){
    $('.block').animate({'top': '-=50px'}, 'slow')
  }
  if(e.which === 83){
    $('.block').animate({'top': '+=50px'}, 'slow')
  }
  if(e.which === 68){
    $('.block').animate({'left': '+=50px'}, 'slow')
  }
  if(e.which === 65){
    $('.block').animate({'left': '-=50px'}, 'slow')
  }
});

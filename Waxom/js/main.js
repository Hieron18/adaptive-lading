$('.carousel').flickity({
  arrowShape: { 
  x0: 25,
  x1: 70, y1: 40,
  x2: 70, y2: 35,
  x3: 30
}
});
$('.header__burger').click(function(){
  $('.header__burger, .header__menu, .header__item').toggleClass('active');
  $('body').toggleClass('lock')
});


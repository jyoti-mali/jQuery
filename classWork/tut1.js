// var tag = document.getElementsByTagName('p');
// var p = tag[0];
// p.innerHTML ="hello";

$('#p').html('hello friends');

// $('#p').css('color', 'red');
// $('#p').css('fontSize', '80px');
// $('#p').css('backgroundColor', 'black');

// $('.div').css({
//   color: 'red',
//   fontSize: '40px',
//   backgroundColor: 'blue',
//   width: '100px',
//   height: '100px'
// });


//preventDefault for stop behaviour of element

$('a').on('click', function (event) {
  event.preventDefault();
  alert('congratulations');
});


var box = $('.box');
box.css({
  width: '100px',
  height: '100px',
  backgroundColor: 'red'
});

box.on('click', function () {
  var e = $(this);
 console.log(e);
//   e.width(e.width() + 10 + 'px');
$(this).width(this.width() + 10 + 'px');
// box.width(box.width() + 10 + 'px');
});



// ================ Toggle =============

$('.button').on('click', function () {
  $('#section').toggleClass('yellowbg');
  $('.button').toggleClass('greenbg');
  $('.toggle').toggleClass('greenborder')
  $('h1').toggleClass('greencolor');
  $('.button').toggleClass('right');
});
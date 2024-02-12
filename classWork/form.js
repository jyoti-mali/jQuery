

$(document).ready(function () {

  $('#btn').click(function () {
    let nm = $('#StudentName').val();
    let addr = $('.address').val();
    let pass = $('.password').val();
    let chk = $('.check').val();
    $(".printName").text(nm);
    // console.log(pass);
    $('.pwd').text(pass);
    $('.checkbox').text(chk);
    $('.addr').text(addr);
  });
});

/* toggle button js */

$(document).ready(function () {
  $('#button').click(function () {
    $(this).toggleClass('right');
    $('.col-md-6, .col-md-5').toggleClass('bg');
    $('.btn').toggleClass('btnchange');
  });
});
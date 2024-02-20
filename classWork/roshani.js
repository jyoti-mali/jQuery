$(document).ready(function(){
    $('#btn').click(function () {
   let nm = $('#studentName').val();
  let email = $('.email').val();
  let pass = $('.password').val();
  let check = $('#exampleCheck1').val();
   $('.printName').text(nm);
   $('.printemail').text(email);
   $('.printpass').text(pass);
   $('.printcheck').text(check);

  

    });
});
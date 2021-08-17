$(document).ready(function(){
    $('.navbar-toggle').on('click', function(e){
        $('.navbar-menu').toggleClass('show');
        e.preventDefault();
    });
  });
$(function() {

  // var feed = new Instafeed({
  //   get: 'user',
  //   userId: 1628553189,
  //   accessToken: '1628553189.5a10ffa.3a96a717093640f38f7c341853520693',
  //   resolution: 'low_resolution',
  //   after: function() {
     
  //     // $("#instagram_list").simplyScroll({
  //     //   speed: 1,
  //     //   frameRate: 20,
  //     //   orientation: 'horizontal',
  //     //   direction: 'forwards',
  //     //   customClass: 'instagram_scroller'
  //     // });

  //   }
  // });

  // feed.run();


  //$('.banner').unslider();

  var reset = function() {
    $('body').attr('data-page', '');
  }

  $('main nav button').on('click', function() {
    var page = $(this).data('page');
    if (page) $('body').attr('data-page', page);
  });

  $('button.photos').on('click', function() {
    $('main').addClass('show-photos');
    reset();
  });
  

});
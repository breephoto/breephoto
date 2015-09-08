$(function() {

  var feed = new Instafeed({
    get: 'user',
    userId: 346969893,
    accessToken: '346969893.5a10ffa.66a80f9eb7fa4f03b3841e5e0bffd923',
    resolution: 'low_resolution',
    sortBy: 'most-recent',
    template: '<a href="{{link}}" style="background-image: url({{image}})"></a>',
    limit: 60,
    // filter: function(image) {
    //   //return image.tags.indexOf('website') >= 0;
    // },
    after: function() {
     
      $("#instafeed").simplyScroll({
        speed: 1,
        frameRate: 20,
        orientation: 'horizontal',
        direction: 'forwards'
      });

    }
  });

  feed.run();

  var reset = function() {
    $('body').attr('data-page', '');
  }

  // Switching the "Pages" attribute on the body element
  $('main nav button').on('click', function() {
    var page = $(this).data('page');
    if (page) $('body').attr('data-page', page);
  });

  // When show photos is clicked
  $('button.photos').on('click', function() {
    $('main').addClass('show-photos');
    reset();
  });

  $('.content a.read-more').on('click', function(e) {
      e.preventDefault();
      $('body').addClass('expand-about');
  })

  // Some obscurity
  var email = 'breephoto' + '@' + 'yahoo.com';
  $('.contact-type.email').attr('href', 'mailto:' + email);
  $('.contact-type.email .title').text(email);
  
});
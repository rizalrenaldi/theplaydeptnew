Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
    $(window).scrollTop(0); // scroll to top here
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }

});


Barba.Dispatcher.on('newPageReady', function() {
  var token = 'BQBT8A5_ViAF07iKx8JIxVmQGp0DWcPgMP0rwmVyXvpmIdOw4CVhOfagdylFyHCZ5WXjOW7Uguuwx31Ebgsyo2z7rXs91hZEeQKSIlepStSYXAw5GbW77Q7bh3RzMAzGmD7pcNrhnNvElLzykzpk'

  var showData = $('#show-data');
  var song = $('#song').text();
  var artist = $('#artist').text();

  $.ajax({
    url: 'https://api.spotify.com/v1/search?q=track:"' + song + '"%20artist:"' + artist + '"&type=track',
    type: "GET",
    dataType: "json",
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  .then( function(oData) {
    console.log(oData);

    var trackName = oData.tracks.items[0].name;
    var albumName = oData.tracks.items[0].album.name;
    var albumImage = oData.tracks.items[0].album.images[1].url;
    var spotifyUrl = oData.tracks.items[0].external_urls.spotify;

    console.log(spotifyUrl);

    $('#album').append(albumName);
    $('#image').append('<img class="coverimage" src="' + albumImage + '">');
    $('#spotifyUrl').append('<a class="btn btn-success btn-lg" target="_blank" href="' + spotifyUrl + '">Listen to ' + trackName + ' on Spotify</a>');
  })
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};

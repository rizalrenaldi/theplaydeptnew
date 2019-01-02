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

  var albumName = oData.tracks.items[0].album.name;
  var albumImage = oData.tracks.items[0].album.images[1].url;

  $('#album').append(albumName);
  $('#image').append('<img src="' + albumImage + '">');
})

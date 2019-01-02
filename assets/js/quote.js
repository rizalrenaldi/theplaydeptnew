var quotes = [
  'Sometimes music is all you need.',
  'Where words fail, music speaks.',
  'My music will tell you more about me than I ever will.',
  'Music is the strongest form of magic.',
  'Without music, life would be a mistake.',
  'Good music does not have an expiration date.'
];

var lyrics = [
  'And if a double-decker bus crashes into us, to die by your side is such a heavenly way to die.',
  'You can choose a ready guide in some celestial voice. If you choose not to decide, you still have made a choice. You can choose from phantom fears and kindness that can kill. I will choose a path that\'s clear, I will choose freewill.',
  'Libraries gave us power, then work came and made us free. What price now for a shallow piece dignity.',
  'Blackbird singing in the dead of night. Take these broken wings and learn to fly.',
  'We want our film to be beautiful, not realistic.',
  'Make a new cult every day to suit your affairs.',
  'Being rebel is fine, but you go all the way to being brutal.',
  'Work it, make it, do it, makes us: harder, better, faster, stronger.',
  'Hello darkness my old friend, I\'ve come to talk with you again.',
  'I was happy in the haze of a druken hour, but heaven knows I\'m miserable now.',
  'Falling for the creep the body leech here he comes. Vicious hypnosis, a clenched fist saying it\'s wrong.',
  'So the choice I have made may seem strange to you. But who asked you, anyway? It\'s my life to wreck my own way.',
  'I believe I know you yet I don\'t truly know myself. I pray you won\'t feel as alone as I have felt'
];

$(document).ready(function() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    var lyric = lyrics[Math.floor(Math.random() * lyrics.length)];
    $("#quote").append(quote);
    $("#lyric").append('<p class="lead-serified">' + lyric + '</p>');
  });

const players = [];

function onYouTubeIframeAPIReady() {
  document.querySelectorAll("iframe").forEach((iframe, index) => {
    const player = new YT.Player(iframe, {
      events: {
        'onStateChange': function (event) {
          if (event.data == YT.PlayerState.PLAYING) {
            players.forEach((p, i) => {
              if (i !== index && p.getPlayerState() === YT.PlayerState.PLAYING) {
                p.pauseVideo();
              }
            });
          }
        }
      }
    });
    players.push(player);
  });
}

// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

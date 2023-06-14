let vid;
function setup() {
  noCanvas();

  vid = createVideo(
    ['KakaoTalk_20230503_175037270.mp4', 'KakaoTalk_20230503_175037270.ogv', 'KakaoTalk_20230503_175037270.webm'],
    vidLoad
  );

  vid.size(400, 400);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}
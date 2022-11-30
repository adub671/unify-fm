export const nowPlayingParser = async (nowPlayingUrl) => {
  try {
    const response = await fetch(nowPlayingUrl);
    const nowPlayingData = await response.json();
    let nowPlaying;
    if (response.ok) {
      if (nowPlayingUrl.startsWith("https://www.intergalactic.fm/")) {
        nowPlaying = nowPlayingData["title"];
      }
      if (
        nowPlayingUrl === "https://public.radio.co/stations/s3699c5e49/status"
      ) {
        nowPlaying = nowPlayingData["history"][0]["title"];
      }
      if (
        nowPlayingUrl === "https://kioskradiobxl.airtime.pro/api/live-info-v2"
      ) {
        nowPlaying = nowPlayingData.shows.current.name;
      }
      if (nowPlayingUrl.startsWith("https://azuracast")) {
        nowPlaying = nowPlayingData.now_playing.song.text;
      }
      if (nowPlayingUrl.startsWith("https://www.nts.live/")) {
        nowPlaying = nowPlayingData.results[0].now.broadcast_title;
      }
    } else {
      nowPlaying = "Now Playing Info Not Found";
    }

    return nowPlaying;
  } catch (error) {
    console.log("now playing parser error:", error);
    return "Now Playing Info Not Found";
  }
};

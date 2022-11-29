export const nowPlayingParser = async (nowPlayingUrl) => {
  const response = await fetch(nowPlayingUrl);
  const nowPlayingData = await response.json();
  let nowPlaying;
  if (nowPlayingUrl.startsWith("https://www.intergalactic.fm/")) {
    nowPlaying = nowPlayingData["title"];
  }
  if (nowPlayingUrl === "https://public.radio.co/stations/s3699c5e49/status") {
    nowPlaying = nowPlayingData["history"][0]["title"];
  }
  if (nowPlayingUrl === "https://kioskradiobxl.airtime.pro/api/live-info-v2") {
    nowPlaying = nowPlayingData.shows.current.name;
  }
  console.log(nowPlaying, typeof nowPlaying, "now playing parser");
  return nowPlaying;
};

export const nowPlayingParser = async (station) => {
  try {
    const response = await fetch(`/api/station/${station.id}/nowplaying`);
    console.log(response, "response parser");
    const nowPlayingData = await response.json();

    // console.log(nowPlayingData, "now playing data");
    // let nowPlaying;
    // if (response.ok) {
    //   if (nowPlayingUrl.startsWith("https://www.intergalactic.fm/")) {
    //     nowPlaying = nowPlayingData["title"];
    //   }
    //   if (
    //     nowPlayingUrl === "https://public.radio.co/stations/s3699c5e49/status"
    //   ) {
    //     nowPlaying = nowPlayingData["history"][0]["title"];
    //   }
    //   if (
    //     nowPlayingUrl === "https://kioskradiobxl.airtime.pro/api/live-info-v2"
    //   ) {
    //     nowPlaying = nowPlayingData.shows.current.name;
    //   }
    //   if (nowPlayingUrl.startsWith("https://azuracast.particle")) {
    //     nowPlaying =
    //       nowPlayingData.now_playing.streamer +
    //       " - " +
    //       nowPlayingData.now_playing.song.title;
    //   }
    //   if (nowPlayingUrl.startsWith("https://www.nts.live/")) {
    //     nowPlaying = nowPlayingData.results[0].now.broadcast_title;
    //   }
    //   if (
    //     nowPlayingUrl ===
    //     "https://api-1.dublab.com/wp-json/lazystate/v1/stream?"
    //   ) {
    //     nowPlaying = nowPlayingData["/stream"]["current"]["combo"];
    //   }
    //   if (nowPlayingUrl === "https://netilradio.airtime.pro/api/live-info") {
    //     nowPlaying =
    //       nowPlayingData.currentShow[0].name + nowPlayingData.current.name;
    //   }
    //   if (nowPlayingUrl === "https://balamii.airtime.pro/api/live-info") {
    //     nowPlaying = nowPlayingData.current.name;
    //   }
    //   if (
    //     nowPlayingUrl ===
    //     "https://rinse.fm/_next/data/Mp-cYr2q7zwYct9IIxLpp/en/schedule.json"
    //   ) {
    //     nowPlaying = nowPlayingData.pageProps.episodesData.entries.title;
    //   }
    //   if (nowPlayingUrl.startsWith("https://feed.tunein")) {
    //     nowPlaying = nowPlayingData.Header.Subtitle;
    //   }
    // } else {
    //   nowPlaying = "...";
    // }
    return nowPlayingData;
  } catch (error) {
    console.log("now playing parser error:", error);
    return "...";
  }
};

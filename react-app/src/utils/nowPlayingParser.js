export const nowPlayingParser = async (station) => {
  try {
    const response = await fetch(`/api/station/${station.id}/nowplaying`);
    const nowPlayingData = await response.json();

    return nowPlayingData;
  } catch (error) {
    console.log("now playing parser error:", error);
    return "Now Playing Data Not Available";
  }
};

import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AudioContext } from "../../context/Audio";
import { getStations } from "../../store/radioStations";
import { nowPlayingParser } from "../../utils/nowPlayingParser";
import DeleteStation from "../RadioStation/DeleteStation";
import EditStationButton from "../RadioStation/EditStationButton";
import FavoriteButton from "../RadioStation/FavoriteButton";
import User from "../User";
import "./StationPage.css";

const StationPage = () => {
  const dispatch = useDispatch();
  const { currentStation, setStation } = useContext(AudioContext);
  const [station, setPageStation] = useState({});
  const stations = useSelector((state) => state.stations);
  const user = useSelector((state) => state.session.user);
  const { stationId } = useParams();
  const [play, setPlay] = useState(false);
  const [nowPlaying, setNowPlaying] = useState("");

  const handlePlay = () => {
    setStation(station);
    setPlay(true);
  };

  useEffect(() => {
    (async () => {
      dispatch(getStations());
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const playing = await nowPlayingParser(station?.now_playing_url);
      setNowPlaying(playing);
    })();
  }, [station]);

  useEffect(() => {
    setPageStation(stations[stationId]);
  }, [stations]);

  return (
    <>
      <div>
        <img
          className="station-page-image"
          src={station?.image_url}
          alt="station cards"
        />
        <div
          className="station-page-play-button-container"
          onClick={handlePlay}
        >
          {" "}
          {currentStation === station ? (
            <i class="fa-solid fa-pause station-page-play-button"> </i>
          ) : (
            <i class="fa-solid fa-play station-page-play-button"></i>
          )}
        </div>
      </div>
      <div className="station-page-station-name">{station?.name}</div>
      {nowPlaying.length > 0 && <div> Now Playing: {nowPlaying}</div>}
      <div
        className="station-page-link"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("Link Copied To Clipboard");
        }}
      >
        <span className="station-page-link-label">Share </span>
        <i class="fa-solid fa-share station-page-link-icon"></i>
      </div>
      {/* <a href={station?.chat_url} target="_blank" rel="noreferrer"> */}
      {station?.chat_url && (
        <div
          onClick={() => {
            window.open(station?.chat_url, "newwindow", "width=600,height=400");
          }}
          className="station-page-link"
        >
          <span className="station-page-link-label">Chat </span>
          <i class="fas fa-comments station-page-link-icon"></i>
        </div>
      )}
      {/* </a> */}
      <div className="station-page-link">
        <span className="station-page-link-label">Favorite </span>
        <FavoriteButton station={station} />
      </div>
      {station?.admin_id === user?.id && (
        <div className="station-page-link">
          <span className="station-page-link-label">Delete </span>
          <DeleteStation station={station} redirect={true} />
        </div>
      )}
      {station?.admin_id === user?.id && (
        <div className="station-page-link">
          <span className="station-page-link-label">Edit </span>
          <EditStationButton station={station} />
        </div>
      )}
    </>
  );
};

export default StationPage;

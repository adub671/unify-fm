import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AudioContext } from "../../context/Audio";
import { getStations } from "../../store/radioStations";
import FavoriteButton from "../RadioStation/FavoriteButton";
import "./StationPage.css";

const StationPage = () => {
  const dispatch = useDispatch();
  const { setStation } = useContext(AudioContext);
  const handlePlay = () => {
    setStation(station.stream_url);
  };
  const [station, setPageStation] = useState({});

  const stations = useSelector((state) => state.stations);

  const { stationId } = useParams();
  useEffect(() => {
    (async () => {
      dispatch(getStations());
    })();
  }, [dispatch]);
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
          <i class="fa-solid fa-play station-page-play-button"></i>
        </div>
      </div>
      <div className="station-page-station-name">{station?.name}</div>
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
      <div
        onClick={() => {
          window.open(station?.chat_url, "newwindow", "width=600,height=400");
        }}
        className="station-page-link"
      >
        <span className="station-page-link-label">Chat </span>
        <i class="fas fa-comments station-page-link-icon"></i>
      </div>
      {/* </a> */}
      <div className="station-page-link">
        <span className="station-page-link-label">Favorite </span>
        <FavoriteButton station={station} />
      </div>
    </>
  );
};

export default StationPage;

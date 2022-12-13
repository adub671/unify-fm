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
  const { currentStation, setStation, isPlaying, player } =
    useContext(AudioContext);
  const [station, setPageStation] = useState({});
  const stations = useSelector((state) => state.stations);
  const user = useSelector((state) => state.session.user);
  const [imageError, setImageError] = useState(false);
  const { stationId } = useParams();
  const [play, setPlay] = useState(false);
  const [nowPlaying, setNowPlaying] = useState("");

  const handlePlay = () => {
    setStation(station);
    if (!play) {
      setPlay(true);
      player.current.audio.current.play();
    } else {
      setPlay(false);
      player.current.audio.current.pause();
    }
  };

  useEffect(() => {
    (async () => {
      dispatch(getStations());
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const playing = await nowPlayingParser(station);
      setNowPlaying(playing);
    })();
  }, [station, nowPlaying]);

  useEffect(() => {
    setPageStation(stations[stationId]);
  }, [stations, stationId]);

  //Determines Play or Pause Image
  useEffect(() => {
    if (currentStation === station) {
      if (isPlaying) {
        setPlay(true);
      } else {
        setPlay(false);
      }
    } else {
      setPlay(false);
    }
  }, [currentStation, isPlaying, station]);

  return (
    <>
      <div className="station-page-container">
        <div className="station-page-image-container">
          {!imageError ? (
            <img
              className="station-page-image"
              src={station?.image_url}
              alt="station cards"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="station-page-image-default">
              <span>{station?.name}</span>
            </div>
          )}
        </div>
        <div className="station-page-info-container">
          <div className="station-page-station-name">{station?.name}</div>
          {nowPlaying?.length > 0 && <div> Now Playing: {nowPlaying}</div>}
          <div
            className="station-page-play-button-container"
            onClick={handlePlay}
          >
            {" "}
            {play ? (
              <i className="fa-solid fa-pause station-page-play-button"> </i>
            ) : (
              <i className="fa-solid fa-play station-page-play-button"></i>
            )}
          </div>
        </div>
        <div className="station-page-button-container">
          <div
            className="station-page-link"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link Copied To Clipboard");
            }}
          >
            <span className="station-page-link-label">Share </span>
            <i className="fa-solid fa-share station-page-link-icon"></i>
          </div>
          {/* <a href={station?.chat_url} target="_blank" rel="noreferrer"> */}
          {station?.chat_url && (
            <div
              onClick={() => {
                window.open(
                  station?.chat_url,
                  "newwindow",
                  "width=600,height=400"
                );
              }}
              className="station-page-link"
            >
              <span className="station-page-link-label">Chat </span>
              <i className="fas fa-comments station-page-link-icon"></i>
            </div>
          )}
          {/* </a> */}

          <FavoriteButton station={station} isButton={true} />

          {station?.admin_id === user?.id && (
            <DeleteStation station={station} redirect={true} />
          )}
          {station?.admin_id === user?.id && (
            <EditStationButton station={station} />
          )}
          {station?.website_url && (
            <a href={station?.website_url}>
              <div className="station-page-link">
                <span className="station-page-link-label">Website </span>
                <i className="fa-solid fa-globe station-page-link-icon"></i>
              </div>
            </a>
          )}
          {station?.additional_link_1 && (
            <a href={station?.additional_link_1}>
              <div className="station-page-link">
                <span className="station-page-link-label">
                  {station?.additional_label_1}{" "}
                </span>
                <i className="fa-solid fa-link station-page-link-icon"></i>
              </div>
            </a>
          )}
          {station?.additional_link_2 && (
            <a href={station?.additional_link_2}>
              <div className="station-page-link">
                <span className="station-page-link-label">
                  {station?.additional_label_2}{" "}
                </span>
                <i className="fa-solid fa-link station-page-link-icon"></i>
              </div>
            </a>
          )}
          {station?.additional_link_3 && (
            <a href={station?.additional_link_3}>
              <div className="station-page-link">
                <span className="station-page-link-label">
                  {station?.additional_label_3}{" "}
                </span>
                <i className="fa-solid fa-link station-page-link-icon"></i>
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="station-page-bottom-line"></div>
    </>
  );
};

export default StationPage;

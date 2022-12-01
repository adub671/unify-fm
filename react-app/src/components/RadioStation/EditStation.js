import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AudioContext } from "../../context/Audio";
import { editStation } from "../../store/radioStations";

const EditStation = ({ station, setShowModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [name, setName] = useState(station?.name);
  const [stream_url, setStreamUrl] = useState(station?.stream_url);
  const [image_url, setImageUrl] = useState(station?.image_url);
  const [chat_url, setChatUrl] = useState(station?.chat_url);
  const [website_url, setWebsiteUrl] = useState(station?.website_url);
  const [calendar_url, setCalendarUrl] = useState(station?.calendar_url);
  const [additional_link_1, setLink1] = useState(station?.additional_link_1);
  const [additional_link_2, setLink2] = useState(station?.additional_link_2);
  const [additional_link_3, setLink3] = useState(station?.additional_link_3);
  const [additional_label_1, setLabel1] = useState(station?.additional_label_1);
  const [additional_label_2, setLabel2] = useState(station?.additional_label_2);
  const [additional_label_3, setLabel3] = useState(station?.additional_label_3);
  const [errors, setErrors] = useState([]);
  const { setStation, currentStation } = useContext(AudioContext);

  useEffect(() => {
    setName(station?.name);
    setStreamUrl(station?.stream_url);
    setImageUrl(station?.image_url);
    setChatUrl(station?.chat_url);
    setWebsiteUrl(station?.website_url);
    setCalendarUrl(station?.calendar_url);
    setLink1(station?.additional_link_1);
    setLink2(station?.additional_link_2);
    setLink3(station?.additional_link_3);
    setLabel1(station?.additional_label_1);
    setLabel2(station?.additional_label_2);
    setLabel3(station?.additional_label_3);
  }, [station]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: station?.id,
      name,
      admin_id: user?.id,
      stream_url,
      image_url,
      chat_url,
      website_url,
      calendar_url,
      additional_link_1,
      additional_link_2,
      additional_link_3,
      additional_label_1,
      additional_label_2,
      additional_label_3,
    };
    const response = await dispatch(editStation(payload));

    if (response.errors) {
      const backendErrs = Object.entries(response.errors);
      setErrors(backendErrs);
    } else {
      setShowModal(false);
    }
    if (station.id === currentStation.id) {
      setStation(response);
    }
  };

  return (
    <>
      <h1>Edit A Station</h1>
      <div className="validation-errors">
        {errors?.length > 0 &&
          errors?.map((error) => (
            <div>
              {error[0]} : {error[1]}
            </div>
          ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Station Name: </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Stream URL: </label>
          <input
            value={stream_url}
            onChange={(e) => {
              setStreamUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            value={image_url}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Chat URL: </label>
          <input
            value={chat_url}
            onChange={(e) => {
              setChatUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Website URL: </label>
          <input
            value={website_url}
            onChange={(e) => {
              setWebsiteUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Calendar URL: </label>
          <input
            value={calendar_url}
            onChange={(e) => {
              setCalendarUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Label: </label>
          <input
            value={additional_label_1}
            onChange={(e) => {
              setLabel1(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Link: </label>
          <input
            value={additional_link_1}
            onChange={(e) => {
              setLink1(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Label: </label>
          <input
            value={additional_label_2}
            onChange={(e) => {
              setLabel2(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Link: </label>
          <input
            value={additional_link_2}
            onChange={(e) => {
              setLink2(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Label: </label>
          <input
            value={additional_label_3}
            onChange={(e) => {
              setLabel3(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Link: </label>
          <input
            value={additional_link_3}
            onChange={(e) => {
              setLink3(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Create Station"></input>
      </form>{" "}
    </>
  );
};

export default EditStation;

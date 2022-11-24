import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newStation } from "../../store/radioStations";

const CreateStation = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const user = useSelector((state) => state.session.user);
  //   const [adminId, setAdminId] = useState()
  const [stream_url, setStreamUrl] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [chat_url, setChatUrl] = useState("");
  const [website_url, setWebsiteUrl] = useState("");
  const [calendar_url, setCalendarUrl] = useState("");
  const [additional_link_1, setLink1] = useState("");
  const [additional_link_2, setLink2] = useState("");
  const [additional_link_3, setLink3] = useState("");
  const [additional_label_1, setLabel1] = useState("");
  const [additional_label_2, setLabel2] = useState("");
  const [additional_label_3, setLabel3] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      admin_id: user.id,
      stream_url,
      image_url,
      website_url,
      calendar_url,
      additional_link_1,
      additional_link_2,
      additional_link_3,
      additional_label_1,
      additional_label_2,
      additional_label_3,
    };
    console.log(payload, "payload");
    await dispatch(newStation(payload));
  };

  return (
    <>
      <h1>Create A Station</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Station Name: </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Stream URL: </label>
          <input
            onChange={(e) => {
              setStreamUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Chat URL: </label>
          <input
            onChange={(e) => {
              setChatUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Website URL: </label>
          <input
            onChange={(e) => {
              setWebsiteUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Calendar URL: </label>
          <input
            onChange={(e) => {
              setCalendarUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Label: </label>
          <input
            onChange={(e) => {
              setLabel1(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Link: </label>
          <input
            onChange={(e) => {
              setLink1(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Label: </label>
          <input
            onChange={(e) => {
              setLabel2(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Link: </label>
          <input
            onChange={(e) => {
              setLink2(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Label: </label>
          <input
            onChange={(e) => {
              setLabel3(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Additional Link: </label>
          <input
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

export default CreateStation;

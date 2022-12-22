import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newStation } from "../../store/radioStations";
import ImageUpload from "../AWS/ImageUpload";

const CreateStation = ({ setShowModal }) => {
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
  const [now_playing_url, setNowPlayingUrl] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const errs = [];
    if (name?.length > 100) {
      errs.push("Station Name Must Be Less Than 100 Characters");
    }



    const payload = {
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
      now_playing_url,
    };
    const response = await dispatch(newStation(payload));
    if (response.errors) {
      const backendErrs = Object.entries(response.errors);
      setErrors(backendErrs);
    } else {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-title">Create A Station</div>
        <div className="error-validation">
          {errors?.length > 0 &&
            errors?.map((error) => (
              <div>
                {error[0]} : {error[1]}
              </div>
            ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <label>*Station Name: </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>*Stream URL: </label>
            <input
              onChange={(e) => {
                setStreamUrl(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>*Image URL: </label>
            <input
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </div>


          <div className="form-fields">
            <label>Chat URL: </label>
            <input
              onChange={(e) => {
                setChatUrl(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>Website URL: </label>
            <input
              onChange={(e) => {
                setWebsiteUrl(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>Calendar URL: </label>
            <input
              onChange={(e) => {
                setCalendarUrl(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>Now Playing URL: </label>
            <input
              onChange={(e) => {
                setNowPlayingUrl(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>Additional Label 1: </label>
            <input
              onChange={(e) => {
                setLabel1(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>Additional Link 1: </label>
            <input
              onChange={(e) => {
                setLink1(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>Additional Label 2: </label>
            <input
              onChange={(e) => {
                setLabel2(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>Additional Link 2: </label>
            <input
              onChange={(e) => {
                setLink2(e.target.value);
              }}
            />
          </div>
          {/* <div className="form-fields">
            <label>Additional Label 3: </label>
            <input
              onChange={(e) => {
                setLabel3(e.target.value);
              }}
            />
          </div> */}
          {/* <div className="form-fields">
            <label>Additional Link 3: </label>
            <input
              onChange={(e) => {
                setLink3(e.target.value);
              }}
            />
          </div> */}
          <input
            type="submit"
            value="Create Station"
            className="form-submit"
          ></input>
        </form>

        <div className="required-fields">* indicates field is required</div>
        <ImageUpload />
      </div>
    </>
  );
};

export default CreateStation;

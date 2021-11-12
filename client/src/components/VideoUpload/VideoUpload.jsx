import React from "react";
import Nav from "../Nav/Nav";
import "./VideoUpload.scss"
import { Link } from "react-router-dom";

function VideoUpload(props) {
  const handleClick = (event) => {
    alert("Video Uploaded!");
  };

  return (
    <>
      <Nav />
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__block">
        <div className="upload__subblock">
          <div className="upload__subtitle">VIDEO THUMBNAIL</div>
          <div className="upload__thumbnail"></div>
        </div>
        <div className="upload__subblock">
          <form action="" method="post" className="upload__form" id="form">
            <label className="upload__form-lable" htmlFor="video-title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__form-field upload__form-field--small"
              type="text"
              name="video-title"
              id="video-title"
              placeholder="Add a title to your video"
              required=""
            ></input>
            <label className="upload__form-lable" htmlFor="video-description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__form-field"
              type="text"
              name="video-description"
              id="video-description"
              placeholder="Add a description to your video"
              required=""
            ></textarea>
          </form>
        </div>
      </div>
      <div className="upload__form-buttons">
        <Link to="/">
          <button className="upload__form-submit" type="submit" form="form" onClick={handleClick}>
            PUBLISH
          </button>
        </Link>
        <Link to="/">
          <button className="upload__form-cancel" type="button" form="form">
            CANCEL
          </button>
        </Link>
        
      </div>
    </>
  );
}

export default VideoUpload;

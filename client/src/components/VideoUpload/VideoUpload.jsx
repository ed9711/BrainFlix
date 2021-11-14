import React from "react";
import Nav from "../Nav/Nav";
import "./VideoUpload.scss"
import { Link } from "react-router-dom";
import axios from "axios";

function VideoUpload(props) {
  const handleSubmit = (e, props) => {
    e.preventDefault();
    axios.post("http://localhost:8080/videos/", {
      title: e.target.title.value,
      description: e.target.description.value,
      channel: e.target.title.value,
      image: "http://localhost:8080/images/image0.jpeg"
    })
    .then(response => {
        alert("Video Uploaded!");
        props.history.push('/');
      }
    );
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
          <form action="#" method="post" className="upload__form" id="form" onSubmit={(event) => handleSubmit(event, props)}>
            <label className="upload__form-lable" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__form-field upload__form-field--small"
              type="text"
              name="title"
              id="title"
              placeholder="Add a title to your video"
              required=""
            ></input>
            <label className="upload__form-lable" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__form-field"
              type="text"
              name="description"
              id="description"
              placeholder="Add a description to your video"
              required=""
            ></textarea>
          </form>
        </div>
      </div>
      <div className="upload__form-buttons">
          <button className="upload__form-submit" type="submit" form="form" >
            PUBLISH
          </button>
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

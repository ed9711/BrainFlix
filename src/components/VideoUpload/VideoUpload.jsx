import React from "react";
import Nav from "../nav/nav";

function VideoUpload(props) {
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
          <form action="" method="post"></form>
        </div>
      </div>
      

    </>
  );
}

export default VideoUpload;

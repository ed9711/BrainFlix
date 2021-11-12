import "./VideoPlayer.scss";

function VideoPlayer(props) {
  return (
    <div className="video__container">
      <video
        className="video__player"
        poster={props.videoDetails.image}
        controls
      ></video>
    </div>
  );
}
export default VideoPlayer;

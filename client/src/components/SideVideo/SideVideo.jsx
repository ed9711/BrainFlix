import "./SideVideo.scss";
import SingleVideo from "../SingleVideo/SingleVideo";

function SideVideo(props) {
  return (
    <div className="side-videos">
      <div className="side-videos__title">NEXT VIDEOS</div>
      {props.videos.map((video) => (
        <SingleVideo key={video.id} video={video} />
      ))}
    </div>
  );
}
export default SideVideo;

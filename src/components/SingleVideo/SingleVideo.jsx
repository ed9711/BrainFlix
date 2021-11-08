import { Link } from "react-router-dom";
import "./SingleVideo.scss";

function SingleVideo(props) {
  return (
    <Link to={"/video/" + props.video.id} className="side-videos__block">
      <div className="side-videos__container">
        <img
          className="side-videos__img"
          src={props.video.image}
          alt="video thumbnail"
        />
      </div>
      <div className="side-videos__subblock">
        <div className="side-videos__name">{props.video.title}</div>
        <div className="side-videos__channel">{props.video.channel}</div>
      </div>
    </Link>
  );
}
export default SingleVideo;

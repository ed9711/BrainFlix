import "./VideoDetails.scss";
import Comments from "../Comments/Comments";
import { timeStampToTime } from "../../utils";

function VideoDetails(props) {
  return (
    <section className="video__details">
      <div className="video__title">{props.videoDetails.title}</div>
      <div className="video__body">
        <div className="video__creator">
          <div className="video__creator-channel">
            By {props.videoDetails.channel}
          </div>
          <div className="video__creator-date">
            {timeStampToTime(props.videoDetails.timestamp)}
          </div>
        </div>
        <div className="video__stats">
          <div className="video__views">{props.videoDetails.views}</div>
          <div className="video__likes">{props.videoDetails.likes}</div>
        </div>
      </div>
      <p className="video__description">{props.videoDetails.description}</p>
      <Comments comments={props.videoDetails.comments} />
    </section>
  );
}
export default VideoDetails;

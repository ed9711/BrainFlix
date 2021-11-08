import { timeStampToTime } from "../../utils";
import "./Comment.scss";

function Comment(props) {
  return (
    <div className="comments__block">
      <div className="comments__avatar comments__avatar--empty"></div>
      <div className="comments__comment">
        <div className="comments__comment-name">{props.comment.name}</div>
        <div className="comments__comment-time">
          {timeStampToTime(props.comment.timestamp)}
        </div>
        <p className="comments__comment-text">{props.comment.comment}</p>
      </div>
    </div>
  );
}
export default Comment;

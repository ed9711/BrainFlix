import Comment from "../Comment/Comment";
import "./Comments.scss";

function Comments(props) {
  return (
    <div className="comments">
      <div className="comments__title">{props.comments.length} Comments</div>
      <div className="comments__block comments__block--head">
        <div className="comments__avatar"></div>
        <div className="comments__subblock">
          <form action="" method="get" className="comments__form" id="form">
            <label className="comments__form-lable" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comments__form-field"
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              required=""
            ></textarea>
          </form>
          <button className="comments__form-submit" type="button" form="form">
            COMMENT
          </button>
        </div>
      </div>
      <div className="comments__all">
        {props.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
export default Comments;

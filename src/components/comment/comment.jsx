import { Component } from "react";
import { timeStampToTime } from "../../utils";
import './comment.scss';

class Comment extends Component {
    render(){
        return(
            <div className="comments__block">
                <div className="comments__avatar comments__avatar--empty"></div>
                <div className="comments__comment">
                    <div className="comments__comment-name">{this.props.comment.name}</div>
                    <div className="comments__comment-time">{timeStampToTime(this.props.comment.timestamp)}</div>
                    <p className="comments__comment-text">{this.props.comment.comment}</p>
                </div>
            </div>
        );
    };
}
export default Comment;
import { Component } from "react";
import './comment.scss';

class Comment extends Component {
    timeStampToTime = (timeStamp) => {
        const date = new Date(timeStamp);
        const time = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        return time;
    };
    render(){
        return(
            <div className="comments__block">
                <div className="comments__avatar comments__avatar--empty"></div>
                <div className="comments__comment">
                    <div className="comments__comment-name">{this.props.comment.name}</div>
                    <div className="comments__comment-time">{this.timeStampToTime(this.props.comment.timestamp)}</div>
                    <p className="comments__comment-text">{this.props.comment.comment}</p>
                </div>
            </div>
        );
    };
}
export default Comment;
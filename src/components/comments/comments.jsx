import { Component } from 'react';
import './comments.scss';

class Comments extends Component {
    render(){
        return(
            <div className="comments">
                <div className="comments__title">{this.props.comments.length} Comments</div>
                <div className="comments__block">
                    <div className="comments__avatar"></div>
                    <div className="comments__subblock">
                        <form action="" method="get" className="comments__form" id="form">
                            <label className="comments__form-lable" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea className="comments__form-field" type="text" name="comment" id="comment" placeholder="Add a new comment" required=""></textarea>
                        </form>
                        <button className="comments__form-submit" type="submit" form="form">COMMENT</button>
                    </div>
                </div>
            </div>
        );
    };
}
export default Comments;
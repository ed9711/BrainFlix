import { Component } from "react";
import { Link } from "react-router-dom";
import './single-video.scss';

class SingleVideo extends Component {
    render(){
        return(
            <Link to={"/video/"+this.props.video.id} className="side-videos__block" >
                <div className="side-videos__container">
                    <img className="side-videos__img" src={this.props.video.image} alt="video thumbnail" />
                </div>
                <div className="side-videos__subblock">
                    <div className="side-videos__name">{this.props.video.title}</div>
                    <div className="side-videos__channel">{this.props.video.channel}</div>
                </div>
            </Link>
        );
    };
}
export default SingleVideo;
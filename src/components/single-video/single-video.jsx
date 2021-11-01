import { Component } from "react";
import './single-video.scss';

class SingleVideo extends Component {
    render(){
        return(
            <div className="side-videos__block" onClick={() => this.props.onClick(this.props.video.id)}>
                <div className="side-videos__container">
                    <img className="side-videos__img" src={this.props.video.image} alt="video thumbnail" />
                </div>
                <div className="side-videos__subblock">
                    <div className="side-videos__name">{this.props.video.title}</div>
                    <div className="side-videos__channel">{this.props.video.channel}</div>
                </div>
            </div>
        );
    };
}
export default SingleVideo;
import { Component } from "react";
import './video-details.scss';

class VideoDetails extends Component {
    timeStampToTime = (timeStamp) => {
        const date = new Date(timeStamp);
        const time = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        return time;
    };
    render(){
        return(
            <div className="video__details">
                <div className="video__title">{this.props.videoDetails.title}</div>
                <div className="video__body">
                    <div className="video__creator">
                        <div className="video__creator-channel">By {this.props.videoDetails.channel}</div>
                        <div className="video__creator-date">{this.timeStampToTime(this.props.videoDetails.timestamp)}</div>
                    </div>
                    <div className="video__stats">
                        <div className="video__views">{this.props.videoDetails.views}</div>
                        <div className="video__likes">{this.props.videoDetails.likes}</div>
                    </div>
                </div>
                <p className="video__description">{this.props.videoDetails.description}</p>
            </div>
        );
    };
}
export default VideoDetails;
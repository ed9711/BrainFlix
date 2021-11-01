import { Component } from "react";
import './video-player.scss';

class VideoPlayer extends Component {

    render(){
        return( 
        <div className="video__container">
          <video className="video__player" poster={this.props.videoDetails.image} controls></video>
        </div>
        );
    };
}
export default VideoPlayer;
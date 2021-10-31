import { Component } from "react";
import './video-player.scss';

class VideoPlayer extends Component {

    render(){
        return( 
        <video className="video__player" poster={this.props.videoDetails.image} controls>
            
        </video>
        );
    };
}
export default VideoPlayer;
import { Component } from "react";
import './side-video.scss';
import SingleVideo from "../single-video/single-video";

class SideVideo extends Component {
    render(){
        return(
            <div className="side-videos">
                <div className="side-videos__title">NEXT VIDEOS</div>
                {this.props.videos.map(video => <SingleVideo key={video.id} video={video}/>)}
            </div>
        );
    };
}
export default SideVideo;
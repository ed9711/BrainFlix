import './App.scss';
import Nav from "./components/nav/nav";
import VideoPlayer from "./components/video-player/video-player";
import videosJSON from "./Data/videos.json";
import videoDetailsJSON from "./Data/video-details.json";
import VideoDetails from "./components/video-details/video-details"
import { Component } from 'react';

class App extends Component {
  state = {videos:videosJSON, selectedVideo:videoDetailsJSON[0]};

  render(){
    return (
      <>
      <Nav/>
      <div className="video">
        <VideoPlayer videoDetails={this.state.selectedVideo}/>
        <div className="video__block">
          <VideoDetails videoDetails={this.state.selectedVideo}/>
        </div>
      </div>
      </>
    );
  };
}

export default App;

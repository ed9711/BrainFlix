import './App.scss';
import Nav from "./components/nav/nav";
import VideoPlayer from "./components/video-player/video-player";
import videos from "./Data/videos.json";
import videoDetails from "./Data/video-details.json";
import { Component } from 'react';

class App extends Component {
  state = {videos:videos, selectedVideo:videoDetails[0]};

  render(){
    return (
      <>
      <Nav/>
      <div className="video">
        <VideoPlayer videoDetails={this.state.selectedVideo}/>
      </div>
      </>
    );
  };
}

export default App;

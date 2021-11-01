import './App.scss';
import Nav from "./components/nav/nav";
import VideoPlayer from "./components/video-player/video-player";
import videosJSON from "./Data/videos.json";
import videoDetailsJSON from "./Data/video-details.json";
import VideoDetails from "./components/video-details/video-details"
import SideVideo from './components/side-video/side-video';
import { Component } from 'react';

class App extends Component {
  state = {videos:videosJSON, selectedVideo:videoDetailsJSON[0]};

  render(){
    return (
      <>
      <Nav/>
      <section className="video">
        <VideoPlayer videoDetails={this.state.selectedVideo}/>
        <section className="video__block">
          <VideoDetails videoDetails={this.state.selectedVideo}/>
          <SideVideo videos={this.state.videos}/>
        </section>
      </section>
      </>
    );
  };
}

export default App;

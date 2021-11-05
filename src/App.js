import './App.scss';
import Nav from "./components/nav/nav";
import VideoPlayer from "./components/video-player/video-player";
import videosJSON from "./Data/videos.json";
import videoDetailsJSON from "./Data/video-details.json";
import VideoDetails from "./components/video-details/video-details"
import SideVideo from './components/side-video/side-video';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {videos:videosJSON, selectedVideo:videoDetailsJSON[0]};

  onClick = (id) => {
    this.setState({selectedVideo: videoDetailsJSON.find(video => id===video.id)})
  };

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={<App/>}/>
          <Route/>
          <Route/>
        </Switch>
        <Nav/>
        <section className="video">
          <VideoPlayer videoDetails={this.state.selectedVideo}/>
          <section className="video__block">
            <VideoDetails videoDetails={this.state.selectedVideo}/>
            <SideVideo 
              videos={this.state.videos.filter(video => video.id!==this.state.selectedVideo.id)}
              onClick={this.onClick}
            />
          </section>
        </section>
      </BrowserRouter>
    );
  };
}

export default App;

import "./MainPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import SideVideo from "../../components/SideVideo/SideVideo";
import { Component } from "react";
import axios from "axios";

class MainPage extends Component {
  state = { videos: null, selectedVideo: null };

  setUpMainPage = () => {
    const newState = { videos: [], selectedVideo: {} };
    const promise = axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        newState.videos = response.data;
        const currentId =
          this.props.match.params.videoId || response.data[0].id;
        return currentId;
      }).catch(error => console.log(error));
    promise.then((response) =>
      axios.get("http://localhost:8080/videos/" + response).then((response) => {
        newState.selectedVideo = response.data;
        this.setState(newState);
      }).catch(error => console.error(error))
    );
  };
  componentDidMount() {
    this.setUpMainPage();
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      // check if state is empty 
      if (!this.state.videos){
        this.setUpMainPage();
      } else {
        const currenId =
          this.props.match.params.videoId || this.state.videos[0].id;
        axios.get("http://localhost:8080/videos/" + currenId).then((response) => {
          this.setState({ ...this.state, selectedVideo: response.data });
        }).catch(error => console.error(error));
      }
    }
  }

  render() {
    if (!this.state.selectedVideo || !this.state.videos) {
      return <></>;
    }
    return (
      <>
        <section className="video">
          <VideoPlayer videoDetails={this.state.selectedVideo} />
          <section className="video__block">
            <VideoDetails videoDetails={this.state.selectedVideo} />
            <SideVideo
              videos={this.state.videos.filter(
                (video) => video.id !== this.state.selectedVideo.id
              )}
            />
          </section>
        </section>
      </>
    );
  }
}

export default MainPage;

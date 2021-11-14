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
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        newState.videos = response.data;
        const currentId =
          this.props.match.params.videoId || response.data[0].id;
        axios
          .get(
            "http://localhost:8080/videos/" + currentId
          )
          .then((response) => {
            newState.selectedVideo = response.data;
            this.setState(newState);
          });
      });
  };
  componentDidMount() {
      this.setUpMainPage();
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
        if (!this.props.match.params.videoId){
            this.setUpMainPage();
        } else {
            const currenId = this.props.match.params.videoId || this.state.videos[0].id;
            axios
        .get("http://localhost:8080/videos/" + currenId)
        .then((response) => {
            this.setState({ ...this.state, selectedVideo: response.data });
        });
        }
    }
  }

  render() {
    if (!this.state.selectedVideo || !this.state.videos) {
      return (
        <>
        </>
      );
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

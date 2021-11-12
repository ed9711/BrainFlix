import "./MainPage.scss";
import Nav from "../Nav/Nav";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";
import SideVideo from "../SideVideo/SideVideo";
import { Component } from "react";
import axios from "axios";
import { apiKey } from "../../utils";

class MainPage extends Component {
  state = { videos: null, selectedVideo: null };

  setUpMainPage = () => {
    const newState = { videos: [], selectedVideo: {} };
    axios
      .get("https://project-2-api.herokuapp.com/videos" + apiKey)
      .then((response) => {
        newState.videos = response.data;
        const currentId =
          this.props.match.params.videoId || response.data[0].id;
        axios
          .get(
            "https://project-2-api.herokuapp.com/videos/" + currentId + apiKey
          )
          .then((response) => {
            newState.selectedVideo = response.data;
            this.setState(newState);
            // console.log("mainpage mounted");
          });
      });
  };
  componentDidMount() {
      this.setUpMainPage();
  }

  componentDidUpdate(prevProps) {
    // console.log("main did update");
    window.scrollTo(0, 0);
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
        // console.log(prevProps.match.params.videoId, this.props.match.params.videoId);

        if (!this.props.match.params.videoId){
            this.setUpMainPage();
        } else {
            const currenId = this.props.match.params.videoId || this.state.videos[0].id;
            axios
        .get("https://project-2-api.herokuapp.com/videos/" + currenId + apiKey)
        .then((response) => {
            this.setState({ ...this.state, selectedVideo: response.data });
        });
        }
    }
  }

  render() {
    // console.log("main rendered");
    // console.log(this.state);
    if (!this.state.selectedVideo || !this.state.videos) {
      return (
        <>
          <Nav />
        </>
      );
    }
    return (
      <>
        <Nav />
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

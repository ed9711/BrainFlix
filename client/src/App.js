import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import VideoUpload from "./components/VideoUpload/VideoUpload";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/videos/:videoId" component={MainPage} />
        <Route path="/upload" exact component={VideoUpload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

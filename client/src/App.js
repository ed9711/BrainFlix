import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MainPage from "./pages/MainPage/MainPage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/videos/:videoId" component={MainPage} />
        <Route path="/upload" component={VideoUpload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

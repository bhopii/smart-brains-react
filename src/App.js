import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Sigin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Particles from "react-particles-js";
import { useState } from "react";
import Clarifai from "clarifai";

const API_KEY = "4b3bab39a4b24a9da9213efbf7097c5f";

const app = new Clarifai.App({
  apiKey: API_KEY,
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500,
      },
    },
  },
};

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    return {
      leftCol: clarifaiFace.left_col * 100,
      topRow: clarifaiFace.top_row * 100,
      rightCol: 100 * (1 - clarifaiFace.right_col),
      bottomRow: 100 * (1 - clarifaiFace.bottom_row),
    };
  };

  const displayFaceBox = (box) => {
    console.log(box);
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, imageUrl)
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.error(err));
  };

  const onRouteChange = (location) => {
    console.log("route location ============", location);
    if (location === "signout") {
      setIsSignedIn(false);
    } else if (location === "home") {
      setIsSignedIn(true);
    }
    setRoute(location);
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      ) : route === "register" ? (
        <Register onRouteChange={onRouteChange} />
      ) : (
        <Sigin onRouteChange={onRouteChange} />
      )}
    </div>
  );
}

export default App;

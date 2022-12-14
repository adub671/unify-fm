import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import FavoriteStations from "./components/RadioStation/FavoriteStations";
import "react-h5-audio-player/lib/styles.css";
import AppAudioPlayer from "./components/AudioPlayer/AudioPlayer";
import AllStationsCarousel from "./components/RadioStation/AllStationsCarousel";
import FavoriteStationsCarousel from "./components/RadioStation/FavoriteStationsCarousel";
import StationPage from "./components/StationPage";
import AllStations from "./components/AllStations/AllStations";
import "./index.css";
import "./components/auth/Forms.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className="page-container">
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <ProtectedRoute path="/favorites" exact={true}>
            <FavoriteStations />
          </ProtectedRoute>
          <Route path="/stations" exact={true}>
            <AllStations />
          </Route>
          <Route path="/station/:stationId" exact={true}>
            <StationPage />
          </Route>
        </Switch>
      </div>

      <div className="bottom-spacer">
        <About />
      </div>

      <AppAudioPlayer />
    </BrowserRouter>
  );
}

export default App;

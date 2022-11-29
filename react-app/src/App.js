import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import AllStations from "./components/RadioStation/AllStations";
import CreateStation from "./components/RadioStation/CreateStation";
import FavoriteStations from "./components/RadioStation/FavoriteStations";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AudioContext } from "./context/Audio";
import AppAudioPlayer from "./components/AudioPlayer";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const { audioUrl } = useContext(AudioContext);

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
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <h1>UNIFY FM</h1>
        </Route>
        <Route path="/favorites" exact={true}>
          <FavoriteStations />
        </Route>
      </Switch>
      <AllStations />
      <CreateStation />
      <AppAudioPlayer />
    </BrowserRouter>
  );
}

export default App;

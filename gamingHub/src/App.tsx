import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { LandingPage, MyProfile } from "./pages";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import {
  landingPagePath,
  loginPath,
  myProfilePath,
} from "./components/navigation/paths";
import { RootState } from "./store/store";
import { SignForm } from "./components";

const App: React.FC = () => {
  const isAuth = Boolean(useSelector((state: RootState) => state.user));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={loginPath()} element={<SignForm />} />
          <Route
            path={landingPagePath()}
            element={isAuth ? <LandingPage /> : <Navigate to={loginPath()} />}
          />
          <Route />
          <Route
            path={myProfilePath()}
            element={isAuth ? <MyProfile /> : <Navigate to={loginPath()} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { useEffect } from "react";
import { Navbar } from "../../components";
import { useSelector } from "react-redux";

export const LandingPage: React.FC = () => {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return <Navbar />;
};

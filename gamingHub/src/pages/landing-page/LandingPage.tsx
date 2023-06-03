import React from "react";
import { useEffect } from "react";
import { Navbar } from "../../components";
import { useSelector } from "react-redux";

export const LandingPage: React.FC = () => {

  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Navbar />;
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper
        nunc nec lacus venenatis, non laoreet metus ullamcorper. Phasellus ut
        vestibulum leo. Ut vel ullamcorper lorem. Donec eget semper ante. Morbi
        tincidunt ex eget lacus tincidunt rhoncus. Aliquam erat volutpat.
        Suspendisse potenti. Cras ultricies tellus nec elit consectetur, sit
        amet auctor ex pharetra. Fusce auctor eu ipsum ut finibus. In eu lorem
        non tellus facilisis interdum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper
        nunc nec lacus venenatis, non laoreet metus ullamcorper. Phasellus ut
        vestibulum leo. Ut vel ullamcorper lorem. Donec eget semper ante. Morbi
        tincidunt ex eget lacus tincidunt rhoncus. Aliquam erat volutpat.
        Suspendisse potenti. Cras ultricies tellus nec elit consectetur, sit
        amet auctor ex pharetra. Fusce auctor eu ipsum ut finibus. In eu lorem
        non tellus facilisis interdum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper
        nunc nec lacus venenatis, non laoreet metus ullamcorper. Phasellus ut
        vestibulum leo. Ut vel ullamcorper lorem. Donec eget semper ante. Morbi
        tincidunt ex eget lacus tincidunt rhoncus. Aliquam erat volutpat.
        Suspendisse potenti. Cras ultricies tellus nec elit consectetur, sit
        amet auctor ex pharetra. Fusce auctor eu ipsum ut finibus. In eu lorem
        non tellus facilisis interdum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper
        nunc nec lacus venenatis, non laoreet metus ullamcorper. Phasellus ut
        vestibulum leo. Ut vel ullamcorper lorem. Donec eget semper ante. Morbi
        tincidunt ex eget lacus tincidunt rhoncus. Aliquam erat volutpat.
        Suspendisse potenti. Cras ultricies tellus nec elit consectetur, sit
        amet auctor ex pharetra. Fusce auctor eu ipsum ut finibus. In eu lorem
        non tellus facilisis interdum.
      </div>
    </>
  );

};

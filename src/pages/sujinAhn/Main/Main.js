import React from "react";
import Header from "./Header/Header";
import Contents from "./Contents/Contents";
import Modal from "./Modal/Modal";

import "./Main.scss";

const Main = () => {
  return (
    <>
      <Header />
      <Contents />
      <Modal />
    </>
  );
};

export default Main;

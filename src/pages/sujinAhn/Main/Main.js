import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import Contents from "./Contents/Contents";
import Modal from "./Modal/Modal";

import "./Main.scss";

const Main = () => {
  const [active, setActive] = useState(true);
  const toggleModal = () => {
    setActive(!active);
  };

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Contents />
      <Modal active={active} toggleModal={toggleModal} />
    </>
  );
};

export default Main;

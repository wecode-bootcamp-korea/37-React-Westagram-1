import React, { useState } from "react";
import Nav from "../../../components/Nav/Nav";
import Contents from "./Contents/Contents";
import Modal from "./Modal/Modal";

import "../../../components/Nav/Nav.scss";
import "./Main.scss";

const Main = () => {
  const [active, setActive] = useState(true);
  const toggleModal = () => {
    setActive(!active);
  };

  return (
    <>
      <Nav />
      <Contents />
      <Modal active={active} toggleModal={toggleModal} />
    </>
  );
};

export default Main;

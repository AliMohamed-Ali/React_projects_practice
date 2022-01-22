import React, { useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ close }) => {
  return <div className={classes.backdrop} onClick={close}></div>;
};

const Overlay = ({record,close ,children}) => {
    
//   const onchangeHandler = (e,id)=>{
//       console.log(e.target.value , " name:",id)
//   }
  return (
    <div className={classes.overlay}>
      {children}
    </div>
  );
};

const Modal = ({ show, close ,record,children}) => {
  return (
    show && (
      <React.Fragment>
        {ReactDOM.createPortal(
          <React.Fragment>
            <Backdrop close={close} />
            <Overlay>{children}</Overlay>
          </React.Fragment>,
          document.getElementById("modal")
        )}
      </React.Fragment>
    )
  );
};

export default Modal;

import React, { useState } from "react";
import { Collapse } from "reactstrap";

function MessageReplay(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="messageReplay-container">
      <button id="messageReplay-btn" onClick={toggle}>
        <b>Visualizza risposte</b>
      </button>
      <Collapse isOpen={isOpen}>{props.children}</Collapse>
    </div>
  );
}

export default MessageReplay;

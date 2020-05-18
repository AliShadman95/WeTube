import React, { useState } from "react";
import { Collapse } from "reactstrap";

function MessageReplay(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ paddingLeft: "80px" }}>
      <button onClick={toggle} style={{ marginBottom: "1rem", border: "none" }}>
        <b>Visualizza risposte</b>
      </button>
      <Collapse isOpen={isOpen}>{props.children}</Collapse>
    </div>
  );
}

export default MessageReplay;

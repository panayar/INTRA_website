import React from "react";
import { Accordion } from "react-bootstrap";

export default function Acor(props) {
  return (
    <div className={props.bg}>
        <h3 className="mb-5">{props.mainTitle}</h3>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.titleOne}</Accordion.Header>
          <Accordion.Body>{props.descriptionOne}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{props.titleTwo}</Accordion.Header>
          <Accordion.Body>{props.descriptionTwo}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>{props.titleThree}</Accordion.Header>
          <Accordion.Body>{props.descriptionThree}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

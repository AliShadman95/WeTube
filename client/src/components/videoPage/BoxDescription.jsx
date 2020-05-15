import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  CardBody,
  Card,
} from "reactstrap";

function BoxDescription() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Col xs="5">
          <p>Titolo e cavoli vari</p>
          <p>1400 visualizzazioni - data 01/01/2000</p>
        </Col>
        <Col xs="5">bottoni vari</Col>
      </Row>
      <Row>
        <Col>
          <hr></hr>
          <div>
            <Button
              color="light"
              onClick={toggle}
              style={{ marginBottom: "1rem" }}
            >
              Altro
            </Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BoxDescription;

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image from "./img/ezioBosso.jpeg";



function VideoContainer() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <CardGroup>

                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Symphony N.1 "Oceans": I. Allegro Giusto "To Plough The Waves" (Atlantic)</Card.Title>
                                <Card.Text>
                                    Ezio Bosso

                                </Card.Text>
                                <Card.Text>
                                    Data di Pubblicazione

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Ezio Bosso: Clouds, The mind on the Re(Wind)</Card.Title>
                                <Card.Text>
                                    Ezio Bosso
      </Card.Text>
                                <Card.Text>
                                    Data di Pubblicazione
      </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Ezio Bosso: Unconditioned (Followed, A Bird)</Card.Title>
                                <Card.Text>
                                    Ezio Bosso
      </Card.Text>
                                <Card.Text>
                                    Data di Pubblicazione
      </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default VideoContainer;
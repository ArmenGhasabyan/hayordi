import React, { Component } from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";

export default class Blog extends Component{
    render() { 
        return (
            <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Desing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">program</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">freamwork</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>
                            <p>gyadgjadjhajhada agda  gda dyagd yag dag duiag 
                                duiag duiag duiagdiu ag dia</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <img src="https://www.facebook.com/images/fb_icon_325x325.png"/> 
                            <p>gyadgjadjhajhada agda  gda dyagd yag dag 
                                duiag duiag duiag duiagdiu ag dia</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>                            
                            <p>gyadgjadjhajhada agda  gda dyagd yag dag 
                                duiag duiag duiag duiagdiu ag dia</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                            <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>                            
                            <p>gyadgjadjhajhada agda  gda dyagd yag
                                 dag duiag duiag duiag duiagdiu ag dia</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                            <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>                            
                            <p>gyadgjadjhajhada agda  gda dyagd yag
                                 dag duiag duiag duiag duiagdiu ag dia</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
          </Container>
        ) 
    }
}
import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component{
    render() { 
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">contact us</h1>
                <Form>
                <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicLastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Lastname"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="+374(77) 12-34-56"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                        <Form.Text>entre your email adress</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPasword">
                        <Form.Label>example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">submit</Button>
                </Form>
            </Container>
        ) 
    }
}
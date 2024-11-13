import React, { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';

const ContactUs = () => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredNum, setEnteredNum] = useState("");

    const details = {
        name: enteredName,
        email: enteredEmail,
        number: enteredNum,
    };

    const contactUsHandler = async (event) => {
        event.preventDefault();
        console.log(details);
        try {
            const response = await fetch("https://e-store-cd1ef-default-rtdb.firebaseio.com/contact.json", {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            setEnteredName("");
            setEnteredEmail("");
            setEnteredNum("");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <Container>
            <Form onSubmit={contactUsHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name..."
                        value={enteredName}
                        onChange={(event) => setEnteredName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email..."
                        value={enteredEmail}
                        onChange={(event) => setEnteredEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter phone number..."
                        value={enteredNum}
                        onChange={(event) => setEnteredNum(event.target.value)}
                    />
                </Form.Group>

                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default ContactUs;

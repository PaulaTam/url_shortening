import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar fixed="top" bg="light">
            <Container>
                <Navbar.Brand>URL Shortener</Navbar.Brand>
                <Navbar.Text>Created by: Paula Abigail Tam</Navbar.Text>
            </Container>
        </Navbar>
    )
}
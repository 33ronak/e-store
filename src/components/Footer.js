import React from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{ fontFamily: "serif" }}>
            <footer className="bg-info text-white py-1">
                <Container className="my-5">
                    <Stack direction="horizontal" gap={3}>
                        <div className="display-6 p-2">The Generics</div>

                        <div className="p-2 ms-auto">
                            <Button variant="outline-light" style={{ border: 'none' }}>
                                <FaYoutube size={30} color="#FF0000" />
                            </Button>
                        </div>
                        <div className="p-2">
                            <Button variant="outline-light" style={{ border: 'none' }}>
                                <FaSpotify size={30} color="#1DB954" />
                            </Button>
                        </div>
                        <div className="p-2">
                            <Button variant="outline-light" style={{ border: 'none' }}>
                                <FaFacebook size={30} color="#1877F2" />
                            </Button>
                        </div>

                    </Stack>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;

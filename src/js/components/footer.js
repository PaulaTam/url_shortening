import React from 'react';
import '../../css/footer.css';
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <h4>About Me</h4>
                        <p>Hi! My name is Paula Abigail Tam and I am a recent graduate, {"(May 2023)"}, with a BS in Computer Science and a Minor in Mathematics.</p>
                        <p>If you want to contact me, please click on one of the icons under the Contact Me column!</p>
                    </Col>
                    <Col>
                        <h4>Contact Me</h4>
                        <ul className='list-unstyled'>
                            <li className="footer-icon">
                                <SocialIcon network="email" href="mailto:abigailttam65@gmail.com" target="_blank"
                                style={{ height: 40, width: 40 }} bgColor="white" fgColor="black"/> Email
                            </li>
                            <li className="footer-icon">
                                <SocialIcon url="https://www.linkedin.com/in/paulatam" target="_blank"
                                style={{ height: 40, width: 40 }} bgColor="white" fgColor="black"/> LinkedIn
                            </li>
                            <li className="footer-icon">
                                <SocialIcon url="https://github.com/PaulaTam" target="_blank"
                                style={{ height: 40, width: 40 }} bgColor="white" fgColor="black"/> Github
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>            
        </footer>
    )
}
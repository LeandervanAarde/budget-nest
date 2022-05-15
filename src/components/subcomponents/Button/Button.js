import React from 'react';
import { Col } from 'react-bootstrap';
const Button = (props) => {
    return (
        <Col sm={12} className="button" id={props.id} onClick={props.function}> 
                <Col sm={3} className="icon">{props.icon}</Col>
                <p>{props.text}</p>
        </Col>
    );
};

export default Button;
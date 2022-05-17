import React from 'react';
import { Col } from 'react-bootstrap';
const Button = (props) => {
    return (
        <Col sm={12} className="button text-center" id={props.id} onClick={props.function}> 
                <Col sm={3} className="icon">{props.icon}</Col>
                <p className='text-center'>{props.text}</p>
        </Col>
    );
};

export default Button;
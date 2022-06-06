import React from 'react';
import { Col } from 'react-bootstrap';

const PillContainer = (props) => {
    return (
        <Col md={1} value={props.val} className='pill'><h3>{props.val}</h3></Col>
    );
};

export default PillContainer;
import React from 'react';
import { Col } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Col sm={12} className="navCon">
            <Col sm={1} className="logo"></Col>
                <h5>Navigational Item</h5>
                <h5>Navigational Item</h5>
                <h5>Navigational Item</h5>
        </Col>
    );
};

export default Navigation;
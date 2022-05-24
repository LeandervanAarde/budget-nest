import React from 'react';
import { Col } from 'react-bootstrap';
const Info = (props) => {
    return (
       <Col md={3} className="infoBlock">
           <h4 className='text-center'>{props.heading}</h4>
           <p className='text-center'>{props.content}</p>
           {props.extra}
       </Col>
    );
};

export default Info;
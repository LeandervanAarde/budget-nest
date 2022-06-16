import React from 'react';
import { Col } from 'react-bootstrap';
const Info = (props) => {
    return (
       <Col md={3} className="infoBlock" id={props.id}>
           <h4 className='text-center'>{props.heading}</h4>
           <p className='text-center' id={props.id2}>{props.content}</p>
           {props.extra}
       </Col>
    );
};

export default Info;
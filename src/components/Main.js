import React, {useState} from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
const Main = () => {
    const [showPage, setShowPage] = useState(false);
    return (
        <Col sm={12} className='contentCon'>
            <Navigation/>

        </Col>
    );
};

export default Main;
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
import IncomeOverview from './subcomponents/IncomeOverview.js/IncomeOverview';
const Main = () => {
    const [showPage, setShowPage] = useState(false);
    return (
        <>
            <Navigation />

            <Col sm={12} md={2} className="content">
                <IncomeOverview />
            </Col>

            <Col sm={12} md={10} className="content">
                <h2>MONTHLY INCOME</h2>
                <Col md={12}></Col>
            </Col>

        </>
    );
};

export default Main;
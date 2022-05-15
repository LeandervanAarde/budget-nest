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
                <IncomeOverview 
                house = "van Aarde"
                price = "12 000.00"
                taxprice = "1800.00"
                taxBrack = "15"
                aftTax = {"10200.00"}
                />
            </Col>

            <Col sm={12} md={10} className="content">
                <h2>MONTHLY INCOME</h2>
                <Col md={12}></Col>
            </Col>

        </>
    );
};

export default Main;
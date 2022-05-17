import React from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
import Info from './subcomponents/moneyInfo/Info';
import Button from './subcomponents/Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Household from './subcomponents/householdInfo/Household';

const TotalSavings = () => {
    return (
        <>
        <Col md={2} className="leftCon">
            <Navigation />
        </Col>
        <Col md={10} className="contentCon">
          
            <Col md={{ span: 11 }}>
             
            </Col>
                
        </Col>
    </>
    );
};

export default TotalSavings;
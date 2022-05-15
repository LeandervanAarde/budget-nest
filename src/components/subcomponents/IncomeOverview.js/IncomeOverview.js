import React from 'react';
import { Col } from 'react-bootstrap';
const IncomeOverview = (props) => {
    return (
        <Col sm={12} className="IncomeOvervw">
            <h4 className='text-center head'><strong>{props.house}</strong> household Income</h4>
            <h4 className='text-center information top'> TOTAL INCOME</h4>
            <h5 className='userContent text-center'>R {props.price}</h5>
            <h4 className='text-center information'> TOTAL TAX</h4>
            <h5 className='userContent text-center'>{props.taxBrack} %</h5>
            <h5 className='userContent text-center'>R {props.taxprice}</h5>
            <h4 className='text-center information'> $ AFTER TAX</h4>
            <h5 className='userContent text-center'>R {props.price} - R{props.taxprice}</h5>
            <h3 className='text-center finalIncome'>R{props.aftTax} </h3>

        </Col>
    );
};

export default IncomeOverview;
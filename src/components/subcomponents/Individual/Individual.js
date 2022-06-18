import React from 'react';
import { Col } from 'react-bootstrap';

const Individual = (props) => {
    return (
        <Col md={5} className='totalIndividual' aria-label='IndividualOutcome'>
        <h2 className='finalOut'>{props.name}</h2>
        <h5 className='finalOut'>Income P/M: R {props.monthlyInc} </h5>
        <h5 className='finalOut'>Yearly income: {props.yearlyInc} </h5>
        <h5 className='finalOut'>Savings:{props.savingsP}</h5>
        <h5 className='finalOut'>Savings Amount:{props.savingsA} </h5>
        <h5 className='finalOut'>Expenses: {props.expenseA} </h5>
        <hr className='divider'></hr>
        <h1 className='finalOut'>Total Income:  R {props.outCome}</h1>
    </Col>    
    );
};

export default Individual;
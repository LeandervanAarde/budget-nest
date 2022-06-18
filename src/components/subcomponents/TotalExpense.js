import React, { useState, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import Info from './moneyInfo/Info';
import Button from './Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import PolarAreaChart from './Charts/DougnutChart';
import Loader from './Loader/Loader';

const TotalExpense = (props) => {
    
    return (
        <>
            <Col md={{ span: 12 }}>
                <h2 className='household'>Savings and expenses</h2>

                <form className='exForm'>
                    <select placeholder='Select Member' defaultValue={true} aria-label="members" className='drop me-4' ref={props.referenceN} onChange={props.onC}>
                        <option selected={true} disabled={true}>Select member</option>
                        {props.names}
                    </select>
                    <input placeholder='Enter expense title...' aria-label='expenseName' className='expenses' ref={props.expenseName} type={"text"} id='one' />
                    <input placeholder='Enter expense amount...' aria-label='epenseAmount' className='expenses' ref={props.expenseAmount} type={"number"} />
                    <Col md={2} className="butn2">{props.Btn}</Col>
                </form>
              
                <h2>Savings </h2>
                <Col md={{ span: 10, offset: 1 }} className="pillContainer">
                    {props.children}
                </Col>

            </Col>
        </>
    );
};
export default TotalExpense;




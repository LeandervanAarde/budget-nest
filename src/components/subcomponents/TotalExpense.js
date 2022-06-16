import React, { useState, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import Info from './moneyInfo/Info';
import Button from './Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import PolarAreaChart from './Charts/DougnutChart';
import Loader from './Loader/Loader';

const TotalExpense = (props) => {
    const names = sessionStorage.getItem("Name");
    const incomes = [sessionStorage.getItem("IncomeAfterTax")];
    const expenseName = useRef();
    const expenseAmount = useRef();
    const [Expenses, setExpenses] = useState([]);
    
    return (
        <>
            <Col md={{ span: 12 }}>
                <h2 className='household'>Savings and expenses</h2>
                {/* <table>
                    <thead>
                        <tr>
                            <th><h5>#</h5></th>
                            <th><h5>Name</h5></th>
                            <th><h5>Income after tax</h5></th>
                            <th><h5>Expense Name</h5></th>
                            <th><h5>Expenses amount</h5></th>
                            <th><h5>Savings %</h5></th>
                            <th><h5>Savings</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tableInfo}
                    </tbody>
                </table> */}
                <form className='exForm'>
                    <select placeholder='Select Member' defaultValue={true} className='drop me-4' ref={props.referenceN} onChange={props.onC}>
                        <option selected={true} disabled={true}>Select member</option>
                        {props.names}
                    </select>
                    <input aria-label='expenseName' className='expenses' ref={props.expenseName} type={"text"} id='one' />
                    <input aria-label='epenseAmount' className='expenses' ref={props.expenseAmount} type={"number"} />
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




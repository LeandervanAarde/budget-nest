import React, { useState, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
import Info from './subcomponents/moneyInfo/Info';
import Button from './subcomponents/Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Household from './subcomponents/householdInfo/Household';
import PolarAreaChart from './subcomponents/Charts/DougnutChart';
import Loader from './subcomponents/Loader/Loader';
import { combine } from './Functions/Testfunction';
import PillContainer from './subcomponents/Button/PillContainer';

const TotalExpense = (props) => {
    const [allMembers, setAllMembers] = useState([]);
    const data = [];
    const names = sessionStorage.getItem("Name");
    const incomes = [sessionStorage.getItem("IncomeAfterTax")];
    const nameArr = names;
    const incomeArr = incomes
   
    const peopleArr = { person: nameArr, income: incomeArr };
    const expenseName = useRef();
    const expenseAmount = useRef();
    const [Expenses, setExpenses] = useState([]);

    const getExpenses = () =>{
        let expense = expenseName.current.value;
        let expensePrice = expenseAmount.current.value;
        setExpenses({...Expenses, name: names, expenseName: expense, Cost: expensePrice});
      
    }

    return (
        <>
            <Col md={{ span: 12 }}>
                <h2 className='household'>Savings and expenses</h2>

                <Info
                    heading={props.person +"INCOME"}
                    content={"R 200.00"}
                    extra={<hr></hr>}
                />
                <Info
                    heading={"TOTAL EXPENSE AMOUNT"}
                    content={"6"}
                    extra={<hr></hr>}
                />
                <Info
                    heading={"TOTAL SAVINGS"}
                    content={"R600"}
                    extra={<hr></hr>}
                />

                <form className='exForm'>
                    <select placeholder='Select Member' className='drop me-4'>
                        <option defaultValue={true} disabled={true}>Select member</option>
                        {props.names}
                    </select>
                    <input className='expenses' ref={expenseName} type={"text"} id='one'  />
                    <input className='expenses' ref={expenseAmount} type={"number"} />
                    <Col md={2} className="butn2"><Button id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD EXPENSE" function={getExpenses} /></Col>
                </form>

                <h2>Savings </h2>
                <Col md={{ span: 10, offset: 1 }} className="pillContainer">
                        {props.children}
                    <input className='input' aria-label='personIncome' name='EnterIncome' placeholder='Enter own amount...' type={"number"} />
                </Col>

            </Col>

            <Col md={{ span: 5 }} className="chartCon">
                {!incomes.length > 0 ? <PolarAreaChart /> : <Loader />}
            </Col>

            <Col md={{ span: 5 }} className="chartCon">
                {!incomes.length > 0 ? <PolarAreaChart /> : <Loader />}
            </Col>
        </>
    );
};

export default TotalExpense;




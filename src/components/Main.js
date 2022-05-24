import React, { useEffect, useRef, useState } from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
import Info from './subcomponents/moneyInfo/Info';
import Button from './subcomponents/Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Household from './subcomponents/householdInfo/Household';
import DoughnutChart from './subcomponents/Charts/DougnutChart';
import BarChart from './subcomponents/Charts/BarChart';
import PolarAreaChart from './subcomponents/Charts/PolarAreaChart';

const Main = () => {
    const [householdIncome, setHouseHoldIncome] = useState([]);
    const name = useRef()
    const income = useRef();

    const clickValue = (e) => {
        e.preventDefault();
        //get the value
        let uName = name.current.value;
        let uIncome = income.current.value;
        // object that 
        let userIncome = {
            id: Math.random() * 10,
            name: uName,
            Income: uIncome
        }
        setHouseHoldIncome((prevState) => (
            [...prevState, userIncome]
        ))
    }
    // console.log(householdIncome);

    return (
        <>
            <Col md={2} className="leftCon">
                <Navigation />
            </Col>
            <Col md={10} className="contentCon">
                <br></br>
                <h2>Household Income</h2>
                <Info
                    heading={"TOTAL INCOME"}
                    content={"R 200.00"}
                    extra={<hr></hr>}
                />
                <Info
                    heading={"TOTAL TAX"}
                    content={"15%"}
                    extra={<p className='text-center'>R12 500.00</p>}
                />
                <Info
                    heading={"INCOME AFTER TAX"}
                    content={"R12 000.00 - 1500.00"}
                    extra={<p className='text-center'>R10 500.00</p>}
                />
                <Col md={{ span: 11 }}>
                    <form>
                        <input ref={name} className='input' aria-label='name' name='name' placeholder='Enter name...' type={"text"} id='one' />
                        <input ref={income} className='input' aria-label='income' name='income' placeholder='Enter amount...' type={"number"} />
                        <Col md={2} className="butn"><Button function={clickValue} id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD INCOME" /></Col>
                    </form>
                </Col>

                <h2 className='household'>Household Name</h2>
                <table>
                    <thead>
                        <tr>
                            <th><h5>#</h5></th>
                            <th><h5>Name</h5></th>
                            <th><h5>Amount</h5></th>
                            <th><h5>Tax bracket</h5></th>
                            <th><h5>Tax amount</h5></th>
                            <th><h5>Income after tax</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {householdIncome.map((e, index) => (
                            <Household
                                key={e.id}
                                number = {e.index}
                                name={e.name}
                                amount={e.Income} />
                        ))}
                    </tbody>
                </table>
                <Col md={3} className="chartCon">
                    <BarChart />
                </Col>

                <Col md={3} className="chartCon">
                    <DoughnutChart />
                </Col>

                <Col md={3} className="chartCon">
                    <PolarAreaChart />
                </Col>

            </Col>
        </>
    );
};

export default Main;
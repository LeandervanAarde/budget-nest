import React from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
import Info from './subcomponents/moneyInfo/Info';
import Button from './subcomponents/Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Household from './subcomponents/householdInfo/Household';
import PolarAreaChart from './subcomponents/Charts/DougnutChart';
import Loader from './subcomponents/Loader/Loader';
const TotalExpense = () => {

    const data = [];

    return (
        <>
            <Col md={2} className="leftCon">
                <Navigation />
            </Col>
            <Col md={10} className="contentCon">

                <Col md={{ span: 11 }}>
                    <h2 className='household'>Household Name</h2>

                    <Info
                        heading={"INCOME"}
                        content={"R 200.00"}
                        extra={<hr></hr>}
                    />
                    <Info
                        heading={"TOTAL EXPENSES"}
                        content={"6"}
                        extra={<hr></hr>}
                    />
                    <Info
                        heading={"TOTAL EXPENSE AMOUNT"}
                        content={"R600"}
                        extra={<hr></hr>}
                    />

                    <form className='exForm'>
                        <select placeholder='Select Member' className='drop me-4'>
                            <option defaultValue={true} disabled={true}>Select member</option>
                        </select>
                        <input className='expenses' type={"text"} id='one' />
                        <input className='expenses' type={"number"} />
                        <Col md={2} className="butn2"><Button id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD EXPENSE" /></Col>
                    </form>

                    <h2>Savings </h2>
                    <Col md={{ span: 10, offset: 1 }} className="pillContainer">
                        <Col md={1} value="2.5%" className='pill'><h3>2.5%</h3></Col>
                        <Col md={1} value="5%" className='pill'><h3>5%</h3></Col>
                        <Col md={1} value="7%" className='pill'><h3>7%</h3></Col>
                        <Col md={1} value="10%" className='pill'><h3>10%</h3></Col>
                        <Col md={1} value="15%" className='pill'><h3>15%</h3></Col>
                        <Col md={1} value="20%" className='pill'><h3>20%</h3></Col>
                        <input className='input' aria-label='income' name='income' placeholder='Enter amount...' type={"number"} />
                    </Col>

                </Col>

                <Col md={5} className="chartCon">
                { data.length > 0 ?<PolarAreaChart />: <Loader /> }
                </Col>

                <Col md={5} className="chartCon">
                { data.length > 0 ?<PolarAreaChart />: <Loader /> }
                </Col>

            </Col>
        </>
    );
};

export default TotalExpense;




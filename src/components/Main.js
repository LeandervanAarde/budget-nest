import React from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
import Info from './subcomponents/moneyInfo/Info';
import Button from './subcomponents/Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Household from './subcomponents/householdInfo/Household';

const Main = () => {
    
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
                    extra={"R12 000.00"}
                />
                <Info
                    heading={"INCOME AFTER TAX"}
                    content={"R12 000.00 - 1500.00"}
                    extra={"R10 500.00"}
                />
                <Col md={{ span: 11 }}>
                    <form>
                        <input className='input' type={"text"} id='one' />
                        <input className='input' type={"number"} />
                        <Col md={2} className="butn"><Button id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD INCOME" /></Col>
                    </form>
                </Col>
                    
            </Col>
        </>
    );
};

export default Main;



{/* <h2 className='household'>Household Name</h2>
                    <Household/>
                    <h2 className='household mb-4'>Monthly expenses and savings</h2>
                    <form>
                        <select placeholder='Select Member' className='drop me-4'>
                            <option defaultValue={true} disabled={true}>Select member</option>
                        </select>
                        <input className='expenses' type={"text"} id='one' />
                        <input className='expenses' type={"number"} />
                        <Col md={2} className="butn2"><Button id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD INCOME" /></Col>
                    </form>
                    
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
                /> */}
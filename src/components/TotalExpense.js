import React from 'react';
import { Col } from 'react-bootstrap';
import Navigation from './subcomponents/Navigation/Navigation';
import Info from './subcomponents/moneyInfo/Info';
import Button from './subcomponents/Button/Button';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Household from './subcomponents/householdInfo/Household';

const TotalExpense = () => {

    var name = sessionStorage.getItem("Names");
    console.log(name)

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
                    />

                    <form className='exForm'>
                        <select placeholder='Select Member' className='drop me-4'>
                            <option defaultValue={true} disabled={true}>Select member</option>
                        </select>
                        <input className='expenses' type={"text"} id='one' />
                        <input className='expenses' type={"number"} />
                        <Col md={2} className="butn2"><Button id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD EXPENSE" /></Col>
                    </form>


                </Col>

            </Col>
        </>
    );
};

export default TotalExpense;



{/* <h2 className='household'>Household Name</h2>
   
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
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
    const [total, setTotal] = useState(0);
    const [incomes, setIncomes] = useState([]);
    const [names, setNames] = useState([]);
    const [counter, setCounter] = useState(1);
    const name = useRef()
    const income = useRef();
    const [val, setVal] = useState()
    //function to get the value that is being input and then to output it to the dom as all values added togehter
    const clickValue = () => {
        //get the value
        let uName = name.current.value;
        let uIncome = income.current.value;
        // object that 
        let userIncome = {
            id: Math.random() * 10,
            name: uName,
            Income: (+ uIncome)
        }
        setHouseHoldIncome((prevState) => (
            [...prevState, userIncome]
        ))
    }

    //use effet

    useEffect(() => {

        const result = householdIncome.map((item) => (item.Income));
        const userNames = householdIncome.map((inf) => (inf.name));
        setTotal(result.reduce((accumulator, currVal) => accumulator + currVal, 0));
        setIncomes(result);
        setNames(userNames);
    }, [householdIncome])



    const houseHoldTax = () => {
        let taxAmount = total * 12;
        const between = (x, min, max) => {
            return x >= min && x <= max;
        }
        if (between(taxAmount, 1, 226000)) {
            let totalTaxAmmount = taxAmount * 0.18;
        } else if (between(taxAmount, 226000, 353100)) {
            let output = "40680 + 26%";
            let totalTaxAmmount = (taxAmount * 0.26) - 40680;
            let monthlyTax = totalTaxAmmount / 12;
        }
    }



    return (
        <>
            <Col md={2} className="leftCon">
                <Navigation />
            </Col>
            <Col md={10} className="contentCon">
                <br></br>
                <h2>Household Income</h2>
                <br></br>
                <Info
                    heading={"TOTAL INCOME"}
                    content={"R " + total}
                    extra={<p className='text-center'><strong>Income before tax</strong></p>}
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
                    <form onSubmit={houseHoldTax()}>
                        <input value={val} ref={name} className='input' aria-label='name' name='name' placeholder='Enter name...' type={"text"} id='one' />
                        <input value={val} ref={income} className='input' aria-label='income' name='income' placeholder='Enter amount...' type={"number"} onKeyPress={(event) => { event.key === "Enter" && clickValue() }} />
                        <Col md={2} className="butn" aria-label='button'><Button function={clickValue} id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD INCOME" /></Col>
                    </form>
                </Col>

                <h2 className='household'>Household Name</h2>
                <table className='table'>
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
                                number={counter + index}
                                name={e.name}
                                amount={e.Income} />
                        ))}
                    </tbody>
                </table>
                <Col md={3} className="chartCon">
                    {
                        incomes.length > 0 ?
                            <BarChart
                                data={incomes}
                                name={names}
                            />
                            :
                            <>
                                <div id='bar1' className='loaderCon'>
                                    <div id='bar2' className='loaderBar'></div>
                                    <div id='bar3' className='loaderBar'></div>
                                    <div id='bar4' className='loaderBar'></div>
                                    <div id='bar5' className='loaderBar'></div>
                                    <div id='bar6' className='loaderBar'></div>
                                    <div id='bar7' className='loaderBar'></div>
                                    <div id='bar8' className='loaderBar'></div>
                                    <div id='bar9' className='loaderBar'></div>
                                </div>

                                <h4>Getting Data...</h4>
                            </>
                    }
                </Col>

                <Col md={3} className="chartCon">
                    {
                        incomes.length > 0 ?
                            <DoughnutChart />
                            : <>
                                <div id='bar1' className='loaderCon'>
                                    <div id='bar2' className='loaderBar'></div>
                                    <div id='bar3' className='loaderBar'></div>
                                    <div id='bar4' className='loaderBar'></div>
                                    <div id='bar5' className='loaderBar'></div>
                                    <div id='bar6' className='loaderBar'></div>
                                    <div id='bar7' className='loaderBar'></div>
                                    <div id='bar8' className='loaderBar'></div>
                                    <div id='bar9' className='loaderBar'></div>
                                </div>

                                <h4>Getting Data...</h4>
                            </>
                    }
                </Col>

                <Col md={3} className="chartCon">
                    {
                        incomes.length > 0 ?
                            <PolarAreaChart />
                            :
                            <>
                                <div id='bar1' className='loaderCon'>
                                    <div id='bar2' className='loaderBar'></div>
                                    <div id='bar3' className='loaderBar'></div>
                                    <div id='bar4' className='loaderBar'></div>
                                    <div id='bar5' className='loaderBar'></div>
                                    <div id='bar6' className='loaderBar'></div>
                                    <div id='bar7' className='loaderBar'></div>
                                    <div id='bar8' className='loaderBar'></div>
                                    <div id='bar9' className='loaderBar'></div>
                                </div>

                                <h4>Getting Data...</h4>
                            </>
                    }
                </Col>
            </Col>
        </>
    );
};

export default Main;




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
import { between, getBracket, getTotal, getNewTotal, calcMonths } from './Functions/Testfunction';
import Loader from './subcomponents/Loader/Loader';

const Main = () => {

    const [householdIncome, setHouseHoldIncome] = useState([]);
    const [total, setTotal] = useState(0);
    const [incomes, setIncomes] = useState([]);
    const [names, setNames] = useState([]);
    const [counter, setCounter] = useState(1);
    const name = useRef()
    const income = useRef();
    const [taxper, setTaxPer] = useState(0);
    const [taxOutPut, setTaxOutPut] = useState(0);
    const [AfterTax, setAfterTax] = useState(0);
    const [yIncome, setYIncome] = useState([0]);
    //State to get all values from the household after tax
    const [allAfter, setAllAfterTax] = useState([0]);

    //function to get the value that is being input and then to output it to the dom as all values added togehter
    const clickValue = () => {
        //get the value
        let uName = name.current.value;
        let uIncome = income.current.value;
        let Yearly = (calcMonths(uIncome, 12));
        let personalTaxBrack = getBracket(Yearly);
        let inAfterTx = Yearly - personalTaxBrack.totalTaxAmmount
        // object that 
        let userIncome = {
            id: Math.random() * 10,
            name: uName,
            Income: (+ uIncome),
            YearlyIncome: Yearly,
            Bracket: personalTaxBrack.output,
            taxAmount: personalTaxBrack.totalTaxAmmount,
            afterTx: inAfterTx
        }
        setHouseHoldIncome((prevState) => (
            [...prevState, userIncome]
        ))


    }

    // console.log(householdIncome)

    useEffect(() => {

        //result from clickValue function
        const result = householdIncome.map((item) => (item.Income));
        const userNames = householdIncome.map((inf) => (inf.name));
        const yearIncome = householdIncome.map(yearIn => (yearIn.YearlyIncome));
        const afterAllTax = householdIncome.map((atx) => (atx.afterTx));

        sessionStorage.setItem("Name", userNames);
        sessionStorage.setItem("IncomeAfterTax", (afterAllTax / 12));

        // adding all the incomes from the result variable in order to get a total household income
        setTotal(getTotal(result));

        // setting the incomes to showcase on TOTAL INCOME 
        setIncomes(result);

        //Getting the names of the users to showcase in the table 
        setNames(userNames);

        // Total amount of tax that needs to be paid if the household incomes are combined
        let totalD = getTotal(result);

        // This is gettng that total and making it accessible inside of the useEffect, this will times the income by the months and then your bracket will be calculated from there
        let taxAmount = calcMonths(totalD, 12);

        //Getting the total
        let bracket = getBracket(taxAmount);

        // Setting the tax bracket for total (only for html element) 
        setTaxPer(bracket.output);

        // Showcasing how much should be paid
        setTaxOutPut(bracket.totalTaxAmmount);

        //Dividing the yearly tax amount by 12 in order to show monthly tax
        const finalTaxAmount = bracket.totalTaxAmmount / 12;

        //To showcase the total amount after the tax amount has been deducted (On a monthly scale)
        const newIncome = getNewTotal(totalD, finalTaxAmount);

        setAfterTax(newIncome);

        setAllAfterTax(afterAllTax);

        setYIncome(yearIncome);

    }, [householdIncome])



    return (
        <>
            {/* Navigation in here */}
            <Col md={2} className="leftCon">
                <Navigation />
            </Col>
            {/* All content will go in here */}
            <Col md={10} className="contentCon">
                <br></br>
                <h2>Household Income</h2>
                <br></br>
                <Info
                    heading={"MONTHLY INCOME"}
                    content={"R " + total}
                    extra={<p className='text-center'><strong>Income before tax</strong></p>}
                    id="total"
                />

                <Info
                    heading={"MONTHLY TAX"}
                    content={taxper}
                    extra={<p className='text-center'>R {Math.round(taxOutPut / 12)}</p>}
                />

                <Info
                    heading={"INCOME AFTER TAX"}
                    content={"R " + total + " - " + "R " + Math.round(taxOutPut / 12)}
                    extra={<p className='text-center'>R {Math.round(AfterTax)}</p>}
                />

                <Col md={{ span: 11 }}>
                    <form>
                        <input ref={name} className='input' aria-label='name' name='name' placeholder='Enter name...' type={"text"} id='one' />
                        <input ref={income} className='input' aria-label='income' name='income' placeholder='Enter amount...' type={"number"} onKeyPress={(event) => { event.key === "Enter" && clickValue() }} />
                        <Col md={2} className="butn" aria-label='button'><Button function={() => (clickValue())} id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD INCOME" /></Col>
                    </form>
                </Col>

                <h2 className='household'>Household Name</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th><h5>#</h5></th>
                            <th><h5>Name</h5></th>
                            <th><h5>Income p/year</h5></th>
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
                                amount={e.YearlyIncome}
                                taxBrack={e.Bracket}
                                taxAmount={e.taxAmount}
                                afterTax={e.afterTx}
                            />
                        ))}
                    </tbody>
                </table>

                <Col md={3} className="chartCon">
                    {incomes.length > 0 ? <BarChart data={incomes} name={names} /> : <Loader />}
                </Col>

                <Col md={3} className="chartCon">
                    {incomes.length > 0 ? <DoughnutChart data={yIncome} name={names} /> : <Loader />}
                </Col>

                <Col md={3} className="chartCon">
                    {incomes.length > 0 ? <PolarAreaChart name={names} data={allAfter} /> : <Loader />}
                </Col>



                <Col md={{ span: 12 }}>
                    <h2 className='household'>Savings and expenses</h2>

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
                            {householdIncome.map((item) => <option value={item.name}>{item.name}</option>)}
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

                <Col md={{ span: 4, offset: 1 }} className="chartCon">
                    {incomes.length > 0 ? <PolarAreaChart /> : <Loader />}
                </Col>

                <Col md={{ span: 4 }} className="chartCon">
                    {incomes.length > 0 ? <PolarAreaChart /> : <Loader />}
                </Col>
            </Col>
        </>
    );
};

export default Main;




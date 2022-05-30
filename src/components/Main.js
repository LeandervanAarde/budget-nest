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
    const [val, setVal] = useState();
    const [taxper, setTaxPer] = useState(0);
    const [taxOutPut, setTaxOutPut] = useState(0); 
    const [AfterTax, setAfterTax] = useState(0)
    
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

      const between = (x, min, max) => {
            return x >= min && x <= max;
        }

         let taxAmount = total * 12;

        if (between(taxAmount, 1, 226000)) {
            let totalTaxAmmount = (taxAmount * 0.18);
            let output = "18%"
            setTaxPer(output); 
            setTaxOutPut(totalTaxAmmount);
            // console.log(totalTaxAmmount)
        } else if (between(taxAmount, 226000, 353100)) {
            let totalTaxAmmount = ((taxAmount * 0.26 ) -40680);
            let output = "40680 + 26%"  
            setTaxPer(output); 
            setTaxOutPut(totalTaxAmmount);
            // console.log(totalTaxAmmount) 
        } else if (between(taxAmount, 353101, 488700)) {
            let totalTaxAmmount = ((taxAmount * 0.31 ) -73726);
            let output = "4067372680 + 31%";
            setTaxPer(output);  
            setTaxOutPut(totalTaxAmmount);
            // console.log(totalTaxAmmount)  
        } else if (between(taxAmount, 488701, 641400)) {
            let totalTaxAmmount = ((taxAmount * 0.36) -115762);
            let output = "115762 + 36%";
            setTaxPer(output);  
            setTaxOutPut(totalTaxAmmount);
            // console.log(totalTaxAmmount)
        } else if (between(taxAmount, 641401, 817600)) {
            let totalTaxAmmount = ((taxAmount * 0.39) -170734);
            let output = "170734 + 39%";
            setTaxPer(output); 
            setTaxOutPut(totalTaxAmmount);   
            // console.log(totalTaxAmmount)
        } else if (between(taxAmount, 817601, 1731600)) {
            let totalTaxAmmount = ((taxAmount * 0.41) -239452);
            let output = "239452 + 41%";
            setTaxPer(output); 
            setTaxOutPut(totalTaxAmmount); 
            // console.log(totalTaxAmmount)  
        } else if (taxAmount >= 1731601 ) {
            let totalTaxAmmount = ((taxAmount * 0.45) -614192).Math.round(2);
            let output = "614192 + 45%";
            setTaxPer(output);    
            console.log(totalTaxAmmount);
            setTaxOutPut(totalTaxAmmount);
        } 

    const newIncome = (total*12 - taxOutPut)/12; 

    setAfterTax(newIncome)

    }, [householdIncome])




   

console.log(1000 * 0.18)

 

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
                    content={"R " + total }
                    extra={<p className='text-center'><strong>Income before tax</strong></p>}
                    id = "total"
                />
                <Info
                    heading={"TOTAL TAX"}
                    content={taxper}
                    extra={<p className='text-center'>R {Math.round(taxOutPut/12)}</p>}
                />
                <Info
                    heading={"INCOME AFTER TAX"}
                    content={"R "+total + " - " + "R " + Math.round(taxOutPut/12)}
                    extra={<p className='text-center'>R {Math.round(AfterTax)}</p>}
                />
                <Col md={{ span: 11 }}>
                    <form>
                        <input value={val} ref={name} className='input' aria-label='name' name='name' placeholder='Enter name...' type={"text"} id='one' />
                        <input value={val} ref={income} className='input' aria-label='income' name='income' placeholder='Enter amount...' type={"number"} onKeyPress={(event) => { event.key === "Enter" && clickValue()}}/>
                        <Col md={2} className="butn" aria-label='button'><Button function={()=>clickValue()} id={"add"} icon={<RiMoneyDollarCircleLine color={'white'} size={25} />} text="ADD INCOME" /></Col>
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
                            </>
                    }
                </Col>
            </Col>
        </>
    );
};

export default Main;




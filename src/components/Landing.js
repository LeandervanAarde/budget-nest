import React, {useState} from 'react';
import { Col } from 'react-bootstrap';
import Button from './subcomponents/Button/Button';
import { Link } from 'react-router-dom';
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Landing = (props) => {
    const [showPage, setShowPage] = useState(false);


    return (
     <Col sm={12} md={12} className="backgroundCon">
         <Col sm={{span: 10, offset: 1}} md={{span:6, offset: 3}} className="introCon">
            <Col sm={{span:4, offset:4}} className="logoCon"> </Col>
            <h1>Finance Tracker</h1>
            <h2>Track and budget all your household finances</h2>
            <Link to="/">
            <Col sm={{span: 8, offset: 2}} md={{span: 4, offset: 4}}>
                <Button
                    text = "Get Started"
                    icon = {<RiMoneyDollarCircleFill size={40} color={"White"}/>}
                    function = {props.func}
                />
            </Col>
            </Link>
         </Col>
     </Col>
    );
};

export default Landing;
import React from 'react';
import { Col } from 'react-bootstrap';
import { RiHome2Line, RiLogoutBoxLine, RiShoppingBagLine, RiCoinsLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
const Navigation = () => {
    return (
        <Col md={2} className="navCon">
            <Col sm={12} className="logoCon"></Col>
            <NavLink to="/Home">
                <Col sm={12} className="navItem">
                    <RiHome2Line className="svg" color={'white'} size={25} />
                    <p className='text'>TOTAL INCOME</p>
                </Col>
            </NavLink>

            <NavLink to="/TotalExpenses">
                <Col sm={12} className="navItem">
                    <RiShoppingBagLine className="svg" color={'white'} size={25} />
                    <p className='text'>TOTAL EXPENSES</p>
                </Col>
            </NavLink>

            <NavLink to="/TotalSavings">
            <Col sm={12} className="navItem">
                <RiCoinsLine className="svg" color={'white'} size={25} />
                <p className='text'>TOTAL SAVINGS</p>
            </Col>
            </NavLink>

            <NavLink to="/">
            <Col md={{ span: 8, offset: 2 }} className="btnCon" id="but">
                <Button
                    icon={<RiLogoutBoxLine color={'white'} size={25} />}
                    text="Exit"
                    id = "exbt"
                />
            </Col>
            </NavLink>

        </Col>
    );
};

export default Navigation;
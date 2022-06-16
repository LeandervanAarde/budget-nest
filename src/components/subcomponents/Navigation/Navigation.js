import React from 'react';
import { Col } from 'react-bootstrap';
import { RiHome2Line, RiLogoutBoxLine, RiShoppingBagLine, RiCoinsLine } from "react-icons/ri";
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';
const Navigation = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const scroll = useScrollToBottom();
    
    return (
        <Col md={2} className="navCon">
            <Col sm={12} className="logoCon"></Col>
        
                <Col sm={12} className="navItem" >
                    <RiHome2Line className="svg" color={'white'} size={25} />
                    <p className='text'>TOTAL INCOME</p>
                </Col>
   

       
                <Col sm={12} className="navItem" onClick={scroll}>
                    <RiShoppingBagLine className="svg" color={'white'} size={25} />
                    <p className='text'>TOTAL EXPENSES</p>
                </Col>
    
            
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
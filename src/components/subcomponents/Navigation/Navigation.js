import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { RiHome2Line, RiLogoutBoxLine, RiShoppingBagLine, RiCoinsLine } from "react-icons/ri";
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';
import { Link, animateScroll as scroll } from "react-scroll";
const Navigation = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const scroll = useScrollToBottom();
    const [active, setActive] = useState(false);
    
    const toggle = () =>{
        setActive(!active);
    }
    
    return (
        <Col md={2} className="navCon">
            <Col sm={12} className="logoCon"></Col>
        <Link onClick={toggle} spy={true} smooth={true} duration={250} to='section1'>
             <Col sm={12} className="navItem" >
                    <RiHome2Line className="svg" color={'white'} size={25} />
                    <p className='text'>TOTAL INCOME</p>
             </Col>
        </Link>

   

        <Link onClick={toggle} spy={true} smooth={true} duration={250} to='section2'>      
                <Col sm={12} className="navItem" onClick={scroll}>
                    <RiShoppingBagLine className="svg" color={'white'} size={25} />
                    <p className='text'>TOTAL EXPENSES</p>
                </Col>
        </Link>
    
            
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
import React from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";

const Household = (props) => {
    return (
        <tr >
            <td> {props.number}</td>
            <td>{props.name}</td>
            <td> R {props.amount}</td>
            <td>{props.taxBrack}</td>
            <td>{props.taxAmount}</td>
             <td>{props.afterTax}</td>
             <td className='del' onClick={props.delete}><MdOutlineDeleteForever color={"red"} size={"26"}/></td>
        </tr>
    );
};

export default Household;






import React from 'react';

const Household = (props) => {
    return (
        <tr>
            <td> {props.number}</td>
            <td>{props.name}</td>
            <td> R {props.amount}</td>
            <td>{props.taxBrack}</td>
            <td>{props.taxAmount}</td>
             <td>{props.afterTax}</td>
        </tr>
    );
};

export default Household;
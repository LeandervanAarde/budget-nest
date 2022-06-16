import React from 'react';

 export const IndividualTd = (props) => {
    return (
        <tr>
            <td> {props.number}</td>
            <td>{props.user}</td>
            <td> R {props.amount}</td>
            <td>{props.expense}</td>
            <td>{props.expNm}</td>
            <td>{props.save}</td>
            <td>{props.saveA}</td>
        </tr>
    );
};

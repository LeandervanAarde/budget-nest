import React from 'react';

const Household = () => {
    return (
        <table>
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
            <tr>
                <td>1</td>
                <td>Leander</td>
                <td>R 12 000.00</td>
                <td>15%</td>
                <td>R1500.00</td>
                <td>R10 500.00</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Household;
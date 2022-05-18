import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
const DoughnutChart = () => {
    return (
        <Doughnut data={{
            dataset:["PersonOne, Persontwo, PersonThree, PersonFour, PersonFive"],
            datasets: [{
                label: "ek wil slaap",
                data: [42,500,1200,9, 750, 1200],
                backgroundColor: [
                    "#48D87F",
                    "#2494FA",
                    "#7F6EE1"
                 ], 
                 bordewidth: 0,
                 borderColor:'transparent'
            }],
        }} height={320}
        options={{
            responsive: true, 
            maintainAspectRatio: true, 
            plugins: {
                decimation: {
                    enabled: true,
                },
                title: {
                    display: true,
                    text: "HouseholdIncome",
                    position: "bottom",
                    color: "white",
                    font: {
                        size: 24,
                        weight: "bold",
   
                    }
                },
                legend: {
                    position: "bottom",
                    labels: {
                        display: true,
                        padding: 30,
                        boxWidth: 30,
                        boxHeight: 20,
                    }
                }
            },
            animation: {
                easing: 'easeInOutBounce',
                duration: 1800,
                numSteps: 2,
            },
        }}
        />
    );
};

export default DoughnutChart;
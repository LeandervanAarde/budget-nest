import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
const DoughnutChart = (props) => {
    return (
        <Doughnut data={{
            dataset: props.name,
            datasets: [{
                label: "ek wil slaap",
                data: props.data,
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
                labels:{
                    display: true,
                },
                title: {
                    display: true,
                    text: "Total Yearly income",
                    position: "bottom",
                    color: "white",
                    font: {
                        size: 18,
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
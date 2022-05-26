import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CanvasHTMLAttributes } from 'react';
import 'chart.js/auto';
const BarChart = (props) => {
    return (
        
     <Bar  data={{
        labels: props.name,
        datasets:[{
            data: props.data, 
            backgroundColor: [
                " #48D87F",
                "#2494FA",
                "#7F6EE1"
             ], 
        }],
     }}
     height={320}
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
                 position: "left",
                 color: "white",
                 font: {
                     size: 24,
                     weight: "bold",

                 }
             },
             legend: {
                 position: "bottom",
                 display: false,
                 labels: {
                     display: false,
                     padding: 30,
                     boxWidth: 30,
                     boxHeight: 20,
                 }
             }
         },
         indexAxis: 'x',
         
         animation: {
             easing: 'easeInOutBounce',
             duration: 1800,
             numSteps: 2,
         },
         datasets: {
             bar: {
                 base: 0,
                 borderWidth: 3,
                 hoverBorderColor: "white",
                 hoverBorderWidth: 3,
                 borderRadius: 10,
             }
         }
     }}
     />
    );
};

export default BarChart;
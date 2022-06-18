import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';
const PolarAreaChart = (props) => {
    return (
       
        <PolarArea data={{
            labels: props.name,
            datasets: [
                {
                    data: props.data,

                    backgroundColor: ["#48D87F", "#2494FA", "#7F6EE1"],
                    borderColor: "transparent",
                }
            ],
        }}
            height={350}
            options={{
                maintainAspectRatio: true,

                animation: {
                    animateRotate: false,
                    animateScale: true,
                    easing: "linear",
                    duration: 2000,
                },
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 10
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                        position: "top",
                        fontSize: "14px",

                    },
                    title: {
                        display: true,
                        text: "Yearly income after tax",
                        position: "top",
                        color: "white",
                        font: {
                            size: 17,
                            weight: "bold",
                        }
                    },
                },
                legend: {
                    font: {
                        display: true,
                        size: "12px",
                        weight: "bold",
                    },
                },
            }}
        />
     
    );
};
export default PolarAreaChart;
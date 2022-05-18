import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import 'chart.js/auto';
const PolarAreaChart = () => {
    return (
        <PolarArea data={{
            labels: ["Name1", "Name2", "Name2", "name4", "Name4"],
            datasets: [
                {
                    data: [1, 3, 4, 10, 15, 19,],

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
                                size: 24
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
                        text: "Tax amount",
                        position: "top",
                        color: "white",
                        font: {
                            size: 24,
                            weight: "bold",
                        }
                    },
                },
                legend: {
                    font: {
                        display: true,
                        size: 18,
                        weight: "bold",
                    },
                },
            }}
        />
    );
};
export default PolarAreaChart;
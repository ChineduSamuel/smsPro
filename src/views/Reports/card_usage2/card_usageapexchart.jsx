import React, { Component } from "react";
import Chart from 'react-apexcharts';
import MainLayout from "../../../components/MainLayout/MainLayout";


class ApexChartUi extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            series: [61, 41, 55, 35],
            options: {
                chart: {
                    width: 380,
                    type: 'polarArea'
                },
                labels: ['Organization%', 'Birthday%', 'Teams%', 'My Account%',],
                fill: {
                    opacity: 1
                },
                stroke: {
                    width: 1,
                    colors: undefined
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        shadeIntensity: 0.6
                    }
                }
            },

        };
    }



    render() {


        return (
            <MainLayout>
                <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="polarArea" width={500} />

                </div>


            </MainLayout>
        )
    }

}

export default ApexChartUi

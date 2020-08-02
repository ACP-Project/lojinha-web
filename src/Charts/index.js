import React from 'react';
import { VictoryChart, VictoryArea } from 'victory';

export default () => {
    const chartsData = [
        {
            month: "Jan", 
            earnings: 35
        },
        {
            month: "Fev",
            earnings: 48
        },
        {
            month: "Mar", 
            earnings: 40
        },
        {
            month: "Apr", 
            earnings: 60
        },
        {
            month: "May", 
            earnings: 8
        },
        {
            month: "Jun", 
            earnings: 4
        },
        {
            month: "Jul", 
            earnings: 15
        },
        {
            month: "Aug", 
            earnings: 154
        },
        {
            month: "Sep", 
            earnings: 48
        },
        {
            month: "Oct", 
            earnings: 60
        },
        {
            month: "Nov", 
            earnings: 35
        },
        {
            month: "Dez", 
            earnings: 12
        }
    ]


    return (
    <>
        <div className="Chart">
           <VictoryChart>
            <VictoryArea 
                style={{
                    data: { fill: "rgba(108, 92, 231, 0.4)" },
                }}
                interpolation="natural"
                data={chartsData}
                x="month"
                y="earnings"
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
            />
            </VictoryChart> 
        </div>
    </>
    );
}


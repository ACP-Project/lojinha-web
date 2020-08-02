import React from 'react';
import './ProfileDataArea.css';

export default () => {
    const data = [
        {
            title: "Itens no estoque",
            amount: 20
        },
        {
            title: "Funcionários",
            amount: 5
        }
    ]


    return (
    <>
        {data.map(ProfileDataArea => {
            return ( 
                <>
                    <div className="Data">
                        <div className="DataTitle">
                            <text>{ProfileDataArea.title}</text>
                        </div>
                        <div className="DataAmount">
                            <text>{ProfileDataArea.amount}</text>
                        </div>
                    </div>     
                </> 
            )
        })}
    </>
    );
}


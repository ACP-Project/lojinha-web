import React from 'react';
import './Employees.css';

export default () => {
    const employeesData = [
        {
            name: "Mega Chad",
            job: "Main Lulu",
            src: "/megachat.png"
        },
        {
            name: "João",
            job: "Desenvolvedor",
            src: "/logo192.png"
        },
        {
            name: "Clara",
            job: "Marketing",
            src: "girl.png"
        },
        {
            name: "João",
            job: "Caixa",
            src: "Profile.png"
        }
    ]


    return (
    <>
        {employeesData.map(Employees => {
            return ( 
                <>
                    <div className="Employee">
                        <div className="Employee_Img">
                            <img src={process.env.PUBLIC_URL + Employees.src} width={50} height={50}/>
                        </div>
                        <div className="Employee__Name">
                            <text>{Employees.name}</text>
                        </div>
                        <div className="Employee__Job">
                            <text>{Employees.job}</text>
                        </div>
                    </div>    
                </> 
            )
        })}
    </>
    );
}


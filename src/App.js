import React from 'react';
import './App.css';
import ProfileDataArea from './ProfileDataArea';
import Employees from './Employees';
import Charts from './Charts';

function App() {
  return (
    <>
      <div className="Header">
        <div className="Search">
          <img src={process.env.PUBLIC_URL + '/search.svg'} width={25} height={25}/>
          <text style={{marginLeft: 10}}>Procurar</text>
        </div>
        <div className="Settings">
          <img src={process.env.PUBLIC_URL + '/gear.svg'} width={30} height={30}/>
        </div>
      </div>
      <div className="Fullscreen">
        <div className="TopBox">
          <div className="Profile">
            <div className="Profile__Welcome">
              <text style={{fontSize: 35}}>Hello, owner</text>
              <text>Lojinha</text>
            </div>
            <div className="Profile__DataArea">
              <ProfileDataArea />
            </div>
          </div>
        </div>
        <div className="Body">
          <text>Funcionários</text>
          <div className="MiddleBox">
            <Employees/>
          </div>
          <text>Estatísticas (Mês/Qtd Vendida)</text>
          <div className="BottomBox">
            <Charts />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

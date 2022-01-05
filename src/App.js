import React from 'react';
import './App.css';
import ImportantComponent from './R003_ImportComponent';
import LifecycleEx from './R004_LifecycleEx';
import LifecycleEx2 from './R005_LifecycleEx';

function App(){
    return (
      <div>
        <h1>START REACT 200</h1>
        <p>HTML 적용하기</p>
        <ImportantComponent></ImportantComponent>
        <LifecycleEx></LifecycleEx>
        <LifecycleEx2></LifecycleEx2>
      </div>
    );

}
export default App;
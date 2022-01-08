import React from 'react';
import './App.css';
// import ImportantComponent from './R003_ImportComponent';
// import LifecycleEx from './R004_LifecycleEx';
// import LifecycleEx2 from './R005_LifecycleEx';
// import LifecycleEx3 from './R006_LifecycleEx';
// import LifecycleEx4 from './R007_LifecycleEx';
// import LifecycleEx5 from './R008_LifecycleEx';
//import Es6 from './R009_Es6';
//import Variable from './R010_Variable';
//import SpreadOperator from './R011_SpreadOperator';
import ClassPrototype from './R012_ClassPrototype';

function App(){
    return (
      <div>
        <h1>START REACT 200</h1>
        <p>HTML 적용하기</p>
        {/* <ImportantComponent></ImportantComponent>
        <LifecycleEx></LifecycleEx>
        <LifecycleEx2></LifecycleEx2>
        <LifecycleEx3 prop_value = 'FromApp.js' />  
        <LifecycleEx4 prop_value = 'FromApp.js' />   
        <LifecycleEx5 prop_value = 'FromApp.js' />  
        <Es6 /> 
        <Variable /> 
        <SpreadOperator /> */}
        <ClassPrototype />

      </div>
    );

}

export default App;
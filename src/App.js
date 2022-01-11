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
//import ClassPrototype from './R012_ClassPrototype';
//import ArrowFunction from './R013_ArrowFunction'
//import ForEach from './R014_ForEach'
//import Map from './R015_Map'
//import Jquery from './R016_Jquery'
//import Props from './R017_Props'
import PropsDatatype from './R018_PropsDatatype'
<<<<<<< HEAD
//import PropsBoolean from './R019_PropsBoolean'
//import PropsObjVal from './R020_PropsObjVal'
=======
>>>>>>> cc6f4869ef0caa56211e5a10062687fca1c3ae6f

function App(){
    return (
      <div>
        <h1>START REACT 200</h1>
        <p>CSS 적용하기</p>
        
        {/* <ImportantComponent></ImportantComponent>
        <LifecycleEx></LifecycleEx>
        <LifecycleEx2></LifecycleEx2>
        <LifecycleEx3 prop_value = 'FromApp.js' />  
        <LifecycleEx4 prop_value = 'FromApp.js' />   
        <LifecycleEx5 prop_value = 'FromApp.js' />  
        <Es6 /> 
        <Variable /> 
        <SpreadOperator /> 
        <ClassPrototype />
        <ArrowFunction />
        <ForEach />
        <Map />
        <Jquery />
        <Props props_val="THIS IS PROPS" />        
        <PropsObjVal ObjectJson = {{react:"리액트",twohundred:"200"}}/>
        <PropsBoolean BooleanTrueFalse = {false}/> false값을 넣은 후 props에 담아 하위 컴포넌트로 전달 
        <PropsBoolean BooleanTrueFalse /> 변수만 선언하고 할당 없이 props에 담아 전달 
        */} 
         <PropsDatatype 
        String ="react" 
        Number ={200}
        Boolean={1==1}
        Array = {[0,1,8]}
        ObjectJson = {{react:"리액트", twohundred:"200"}}
<<<<<<< HEAD
        Function = {console.log("FunctionProps: function!")}/>         
        

=======
        Function = {console.log("FunctionProps: function!")}/> 
>>>>>>> cc6f4869ef0caa56211e5a10062687fca1c3ae6f
      </div>
    );

}

export default App;
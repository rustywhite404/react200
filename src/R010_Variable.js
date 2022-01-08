import React, {Component} from "react";

class R010_Variable extends Component{
   constructor(props){
       super(props);
       this.state = {};
   }

   componentDidMount(){
    var varName = 'react';
    console.log('varName1:'+varName);
    var varName = '200'; // varName 은 이미 사용중임. 하지만 var은 재선언, 재할당을 허용하기 때문에 경고가 출력돼도 페이지는 정상적으로 표시된다.
    console.log('varName2:'+varName);

    let letName = 'react';
    console.log('letName1:'+letName);
    //let letName = '200'; 
    //console.log('letName2:'+letName);
    letName = '200'; //let은 재선언을 허용하지 않고, 재할당은 허용하므로 기존에 만들어놓은 letName을 활용해야 한다. 
    console.log('letName2:'+letName); 

    const constName = 'react';
    console.log('constName:'+constName);
    //const constName = '200';
    //constName = '200';
    //const는 재선언, 재할당 모두 허용하지 않는다(1회성)
   }

   render(){
       return(
           <h2>[THIS IS Variable]</h2>
       )
   }
}
export default R010_Variable;
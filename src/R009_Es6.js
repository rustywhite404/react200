import React, {Component} from "react";

class R009_Es6 extends Component{
   constructor(props){
       super(props);
       this.state = {};
   }

   componentDidMount(){
    var jsString1 = '기존 자바스크립트에서는 줄바꿈을 하려면';
    var jsString2 = '개행문자를\n사용해야 합니다.';
    console.log(jsString1+' 문자열'+jsString2+"~");

    var Es6String1 = '백틱(`)으로 문자열과 변수를 묶어 사용하면';
    var Es6String2 = '개행문자 없이도 개행이 가능합니다.';
    console.log(`${Es6String1} ^ㅁ^ ${Es6String2}
    -----------변수는 $ { 변수명 } 형태로 넣을 수 있습니다.`);

    var LongString = "ES6에 추가된 String 함수들입니다.";
    console.log('startWith:'+LongString.startsWith("ES6에 추가"));
    console.log('endsWith:'+LongString.endsWith("함수들입니다."));
    console.log('includes:'+LongString.includes("추가된 String"));
    //startWith()는 변수 앞에서부터, endsWith()는 뒤에서부터 일치하는 문자열이 있는지 찾는다.
    //includes()는 위치에 상관없이 변수에 특정 문자열이 포함되어 있는지 판단한다.
    //함수 조건에 부합하면 TRUE, 아니면 FALSE를 반환한다.
   }

   render(){
       return(
           <h2>[THIS IS ES6 STRING]</h2>
       )
   }
}
export default R009_Es6;
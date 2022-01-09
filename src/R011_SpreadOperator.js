import React, {Component} from "react";

class R011_SpreadOperator extends Component{
   constructor(props){
       super(props);
       this.state = {};
   }

   componentDidMount(){
    //javaScript Array
    var varArray1 = ['num1','num2'];
    var varArray2 = ['num3','num4'];

    var sumVarArray = [varArray1[0],varArray1[1],varArray2[0],varArray2[1]];
    // var sumVarArray = [].concat(varArray1,varArray2);
    console.log('1.sumVarArray :'+ sumVarArray);
    // 기존 ES5 문법에서 배열 2개를 합칠 때 사용했던 두 가지 방법. 
    // 배열에 인덱스로 접근해 값을 가져오거나 CONCAT을 사용해야 했다. 
    
    //ES6에서는 전개 연산자 (...)를 배열명 앞에 붙여서 여러개의 배열을 합칠 수 있다. 
    let sumLetArr = [...varArray1, ...varArray2];
    console.log('2. sumLetArr:'+sumLetArr);
    
    const[sum1, sum2, ...remain] = sumLetArr; //sumLetArr 배열의 값을 추출해 개별 변수에 넣는다(순서대로 대입). 나머지 값은 마지막에 전개 연산자 처리 된 ...remain에 담는다.
    console.log('3.sum1:'+sum1+", sum2:"+sum2+",remain:"+remain);

    var varObj1 = {key1:'val1', key2:'val2'}
    var varObj2 = {key2:'new2', key3:'val3'}
    
    //ES5 Object 
    var sumVarObj = Object.assign({}, varObj1, varObj2);
    console.log('4.sumVarObj:'+JSON.stringify(sumVarObj));
    //ES5에서는 객체 2개를 합치기 위해서는 assign 함수를 이용해야 했다. 
    //ES6에서는 ...을 객체명 앞에 붙여 여러개의 객체를 합칠 수 있다.

    var sumLetObj = {...varObj1, ...varObj2};
    console.log('5. sumLetObj:'+JSON.stringify(sumLetObj));

    var {key1, key3, ...others} = sumLetObj;
    console.log('6.key1:'+key1+",key3:"+key3+",others:"+JSON.stringify(others))


   }

   render(){
       return(
           <h2>[THIS IS SpreadOperator]</h2>
       )
   }
}
export default R011_SpreadOperator;
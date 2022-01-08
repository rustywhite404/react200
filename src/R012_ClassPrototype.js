import React, {Component} from "react";

class R010_Variable extends Component{
   constructor(props){
       super(props);
       this.state = {};
   }

   componentDidMount(){
    //ES5 Prototype 
    var ExamCountFunc = (function(){

        function ExamCount(num){ //생성자 함수를 실행하는데, 파라미터로 전달받은 num 변수의 값(200)을 객체 number에 저장한다. 
            this.number = num;
        }
        ExamCount.prototype.showNum = function(){ //생성자 함수명.prototype.함수명 형태로 선선해주면, 객체 외부에서 이 내부의 함수를 실행해 객체 내부에 선언된 함수로 사용할 수 있다. 
            console.log('1. react_'+this.number);
        };
        return ExamCount;    
   }());
     
   var cnt = new ExamCountFunc('200'); //ExamCountFunc() 실행 후 return 되는 결괏값을 cnt에 저장한다.
   cnt.showNum(); //객체 안에 저장된 함수를 실행한다. 


   //ES6 class 
   class ExamCountClass{ //객체를 class로 선언한다 
       constructor(num2){ //constructor라는 생성자 함수가 실행되고, 파라미터로 전달받은 num2를 number2에 저장한다. 
           this.number2 = num2;
       }
       showNum(){ //객체 안의 showNum이 실행되면, 
           console.log(`2.react_${this.number2}`); //생성자 함수에서 2hundred로 항당된 객체 변수 number2를 사용한다.
       }
   }

   var cnt2 = new ExamCountClass('2hundred');
   cnt2.showNum();

   }

   render(){
       return(
           <h2>[THIS IS Class]</h2>
       )
   }
}
export default R010_Variable;
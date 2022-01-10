import React, {Component} from "react";

class R013_ArrowFunction extends Component{
   constructor(props){
       super(props);
       this.state = {
           arrowFuc : 'REACT200',
           num : 3
       };
   }

   componentDidMount(){
    Function1(1); //Function 1~5까지의 함수를 순서대로 호출한다.
    this.Function2(1,1);
    this.Function3(1,3);
    this.Function4();
    this.Function5(0,2,3);

    function Function1(num1){
        return console.log(num1+". ES5 FUNCTION");
    } 
   }

   Function2 = (num1, num2) => { //function문자열 대신 => 로 함수를 선언했다. 
    let num3 = num1+num2;
    console.log(num3+'. Arrow Function :'+this.state.arrowFuc); // this로 컴포넌트의 state 변수에 접근해 사용할 수 있다.
    }

    Function3(){
        var this_bind = this; //콜백 함수 내부에서는 컴포넌트에 this로 접근할 수 없기 때문에, 접근할 수 있는 변수에 this를 백업한다. 
        setTimeout(function(){ 
            console.log(this_bind.state.num+". ES5 CALLBACK FUNCTION NOBIND:"); //백업된 변수인 this_bind를 이용해 state 변수에 접근할 수 있다. 
            console.log(this.state.arrowFuc); //콜백 함수 내부에서 this는 윈도우 객체이기 때문에, this로 state에 접근하면 undefined 에러가 발생한다.
        },100);
    }

    Function4(){
        setTimeout(function() {
            console.log('4.ES5 CALLBACK FUNCTION BIND:'+this.state.arrowFuc);
        }.bind(this),100); //콜백 함수에 함수 밖의 this를 bind 해주면, this를 컴포넌트로 사용할 수 있다.
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1+num2+num3;
        setTimeout(()=>{ //화살표 함수에서는 this를 bind 해주지 않아도 this를 컴포넌트로 사용해 state에 접근할 수 있다.
            console.log(num4+".Arrow callback Function:"+this.state.arrowFuc);
        },100)
    }

   render(){
       return(
           <h2>[THIS IS ArrowFunction]</h2>
       )
   }
}
export default R013_ArrowFunction;
import React, {Component} from "react";
class R017_Props extends Component{

   render(){
       let props_value = this.props.props_val; //this.props. 뒤에 상위 컴포넌트(App.js)에서 전달받은 props 변수명을 붙이면 해당 데이터를 사용할 수 있다.
       props_value += ' from App.js';
       return(
        <div>{props_value}</div>
       )
   }
}
export default R017_Props;
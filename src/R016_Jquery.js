import React, {Component} from "react";
import $ from 'jquery'; // jquery를 임포트해 $기호를 선언한다. jquery를 쓸 때 $를 붙여야 한다는 뜻. 
class R016_Jquery extends Component{

    input_alert = (e) =>{
        var input_val = $('#inputId').val(); //함수가 호출되면 jquery문법으로 inputId에 접근한다. 여기서 입력한 value를 가져와 input_val에 저장한다. 
        alert(input_val);
    }
   render(){
       return(
        <div>
           <h2>[THIS IS Jquery]</h2>
           <input id="inputId" name="inputName" />
           <button id="buttonId" onClick={e=>this.input_alert(e)}>JQueryButton</button> 
        </div>
       )
   }
}
export default R016_Jquery;
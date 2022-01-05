import React, {Component} from "react";

class R0004_LifecycleEx extends Component{
    render(){ //render()는 return되는 html 형식의 코드를 화면에 그려주는 함수다. 화면 내용이 변경되어야 할 시점에 자동으로 호출된다.
        console.log('3. render Call');
        return(
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}
export default R0004_LifecycleEx;
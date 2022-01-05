import React, {Component} from "react";

class R005_LifecycleEx extends Component{
    constructor(props){ //constructor(props)는 생명주기 함수 중 가장 먼저 실행되며, 처음 한 번만 호출된다. component 내부에서 사용되는 변수state를 선언하고, 부모 객체에서 전달받은 변수를 초기화 할 때 사용한다.
        super(props); //super()함수는 가장 위에 호출해야 한다.
        this.state = {};
        console.log('1. constructor call');
    }

    render(){
        console.log('3.render Call');
        return(
            <h2>[THIS IS constructor FUNCTION]</h2>
        )
    }

}
export default R005_LifecycleEx;
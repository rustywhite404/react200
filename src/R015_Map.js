import React, {Component} from "react";

class R015_Map extends Component{

    componentDidMount(){
        var Map_Arr = [3,2,8,8];
        let Map_newArr = Map_Arr.map(x=>x); //기존 배열에서 map을 사용해 순서대로 하나씩 요소를 가져온다. 가져온 값을 변수 x에 넣은 후 그대로 반환해 쌓아놓고, 마지막에 한 번에 새 배열에 저장한다.
        console.log("1.Map_newArr:["+Map_newArr+"]");

        let Map_multiArr = Map_Arr.map(x=>x*2); //기존 배열Map_Arr에 순서대로 접근 후 각각 2를 곱해 새로운 배열에 저장한다. 
        console.log("2.Map_multiArr: ["+Map_multiArr+"]");

        var ObjArray = [{
            key:'react', value:'200'},
            {key:'리액트', value:'이백'}]; 
        let Map_objArr = ObjArray.map((obj,index)=>{ 
            console.log((index+3)+".obj:"+JSON.stringify(obj));
            var Obj = {};
            Obj[obj.key] = obj.value; //새로운 객체 Obj 선언. 기존 객체의 키/값을 새로운 객체의 키/값으로 저장한다. 
            return Obj;
        });
        console.log("5. Map_objArr:"+JSON.stringify(Map_objArr));

    }
   render(){
       return(
           <h2>[THIS IS Map]</h2>
       )
   }
}
export default R015_Map;
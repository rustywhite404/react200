import React, {Component} from "react";
import datatype from 'prop-types';

class R022_PropsDefault extends Component{
   render(){
      let{
          ReactString,
          ReactNumber
      } = this.props
      return(
          <div style={{padding:"0px"}}>
              {ReactString}{ReactNumber}
          </div>
      )
   }
}

R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNumber: 400 //ReactNumber 변수값은 상위 컴포넌트에서 전달되기 때문에 여기서 지정한 기본값은 무시된다.
}

export default R022_PropsDefault;
import { Div } from "../../styled"

export default function Scene(props) {
    return (    
      <Div active={props.active}><p>{props.p}</p></Div>    
    )
}

  
 
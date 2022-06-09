import { Btn } from "../styled"

export default function Button(props) {
    return (
        <Btn onClick={props.myFunc}>{props.buttonText}</Btn>
    )
}
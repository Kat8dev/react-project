import React from "react"
import { Btn } from "../styled"

export default function Button(props) {
    return (
        <Btn onClick={props.myfunc}>{props.buttonText}</Btn>
    )
}
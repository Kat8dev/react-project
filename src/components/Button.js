import React from "react"
import { Btn } from "../styled"

export default function Button(props) {
    return (
        <Btn>{props.buttonText}</Btn>
    )
}
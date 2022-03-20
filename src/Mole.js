import {useEffect} from "react"
import mole from "./mole.png"

export function Mole(props){
    useEffect(() => {
        let randomTimer = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setMole(false)
        }, randomTimer)

        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img src={mole} onClick={props.handleClick}></img>
        </div>
    )
}
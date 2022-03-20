import {useEffect} from "react"
import molehill from "./molehill.png"

export function EmptySlot(props){
    useEffect(() => {
        let randomTimer = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setMole(true)
        }, randomTimer)

        return () => clearTimeout(timer)
    })

    return(
        <div>
            <img src={molehill}></img>
        </div>
    )
}
import {Mole} from "./Mole.js"
import {EmptySlot} from "./EmptySlot.js"
import {useState} from "react"

export function MoleContainer(props){
    let [mole, setMole] = useState(false)

    const handleClick = () => {
        props.setScore(props.score + 1)
        setMole(false)
    }
    let displayMole = mole ? <Mole setMole={setMole} handleClick={handleClick}/> : <EmptySlot setMole={setMole}/>

    return(
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}
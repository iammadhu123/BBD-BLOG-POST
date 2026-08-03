import React, { useState } from 'react'


export const Try = () => {

    const [state, setState] = useState(0)
    // const [count, setCount] = useState(0)
    // const [record, setRecord] = useState([])
    // console.log(useState(0));

    const decerement = () => {
        // alert("Ok")
        setState(state - 1)
    }

    const increment = () => {
        setState(state + 1)
    }

    return (
        <>
            {
                console.log("re -render")

            }
            <div style={{ textAlign: "center" }}>
                {state}
                <br />
                <br />
                <input type="submit" value="Decrement" onClick={decerement} />&nbsp;
                <input type="submit" value="Increment" onClick={increment} />&nbsp;
            </div>
        </>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import './App.css'
import { types } from './types'

const style = {
    border: "1px dashed black",
    marginBottom: ".5rem",
    padding: "0.5rem 1rem",
    backgroundColor:"white",
    cursor:"move"
}
function Box() {
    const [boxes, setBoxes] = useState([]);
    const [count, setCount] = useState(0);


    function handleClick() {
        setCount(count+1);
    }

    function handleClearClick(){
        setCount(0);
    }

    function handleDelete()
    {
        setBoxes([]);
    }

    useEffect(() => {
        console.log('hi')
    }, [count])
    
    const [{isOver}, dropRef] = useDrop(() => ({
        accept: types.CARD,
        drop: (item) => {
            setBoxes((prevState) => {
                return [...prevState, item]
            })
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        canDrop: (monitor) => {
            return monitor.name === "Text" || monitor.name === "Button";
        }
    }))

    return (
        <div className='box' ref={dropRef} style={{backgroundColor: isOver ? '#eee': '#ccc'}}>
            <button onClick={handleClick}>{count}</button>
            <button onClick={handleClearClick}>Clear Click</button>
            <button onClick={handleDelete}>Delete</button>
            {boxes.map((box, index) => <div style={{...style}} className="card" key={index}>{box.name}</div>)}
        </div>
    )
}

export default Box

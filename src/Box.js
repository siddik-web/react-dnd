import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import './App.css'
import { types } from './types'


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
    
    const [{isOver}, drop] = useDrop(() => ({
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
        <div className='box' ref={drop} style={{backgroundColor: isOver ? '#eee': '#ccc'}}>
            <button onClick={handleClick}>{count}</button>
            <button onClick={handleClearClick}>Clear Click</button>
            <button onClick={handleDelete}>Delete</button>
            {boxes.map((box, index) => <div key={index}>{box.name}</div>)}
        </div>
    )
}

export default Box

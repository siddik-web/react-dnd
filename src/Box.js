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
            console.log(item)
            setBoxes((prevState) => {
                return [...prevState, item]
            })
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    
    return (
        <div className='box' ref={drop} style={{backgroundColor: isOver ? '#eee': '#ccc'}}>
            <button onClick={handleClick}>{count}</button>
            <button onClick={handleDelete}>Delete</button>
            {boxes.map((box, index) => <div key={index}>{box.name}</div>)}
        </div>
    )
}

export default Box

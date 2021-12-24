import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import './App.css'
import { types } from './types'


function Box() {
    const [boxes, setBoxes] = useState([]);
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
            {boxes.map((box, index) => <div key={index}>{box.name}</div>)}
        </div>
    )
}

export default Box

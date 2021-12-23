import React, { useState } from 'react'

function Card() {
    const [isDragging, setIsDragging] = useState(false)
  

    
    return (
        <div draggable 
        onDragStart={(e) => {setIsDragging(true); e.dataTransfer.setData('text/plain', JSON.stringify({type:'card'}))}} 
        onDragEnd={(e) => {setIsDragging(false); e.dataTransfer.clearData();}} 
        >
            <h1>Card</h1>
        </div>
    )
}

export default Card

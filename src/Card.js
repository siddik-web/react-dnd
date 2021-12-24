import React from 'react'
import './App.css'

function Card() {

    return (
        <div 
            draggable 
            onDragStart={(e) => {e.dataTransfer.setData('text/plain', JSON.stringify({type:'card'}))}} 
            onDragEnd={(e) => {e.dataTransfer.clearData();}} >
            <h2>Card</h2>
        </div>
    )
}

export default Card

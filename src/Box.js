import React from 'react'
import Card from './Card'
import './App.css'


function Box({card, moveCard}) {

    function handleDrop(e) {
        const dataJSON = e.dataTransfer.getData("text/plain");
        let data;
        try {
            data = JSON.parse(dataJSON);
        } catch {}
        if (data && data.type === "card") {
            moveCard();
        }
    }
    return (
        <div 
        className='box' 
        onDragOver={(e) => { if(e.dataTransfer.types[0] === 'text/plain') {e.preventDefault()}}}
        onDragLeave={() => {}}
        onDrop={handleDrop}>
            {card ? <Card/> : <h2>Box</h2>}
        </div>
    )
}

export default Box

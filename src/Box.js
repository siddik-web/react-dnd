import React, { useState } from 'react'
import Card from './Card'


function Box({card, moveCard}) {
    const [isOver, setIsOver] = useState(false);

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
        <div onDragOver={(e) => { if(e.dataTransfer.types[0] === 'text/plain') {setIsOver(true); e.preventDefault()}}}
        onDragLeave={() => {setIsOver(false)}}
        onDrop={handleDrop}>
            {card ? <Card/> : "Box"}
        </div>
    )
}

export default Box

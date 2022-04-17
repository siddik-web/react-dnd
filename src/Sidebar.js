import React, { useState } from 'react'
import Card from './Card'

function Sidebar() {
    const [cards, setCards] = useState([{id: 1, name: 'Text'}, {id: 2, name: 'Button'}]);
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
    )
}

export default Sidebar

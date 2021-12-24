import React from 'react'
import { useDrag } from 'react-dnd';
import './App.css'
import { types } from './types';

function Card(props) {
    const {id, name} = props.card;
    const [collection, drag] = useDrag(() => ({
        type: types.CARD,
        item: {
            id, name
        }
    }))
    
    return (
        <div ref={drag}>{name}</div>
    )
}

export default Card

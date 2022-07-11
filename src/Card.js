import React from 'react'
import {useDrag} from 'react-dnd';
import './App.css'
import { types } from './types';
const style = {
    cursor: "move"
}
function Card(props) {
    const {id, name} = props.card;
    const [collection, drag] = useDrag(() => ({
        type: types.CARD,
        item: {
            id, name
        }
    }));


    return (
        <div ref={drag} style={{...style}}>{name}</div>
    )
}

export default Card

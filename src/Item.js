import React from 'react'

export default function Item() {

  let items = [1,2,3,4,5];
  
  return items.map((item) => <div>Item {item}</div>);
}

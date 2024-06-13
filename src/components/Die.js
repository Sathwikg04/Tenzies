import React from 'react'

function Die(props) {
  return (
    <div 
    className={props.isHeld ? "die-held" : "die"}
    onClick={props.holdDice}>
      <h2 className='die-num'>{props.value}</h2>
    </div>
  )
}

export default Die
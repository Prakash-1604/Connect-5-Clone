import React from 'react'
import { playing } from './components'

const Footer1 = ({newgame,suggest,gamestate}) => {
  const render=()=>{
    if (gamestate==playing){
      return 
    }
    if (gamestate!=playing){
      return 
    }
  }
  return (
    <div className='footer'>
      <button  className='button' onClick={newgame}>New Game</button>
      <button className='button' onClick={suggest}>Suggest</button>
    
    </div>
  )
}

export default Footer1
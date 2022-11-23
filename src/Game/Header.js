import React from 'react'
import { draw,playing , over, start } from './components'

const Header = ({currentplayer,gamestate,winplayer}) => {

    const renderLabel=()=>{
        switch(gamestate){
            case draw:
                return <div>Game is Draw !</div>
            case playing:
                return <div>Player {currentplayer}  turn</div>;
            case over:
                return <div>Player {winplayer} win</div>;
            default:
        }
    }
  return (
    <div className='header'>{renderLabel()}</div>
  )
}

export default Header
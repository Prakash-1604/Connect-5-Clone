import React from 'react';
import GameCirle from './GameCirle';
import './Game.css'
import Header from './Header';
import Footer1 from './Footer1';
import { computer, isDraw, isWinner, randommove } from './helper';
import { draw,No_player,No_circles,playing,over,Player_1,Player_2 } from './components';



const GameBoard = () => {
  const [gameBoar, setgameBoar] =React.useState(Array(25).fill(No_player));
  const [currentplayer, setcurrentplayer] = React.useState(Player_1);
  const [gamestate, setgamestate] = React.useState(playing);
  const [winPlayer, setwinPlayer] = React.useState(No_player);

    const board=()=>{
      const circles=[];
      for(let i=0;i<No_circles;i++)
        circles.push(renderCircle(i));
      return circles;
    }
    const initialstate=()=>{
      setgamestate(playing)
      setgameBoar(Array(25).fill(No_player))
      setcurrentplayer(Player_1)
    }
    const randomg=()=>{
      circled(computer(gameBoar));
      console.log('rama rama')
    }
    const circled=(id)=>{
      console.log(id)
      if(gameBoar[id]!=No_player) return;
      if(gamestate!=playing) return;
      
      if(isWinner(gameBoar,currentplayer,id)){
        setgamestate(over);
        setwinPlayer(currentplayer);
      }
      if(isDraw(gameBoar,currentplayer,id)){
        setgamestate(draw);
      }

      setgameBoar(prev=>{
        return prev.map((circle,pos)=>{
          if(pos===id) return currentplayer;
          return circle;
        })
      })
      setcurrentplayer(currentplayer===Player_1 ? Player_2 : Player_1);
      console.log(gameBoar)
      console.log(currentplayer)
    }

    const renderCircle= id =>{
      return  <GameCirle key={id} oncircleclicked={circled} className={`player_${gameBoar[id]}`} id={id}>
      </GameCirle>
    }
    

  return (
     <>
     <Header gamestate={gamestate} currentplayer={currentplayer} winplayer={winPlayer}></Header>
      <div className='gameBoard'>
        {board()}
      </div>
    <Footer1 newgame={initialstate} suggest={randomg} gamestate={gamestate}></Footer1>
    </>
    
  )
}

export default GameBoard;
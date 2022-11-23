import React from 'react';

const GameCirle = ({id,className,oncircleclicked}) => {
    return (
      <div className={`gameCircle ${className}`}  onClick={()=>oncircleclicked(id)}>
        
      </div>
    )
}

export default GameCirle;
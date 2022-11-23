export const isWinner=(gameBoar,currentPlayer,currentMove)=>{
    let board =[...gameBoar];
     board[currentMove] = currentPlayer;

    const winLines=[
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],
        [0,6,12,18,24],
        [4,8,12,16,20],
        [0,5,10,15,20],
        [1,6,11,16,21],
        [2,7,12,17,22],
        [3,8,13,18,23],
        [4,9,14,19,24],
    ];
    for(let i=0; i<winLines.length;i++){
        const [c1,c2,c3,c4,c5]=winLines[i];

        if(board[c1]>0 &&
            board[c1]===board[c2] &&
            board[c2]===board[c3] &&
            board[c3]===board[c4] &&
            board[c4]===board[c5])
            {
            return true;
            }
    }
    return false;
}

export const isDraw =(gameBoar,currentPlayer,currentMove)=>{
    let board=[...gameBoar];
    board[currentMove]=currentPlayer;

    let count=board.reduce((n,x)=>n+(x===0),0);
    console.log('count:'+count);
    return count===0;
}

const randommove =(gameBoar)=>{
    let virtual=[];
    for (let k=0; k<gameBoar.length ;k++){
        if(gameBoar[k]===0)
        {  
             virtual.push(k);
        }
    }
    let randmove = Math.floor(Math.random()*virtual.length)
    return virtual[randmove];

}
const position =(gameBoar,checkMoves)=>{
    for(let check=0;check<checkMoves.length;check++){
        for(let i=0;i<checkMoves[check].max;i+=checkMoves[check].step){
            let series= gameBoar[i+checkMoves[check].indexes[0]].toString()+
                        gameBoar[i+checkMoves[check].indexes[1]].toString()+
                        gameBoar[i+checkMoves[check].indexes[2]].toString()+
                        gameBoar[i+checkMoves[check].indexes[3]].toString()+
                        gameBoar[i+checkMoves[check].indexes[4]].toString();
            switch(series){
                case '11110':
                case '22220':
                    return i+checkMoves[check].indexes[4];
                case '11101':
                case '22202':
                    return i+checkMoves[check].indexes[3];
                case '11011':
                case '22022':
                    return i+checkMoves[check].indexes[2];
                case '10111':
                case '20222':
                    return i+checkMoves[check].indexes[1];
                case '01111':
                case '02222':
                    return i+checkMoves[check].indexes[0];
            }
            
        }
    }
    return -1;
}
export const computer =(gameBoar)=>{
    let checkMoves=[
        //vertical
        {
            indexes:[0,5,10,15,20],
            max:5,
            step:1,
        },
        //hosizontal
        {
            indexes:[0,1,2,3,4],
            max:25,
            step:5,
        },
        //digonal-1
        {
            indexes:[0,6,12,18,24],
            max:25,
            step:25,
        },
        //digonal-1
        {
            indexes:[4,8,12,16,20],
            max:25,
            step:25,
        }
    ];
    let posit = position(gameBoar,checkMoves);
    if (posit > -1){
        return posit;
    }
    return randommove(gameBoar);
}
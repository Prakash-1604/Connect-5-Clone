import './Calculator.css';
import React from 'react';
function Calculator(){
    const [calc, setcalc] =React.useState({
      current:"0",
      total:"0",
      isInitial:true,
      opera:""
      });
  
    function handleNumbers(Value){
      let newValue=Value;
      if(!calc.isInitial){
        newValue=calc.current+Value;
      }
        setcalc({current:newValue,total:calc.total,isInitial:false,opera:calc.opera});
    }
    function handleOperator(Value){
      const total=doCalculations();
      setcalc({current:total.toString(),total:total.toString(),isInitial:true,opera:Value});
    }
    function doCalculations(){
      let total=parseInt(calc.total);
        switch(calc.opera){
          case "+":
            total += parseInt(calc.current);
          break;
          case "-":
            total -= parseInt(calc.current);
          break;
          case "*":
            total *= parseInt(calc.current);
          break;
          case "/":
            total /= parseInt(calc.current);
          break;
          default:
            total=parseInt(calc.current)
        }
        return total;
    }
    function renderDisplay(){
      return calc.current;
    }
    function handleClear(){
      setcalc({
        current:"0",
        total:"0",
        isInitial:true,
        opera:""
      })
    }
  
    
           return (
              <div className="container">
                <div className="display">{renderDisplay()}</div>
                <Calcbutton onClick={handleNumbers} className="number" Value="7"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="8"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="9"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="/"></Calcbutton>
  
                <Calcbutton onClick={handleNumbers} className="number" Value="4"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="5"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="6"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="*"></Calcbutton>
  
                <Calcbutton onClick={handleNumbers} className="number" Value="1"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="2"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="3"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="-"></Calcbutton>
  
                <Calcbutton onClick={handleClear} className="number" Value="C"></Calcbutton>
                <Calcbutton onClick={handleNumbers} className="number" Value="0"></Calcbutton>
                <Calcbutton onClick={handleOperator} className="number" Value="="></Calcbutton>
                <Calcbutton onClick={handleOperator} className="operator" Value="+"></Calcbutton>
              </div>
            )
              function Calcbutton(props){
                return (<button onClick={()=> props.onClick(props.Value)} className={props.className}>{props.Value}</button>)
              }
        
  }
  export default Calculator;
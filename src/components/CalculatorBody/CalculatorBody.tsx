import { useState } from 'react';
import Grid from '@mui/material/Grid';
import CalculatorButton from '../CalculatorButton/CalculatorButton';
import CalculatorInputBox from '../CalculatorInputBox/CalculatorInputBox';
import './CalculatorBody.css';

function CalculatorBody () {
  const [calculationString, setCalculationString] = useState('')

  const operandButtons = [...Array(10)].map((_, i) => {
    return (
      <Grid key={`operand${i.toString()}`} item xs={4}>
        <CalculatorButton setCalculationString={setCalculationString} buttonType="Operand" displayLabel={i.toString()}/>
      </Grid>
    )
  });
  /**
   * User can see an entry pad containing buttons for the digits 0-9, 
   *   operations - '+', '-', '/', 'x', and '=', a 'C' button (for clear), and an 'AC'
   *   button (for clear all).
   */

  const operatorButtons = ['+', '-', '/', 'X', '=', 'C', 'AC'].map((operator) => {
    return (
      <Grid key={`operator${operator}`} item xs={4}>
        <CalculatorButton setCalculationString={setCalculationString} buttonType="Operator" displayLabel={operator}/>
      </Grid>
    )
  });

  return (
    <div className='body-border'>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CalculatorInputBox calculationString={ calculationString }/>
      </Grid>
      { operandButtons }
      { operatorButtons }
    </Grid>
      
    </div>
  )
}

export default CalculatorBody;

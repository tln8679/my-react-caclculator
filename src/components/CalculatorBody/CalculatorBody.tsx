import { useState } from "react";
import Grid from "@mui/material/Grid";
import { getClearDisplay, calculate } from "../../utils/MathParser";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import CalculatorInputBox from "../CalculatorInputBox/CalculatorInputBox";
import "./CalculatorBody.css";

function CalculatorBody() {
  const [calculationString, setCalculationString] = useState("0");
  const [errorHighlight, setErrorHighlight] = useState(false);

  // operands are numbers from 0 to 10
  const operandButtons = [...Array(10)]
    .map((_, i) => {
      return (
        <Grid key={`operand${i.toString()}`} item xs={4}>
          <CalculatorButton
            setCalculationString={setCalculationString}
            buttonType="Operand"
            displayLabel={i.toString()}
            setErrorHighlight={setErrorHighlight}
          />
        </Grid>
      );
    })
    .concat(
      <Grid key={"operanddecimal"} item xs={4}>
        <CalculatorButton
          setCalculationString={setCalculationString}
          buttonType="Operand"
          displayLabel="."
          setErrorHighlight={setErrorHighlight}
        />
      </Grid>
    );

  /**
   * User can see an entry pad containing buttons for the digits 0-9,
   *   operations - '+', '-', '/', 'x', and '=', a 'C' button (for clear), and an 'AC'
   *   button (for clear all).
   */
  const operatorButtons = ["+", "-", "/", "x"].map((operator) => {
    return (
      <Grid key={`operator${operator}`} item xs={4}>
        <CalculatorButton
          setCalculationString={setCalculationString}
          setErrorHighlight={setErrorHighlight}
          buttonType="Operator"
          displayLabel={operator}
        />
      </Grid>
    );
  });

  // Delegating parse logic to a util to seperate concerns
  const execute = (executionType: "=" | "C" | "AC") => {
    let newDisplayValue: string | undefined = "0";
    switch (executionType) {
      case "=":
        newDisplayValue = calculate(calculationString);
        break;
      case "C":
      case "AC":
        newDisplayValue = getClearDisplay();
        break;
      default:
        newDisplayValue = "0";
    }
    setCalculationString(newDisplayValue);
  };

  /**
   * User can see an entry pad containing buttons for the digits 0-9,
   *   operations - '+', '-', '/', 'x', and '=', a 'C' button (for clear), and an 'AC'
   *   button (for clear all).
   */
  const executionButtons = ["=", "C", "AC"].map((operator) => {
    return (
      <Grid key={`operator${operator}`} item xs={4}>
        <CalculatorButton
          setCalculationString={setCalculationString}
          setErrorHighlight={setErrorHighlight}
          buttonType="Execution"
          displayLabel={operator}
          execute={execute}
        />
      </Grid>
    );
  });

  return (
    <div className="body-border">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CalculatorInputBox
            calculationString={calculationString}
            errorHighlight={errorHighlight}
          />
        </Grid>
        {operandButtons}
        {executionButtons}
        {operatorButtons}
      </Grid>
    </div>
  );
}

export default CalculatorBody;

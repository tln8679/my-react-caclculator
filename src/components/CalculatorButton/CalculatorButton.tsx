/* eslint-disable @typescript-eslint/ban-types */
import Button from "@mui/material/Button";

type ButtonType = "Operand" | "Operator";

function CalculatorButton(props: {
  displayLabel: string;
  buttonType: ButtonType;
  setCalculationString: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { displayLabel, buttonType, setCalculationString } = props;
  return (
    <Button
      variant='contained'
      color={buttonType === "Operand" ? "primary" : "secondary"}
      onClick={() => {
        setCalculationString((calculationString) => `${calculationString}${displayLabel}`);
      }}
    >
      {displayLabel}
    </Button>
  );
}

export default CalculatorButton;

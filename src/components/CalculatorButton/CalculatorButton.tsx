import { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type ButtonType = "Operand" | "Operator" | "Execution";

function CalculatorButton(props: {
  displayLabel: string;
  buttonType: ButtonType;
  setCalculationString: React.Dispatch<React.SetStateAction<string>>;
  setErrorHighlight?: React.Dispatch<React.SetStateAction<boolean>>; // add this
  execute?: Function;
}) {
  const {
    displayLabel,
    buttonType,
    setCalculationString,
    execute,
    setErrorHighlight,
  } = props;

  const [showOperatorError, setShowOperatorError] = useState(false);

  const handleButtonClick = () => {
    switch (buttonType) {
      case "Execution":
        if (execute) execute(displayLabel);
        break;

      case "Operator":
        setCalculationString((prev) => {
          const tokens = prev.trim().split(" ");
          const lastToken = tokens[tokens.length - 1];
          const isLastAnOperator = ["+", "-", "x", "/"].includes(lastToken);

          if (isLastAnOperator) {
            setShowOperatorError(true);
            setErrorHighlight?.(true); // trigger visual error
            setTimeout(() => setErrorHighlight?.(false), 1000); // remove highlight
            return prev;
          }

          return `${prev} ${displayLabel}`;
        });
        break;

      case "Operand":
        setCalculationString((prev) => {
          const tokens = prev.trim().split(" ");
          const lastToken = tokens[tokens.length - 1];
          const isLastAnOperator = ["+", "-", "x", "/"].includes(lastToken);

          if (isLastAnOperator) {
            return `${prev} ${displayLabel}`;
          }

          return prev === "0" ? displayLabel : `${prev}${displayLabel}`;
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        color={
          buttonType === "Operand"
            ? "primary"
            : buttonType === "Operator"
            ? "secondary"
            : "success"
        }
        onClick={handleButtonClick}
      >
        {displayLabel}
      </Button>

      <Snackbar
        open={showOperatorError}
        autoHideDuration={3000}
        onClose={() => setShowOperatorError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowOperatorError(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Cannot enter two operators in a row.
        </Alert>
      </Snackbar>
    </>
  );
}

export default CalculatorButton;

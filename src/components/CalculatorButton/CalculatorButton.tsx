/* eslint-disable @typescript-eslint/ban-types */
import Button from '@mui/material/Button';

type ButtonType = 'Operand' | 'Operator' | 'Execution';

function CalculatorButton(props: {
  displayLabel: string;
  buttonType: ButtonType;
  setCalculationString: React.Dispatch<React.SetStateAction<string>>;
  execute?: Function | undefined
}) {
  const { displayLabel, buttonType, setCalculationString, execute } = props;
  return (
    <Button
      variant='contained'
      color={buttonType === 'Operand' ? 'primary' : ( buttonType === 'Operator' ? 'secondary' : 'success')}
      onClick={() => {
        if (buttonType !== 'Execution') {
          setCalculationString((prevProps) => {
            return prevProps === '0' ? displayLabel : `${prevProps} ${displayLabel}`;
          });
        }
        else {
          // Execute parser
          if(execute) execute(displayLabel);
        }
      }}
    >
      {displayLabel}
    </Button>
  );
}

export default CalculatorButton;

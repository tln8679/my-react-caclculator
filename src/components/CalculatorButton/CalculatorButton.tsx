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
      size='large'
      color={buttonType === 'Operand' ? 'primary' : ( buttonType === 'Operator' ? 'secondary' : 'success')}
      onClick={() => {
        switch(buttonType) {
          case 'Execution':
            if(execute) execute(displayLabel);
            break;
          case 'Operator':
            // space before operator
            setCalculationString((prevProps) => {
              return `${prevProps} ${displayLabel}`;
            });
            break;
          case'Operand':
          setCalculationString((prevProps) => {
            const tokens = prevProps.split(' ');
            // if last character was an operator, add a space
            if (['+', '-', 'x', '/'].includes(tokens[tokens.length - 1])) {
              return `${prevProps} ${displayLabel}`;
            }
            // if last character was a number, no space added
            return prevProps === '0' ? displayLabel: `${prevProps}${displayLabel}`;
          });
        }
      }}
    >
      {displayLabel}
    </Button>
  );
}

export default CalculatorButton;

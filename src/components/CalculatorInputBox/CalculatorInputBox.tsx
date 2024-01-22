import { TextField } from "@mui/material";

function CalculatorInputBox(props: { calculationString: string }) {
  const { calculationString } = props;
  return (
    <>
      <TextField
          fullWidth 
          id="outlined-read-only-input"
          InputProps={{
            readOnly: true,
          }}
          value={calculationString}
        />
    </>
  )
}

export default CalculatorInputBox;
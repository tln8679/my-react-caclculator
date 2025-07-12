import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./CalculatorInputBox.css";
import { Typography } from "@mui/material";

function CalculatorInputBox(props: {
  calculationString: string;
  errorHighlight?: boolean;
}) {
  const { calculationString, errorHighlight } = props;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box className={`calc-display ${errorHighlight ? "error" : ""}`}>
          <Typography variant="body1" className="calc-display-typography">
            {calculationString}
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default CalculatorInputBox;

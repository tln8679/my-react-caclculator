import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./CalculatorInputBox.css";

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
          <h2>{calculationString}</h2>
        </Box>
      </Container>
    </>
  );
}

export default CalculatorInputBox;

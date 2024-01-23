import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function CalculatorInputBox(props: { calculationString: string }) {
  const { calculationString } = props;
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <h2>{calculationString}</h2>
          </Box>
      </Container>
    </>
  );
}

export default CalculatorInputBox;

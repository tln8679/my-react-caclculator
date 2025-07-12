import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function CalculatorInputBox(props: { calculationString: string; errorHighlight?: boolean }) {
  const { calculationString, errorHighlight } = props;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            border: errorHighlight ? '2px solid red' : 'none',
            boxShadow: errorHighlight ? '0 0 10px red' : 'none',
            transition: 'all 0.3s ease',
            borderRadius: '8px',
            padding: '1rem',
          }}
        >
          <h2>{calculationString}</h2>
        </Box>
      </Container>
    </>
  );
}


export default CalculatorInputBox;

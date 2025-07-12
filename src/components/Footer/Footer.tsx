import { Box, Typography, Link, Container } from '@mui/material';
import './Footer.css';

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="md">
        <Typography variant="body2" className="footer-text">
          © {new Date().getFullYear()} Taylor Noble — All rights reserved.
        </Typography>
        <Typography variant="body2" className="footer-text">
          View source on{' '}
          <Link
            href="https://github.com/tln8679"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            GitHub
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

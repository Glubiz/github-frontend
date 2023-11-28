import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import { Seo } from 'src/components/seo';

const Page = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <>
      <Seo title="Error: Forbidden" />
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          py: '80px',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            variant={mdUp ? 'h1' : 'h4'}
          >
            403: Forbidden
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Sorry, you don't have permission to access this page.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Page;

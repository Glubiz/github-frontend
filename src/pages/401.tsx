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
      <Seo title="Error: Authorization Required" />
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
            401: Authorization required
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            You either tried some shady route or you came here by mistake. Whichever it is, try
            using the navigation.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Page;

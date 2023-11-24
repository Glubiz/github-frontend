import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Seo } from 'src/components/seo';
import { useSettings } from 'src/hooks/use-settings';
import { Repositories } from 'src/sections/repositories';
import { Stats } from 'src/sections/stats';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GitHubUser } from 'src/types/github';
import Button from '@mui/material/Button';
import { paths } from 'src/paths';

const Page = () => {
  const settings = useSettings();
  const location = useLocation();

  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');

    if (username) {
      axios.get(`https://api.github.com/users/${username}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          toast.error("User not found");
        });
    }
  }, [])

  return (
    <>
      <Seo title="Dashboard" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <Stack spacing={1}>
                  <Typography variant="h4">{`Statistics for ${user?.login}`}</Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                  >
                  <Button
                    color="secondary"
                    startIcon={<ArrowLeftIcon fontSize="small" />}
                    size="small"
                    variant="text"
                    href={paths.index}
                  >
                    Back
                  </Button>
                  <Button
                    color="secondary"
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    size="small"
                    variant="text"
                    href={user?.html_url}
                  >
                    Go to Github
                  </Button>
                  </Stack>
                  
                </Stack>
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <Stats
                title="Repositories"
                value={user?.public_repos.toString() || "0"}
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <Stats
                title="Followers"
                value={user?.followers.toString() || "0"}
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <Stats
                title="Following"
                value={user?.following.toString() || "0"}
              />
            </Grid>
            <Grid
              xs={12}
            >
              <Repositories />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;

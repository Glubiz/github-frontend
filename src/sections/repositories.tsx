import { useEffect, useState } from 'react';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Repositories as Repos } from 'src/types/github';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


export const Repositories = () => {
  const location = useLocation();

  const [repositories, setRepositories] = useState<Repos | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');

    if (username) {
      axios.get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          setRepositories(res.data);
        })
        .catch((err) => {
          toast.error("An error occurred");
        });
    }
  }, [])

  return (
    <Card>
      <CardHeader
        title="Public Repositories"
        subheader={"Count: " + repositories?.length}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Watchers</TableCell>
            <TableCell>Forks</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories?.map((repo) => {
            const watchers = repo.watchers;
            const forks = repo.forks;

            return (
              <TableRow
                key={repo.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <Typography
                      sx={{ ml: 1 }}
                      variant="subtitle2"
                    >
                      {repo.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{repo.language}</TableCell>
                <TableCell>{watchers}</TableCell>
                <TableCell>{forks}</TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    size="small"
                    variant="text"
                    href={repo.html_url}
                    target="_blank"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

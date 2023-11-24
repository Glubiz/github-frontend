import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { ApexOptions } from 'apexcharts';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


interface Props {
  title: string;
  value: string;
}

export const Stats = ({ value, title }: Props) => {
  return (
    <Card>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <div>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {title}
          </Typography>
          <Typography
            sx={{ mt: 1 }}
            variant="h5"
          >
            {value}
          </Typography>
        </div>
      </Stack>
      <Divider />
    </Card>
  );
};

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

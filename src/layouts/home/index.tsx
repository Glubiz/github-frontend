import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';
import { styled } from '@mui/material/styles';

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
}));

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <>
      <LayoutRoot>
        {children}
      </LayoutRoot>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import type { NavColor } from 'src/types/settings';


const HorizontalLayoutRoot = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
});

const HorizontalLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
});

interface HorizontalLayoutProps {
  children?: ReactNode;
  navColor?: NavColor;
}

export const HorizontalLayout: FC<HorizontalLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <HorizontalLayoutRoot>
        <HorizontalLayoutContainer>{children}</HorizontalLayoutContainer>
      </HorizontalLayoutRoot>
    </>
  );
};

HorizontalLayout.propTypes = {
  children: PropTypes.node,
  navColor: PropTypes.oneOf<NavColor>(['blend-in', 'discrete', 'evident']),
};

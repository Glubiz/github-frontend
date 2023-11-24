import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { useSettings } from 'src/hooks/use-settings';

import { HorizontalLayout } from './horizontal-layout';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const settings = useSettings();

  return (
    <HorizontalLayout
      navColor={settings.navColor}
      {...props}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

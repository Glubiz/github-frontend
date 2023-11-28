import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SettingsConsumer, SettingsProvider } from 'src/contexts/settings';
import { createTheme } from 'src/theme';

import 'src/global.css';

import { Toaster } from 'src/components/toaster';
import { routes } from 'src/routes';

export const App: FC = () => {

  const element = useRoutes(routes);

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {(settings) => {
          const theme = createTheme({
            colorPreset: settings.colorPreset,
            contrast: settings.contrast,
            direction: settings.direction,
            paletteMode: settings.paletteMode,
            responsiveFontSizes: settings.responsiveFontSizes,
          });

          return (
            <ThemeProvider theme={theme}>
              <Helmet>
                <meta
                  name="color-scheme"
                  content={settings.paletteMode}
                />
                <meta
                  name="theme-color"
                  content={theme.palette.neutral[900]}
                />
              </Helmet>
              <CssBaseline />
              {element}
              <Toaster />
            </ThemeProvider>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
};

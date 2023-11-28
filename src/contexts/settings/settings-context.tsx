import { createContext } from 'react';

import type { Settings } from 'src/types/settings';

export const defaultSettings: Settings = {
  colorPreset: 'purple',
  contrast: 'high',
  direction: 'ltr',
  layout: 'vertical',
  navColor: 'evident',
  paletteMode: 'light',
  responsiveFontSizes: true,
  stretch: false,
};

export const SettingsContext = createContext<Settings>({
  ...defaultSettings,
});

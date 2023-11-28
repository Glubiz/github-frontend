import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';

import type { Settings } from 'src/types/settings';

import { SettingsContext, defaultSettings } from './settings-context';

const STORAGE_KEY = 'app.settings';

const restoreSettings = (): Settings | null => {
  let value = null;

  try {
    const restored: string | null = window.localStorage.getItem(STORAGE_KEY);

    if (restored) {
      value = JSON.parse(restored);
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return value;
};

const deleteSettings = (): void => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error(err);
  }
};

const storeSettings = (value: Record<string, any>): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

interface SettingsProviderProps {
  children?: ReactNode;
}

export const SettingsProvider: FC<SettingsProviderProps> = (props) => {
  const { children } = props;
  const [state, setState] = useState<Settings>(defaultSettings);

  useEffect(() => {
    const restored = restoreSettings();

    if (restored) {
      setState((prevState) => ({
        ...prevState,
        ...restored,
        isInitialized: true,
      }));
    }
  }, []);

  const handleReset = useCallback((): void => {
    deleteSettings();
    setState((prevState) => ({
      ...prevState,
      ...defaultSettings,
    }));
  }, []);

  const handleUpdate = useCallback((settings: Settings): void => {
    setState((prevState) => {
      storeSettings({
        colorPreset: prevState.colorPreset,
        contrast: prevState.contrast,
        direction: prevState.direction,
        layout: prevState.layout,
        paletteMode: prevState.paletteMode,
        responsiveFontSizes: prevState.responsiveFontSizes,
        stretch: prevState.stretch,
        ...settings,
      });

      return {
        ...prevState,
        ...settings,
      };
    });
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

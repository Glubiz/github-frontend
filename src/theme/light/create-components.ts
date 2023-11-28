import { alpha } from '@mui/system/colorManipulator';
import { backdropClasses } from '@mui/material/Backdrop';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { paperClasses } from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import type { Components } from '@mui/material/styles/components';
import type { PaletteColor, PaletteOptions } from '@mui/material/styles/createPalette';

interface Config {
  palette: PaletteOptions;
}

export const createComponents = ({ palette }: Config): Components => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          [`&:not(.${backdropClasses.invisible})`]: {
            backgroundColor: alpha(palette.neutral![900], 0.75),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          [`&.${paperClasses.elevation1}`]: {
            boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '.slick-dots li button': {
          '&:before': {
            fontSize: 10,
            color: (palette.primary as PaletteColor).main,
          },
        },
        '.slick-dots li.slick-active button': {
          '&:before': {
            color: (palette.primary as PaletteColor).main,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: palette.text!.secondary,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: palette.neutral![200],
          '&:hover': {
            backgroundColor: palette.action!.hover,
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: 'transparent',
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            borderColor: (palette.primary as PaletteColor).main,
            boxShadow: `${(palette.primary as PaletteColor).main} 0 0 0 2px`,
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: (palette.error as PaletteColor).main,
            boxShadow: `${(palette.error as PaletteColor).main} 0 0 0 2px`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: palette.action!.hover,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.neutral![200],
            },
          },
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: (palette.primary as PaletteColor).main,
              borderWidth: '3px',
            },
          },
          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: (palette.error as PaletteColor).main,
              borderWidth: '3px',
            },
          },
        },
        notchedOutline: {
          borderColor: palette.neutral![200],
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          [`& .${tableCellClasses.root}`]: {
            backgroundColor: palette.neutral![50],
            color: palette.neutral![700],
          },
        },
      },
    },
  };
};

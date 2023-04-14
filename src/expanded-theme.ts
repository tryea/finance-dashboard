// eslint-disable-next-line
import {Palette, PaletteColor} from "@mui/material/styles/createPalette"

// what is declare module?
declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}
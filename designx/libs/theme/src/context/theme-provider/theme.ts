import { createContext } from "react"
// import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
// import { light, dark } from "./palette"

export const contentWidth = 1236

export type ColorScheme = "light" | "dark"

export type ThemeType = {
  /**
   * primary color of theme.
   */
  colorScheme?: ColorScheme
}

export const Theme = createContext<ThemeType>({
  colorScheme: undefined,
})

/** @format */

// export const createTheme = (mode: ColorScheme = "dark") =>
//   responsiveFontSizes(
//     createMuiTheme({
//       palette: mode === "light" ? light : dark,
//       layout: {
//         contentWidth
//       },
//       typography: {
//         fontFamily: "Adobe Clean"
//       },
//       zIndex: {
//         appBar: 1200,
//         drawer: 1100
//       }
//     })
//   )

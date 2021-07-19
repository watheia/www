/** @format */

import React, { HTMLAttributes } from "react"
import cn from "classnames"
// import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { ColorScheme, Theme } from "./theme"
import { Provider, SSRProvider, lightTheme, darkTheme } from "@adobe/react-spectrum"

import { primaryPalette } from "@watheia/theme.context.color-definition"
import classes from "./theme.module.scss"

export type ThemeProviderProps = {
  /**
   * default color mode for theme.
   */
  colorScheme?: ColorScheme
} & HTMLAttributes<HTMLDivElement>

export function ThemeProvider({ colorScheme, children, ...props }: ThemeProviderProps) {
  const theme = colorScheme == "light" ? lightTheme : darkTheme
  return (
    <SSRProvider>
      <div {...props} className={cn(primaryPalette, classes.defaults, props.className)}>
        <Provider theme={theme} colorScheme={colorScheme}>
          <Theme.Provider value={{ colorScheme }}>{children}</Theme.Provider>
        </Provider>
      </div>
    </SSRProvider>
  )
}

//export alias for background compact
export default ThemeProvider

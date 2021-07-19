//alias for backwards compat
import themeGlobal from "@watheia/theme.styles.global/spectrum-global.module.css"
import themeLight from "@watheia/theme.styles.global/spectrum-light.module.css"
import themeLightest from "@watheia/theme.styles.global/spectrum-lightest.module.css"
import themeDark from "@watheia/theme.styles.global/spectrum-dark.module.css"
import themeDarkest from "@watheia/theme.styles.global/spectrum-darkest.module.css"
import scaleMedium from "@watheia/theme.styles.global/spectrum-medium.module.css"
import scaleLarge from "@watheia/theme.styles.global/spectrum-large.module.css"

export { ThemeProvider, ThemeProvider as ThemeCompositions } from "./theme-provider"
export * as classes from "./theme.module.scss"
export type { Theme } from "./theme"
export type { ThemeProviderProps } from "./theme-provider"

export const THEME = {
  global: themeGlobal,
  light: themeLight,
  lightest: themeLightest,
  dark: themeDark,
  darkest: themeDarkest,
}

export const scales = {
  medium: scaleMedium,
  large: scaleLarge,
}

export const defaultTheme = {
  global: themeGlobal,
  light: THEME.light,
  dark: THEME.darkest,
  medium: scales.medium,
  large: scales.large,
}

export const altTheme = {
  global: themeGlobal,
  light: THEME.lightest,
  dark: THEME.dark,
  medium: scales.medium,
  large: scales.large,
}

export const themes = {
  light: defaultTheme,
  dark: altTheme,
  lightest: altTheme,
  darkest: defaultTheme,
}

// Based on https://adobe.sharepoint.com/sites/global/SitePages/Languages%20Supported.aspx
export const locales = [
  { label: "Auto", value: "" },
  // Tier 1
  { label: "French (France)", value: "fr-FR" },
  { label: "French (Canada)", value: "fr-CA" },
  { label: "German (Germany)", value: "de-DE" },
  { label: "English (Great Britain)", value: "en-GB" },
  { label: "English (United States)", value: "en-US" },
  { label: "Japanese (Japan)", value: "ja-JP" },
  // // Tier 2
  { label: "Danish (Denmark)", value: "da-DK" },
  { label: "Dutch (Netherlands)", value: "nl-NL" },
  { label: "Finnish (Finland)", value: "fi-FI" },
  { label: "Italian (Italy)", value: "it-IT" },
  { label: "Norwegian (Norway)", value: "nb-NO" },
  { label: "Spanish (Spain)", value: "es-ES" },
  { label: "Swedish (Sweden)", value: "sv-SE" },
  { label: "Portuguese (Brazil)", value: "pt-BR" },
  // // Tier 3
  { label: "Chinese (Simplified)", value: "zh-CN" },
  { label: "Chinese (Traditional)", value: "zh-TW" },
  { label: "Korean (Korea)", value: "ko-KR" },
  // // Tier 4
  { label: "Bulgarian (Bulgaria)", value: "bg-BG" },
  { label: "Croatian (Croatia)", value: "hr-HR" },
  { label: "Czech (Czech Republic)", value: "cs-CZ" },
  { label: "Estonian (Estonia)", value: "et-EE" },
  { label: "Hungarian (Hungary)", value: "hu-HU" },
  { label: "Latvian (Latvia)", value: "lv-LV" },
  { label: "Lithuanian (Lithuania)", value: "lt-LT" },
  { label: "Polish (Poland)", value: "pl-PL" },
  { label: "Romanian (Romania)", value: "ro-RO" },
  { label: "Russian (Russia)", value: "ru-RU" },
  { label: "Serbian (Serbia)", value: "sr-SP" },
  { label: "Slovakian (Slovakia)", value: "sk-SK" },
  { label: "Slovenian (Slovenia)", value: "sl-SI" },
  { label: "Turkish (Turkey)", value: "tr-TR" },
  { label: "Ukrainian (Ukraine)", value: "uk-UA" },
  // // Tier 5
  { label: "Arabic (United Arab Emirates)", value: "ar-AE" }, // ar-SA??
  { label: "Greek (Greece)", value: "el-GR" },
  { label: "Hebrew (Israel)", value: "he-IL" },
]

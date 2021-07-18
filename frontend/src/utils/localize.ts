import { fetchAPI } from "./api"
import { PageModel } from "./types"

export async function getLocalizedPage(targetLocale: any, pageContext: any) {
  const localization = pageContext.localizations.find(
    (localization) => localization.locale === targetLocale
  )
  const localePage = await fetchAPI(`/pages/${localization.id}`)
  return localePage
}

export function localizePath(page: PageModel): string {
  const { locale, defaultLocale, slug } = page

  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `/${slug}`
  }

  // The slug should have a localePrefix
  return `/${locale}/${slug}`
}

export function getLocalizedPaths(
  page: PageModel
): Array<{ locale: string; href: string }> {
  const paths = page.locales.map((locale) => {
    return {
      locale: locale,
      href: localizePath({ ...page, locale }),
    }
  })

  return paths
}

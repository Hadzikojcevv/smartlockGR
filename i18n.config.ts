export const i18n = {
  defaultLocale: 'gr',
  locales: ['en', 'gr']
} as const

export type Locale = (typeof i18n)['locales'][number]
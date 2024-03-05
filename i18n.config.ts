export const i18n = {
  defaultLocale: 'gr',
  locales: ['gr', 'en']
} as const

export type Locale = (typeof i18n)['locales'][number]
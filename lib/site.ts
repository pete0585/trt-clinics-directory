/** Public site origin. Honors NEXT_PUBLIC_SITE_URL www/non-www as set in env. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://findtrtclinic.com').replace(
  /\/$/,
  ''
)

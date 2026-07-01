interface UtmOptions {
  source?: string
  medium?: string
}

/**
 * Añade parámetros UTM a un enlace saliente para comunicar que el tráfico
 * proviene de este meta-sitio. Deja intactos los enlaces no http(s) (p. ej. mailto)
 * y preserva los parámetros de consulta existentes.
 */
export function withUtm(
  href: string,
  { source = 'dondeayudarvenezuela.com', medium = 'referral' }: UtmOptions = {},
): string {
  try {
    const url = new URL(href)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return href
    url.searchParams.set('utm_source', source)
    url.searchParams.set('utm_medium', medium)
    return url.toString()
  } catch {
    return href
  }
}

import type { APIRoute } from 'astro'
import {
  acciones,
  portales,
  otrasDonaciones,
  advertencias,
  informacionAdicional,
  prensa,
} from '../data/directory'

const site = 'https://dondeayudarvenezuela.com'

const categorias = [
  { label: 'Acciones rápidas', avoid: false, items: acciones },
  { label: 'Otras formas de ayudar y encontrar ayuda', avoid: false, items: portales },
  { label: 'Otras formas de donar', avoid: false, items: otrasDonaciones },
  { label: 'Dónde NO donar', avoid: true, items: advertencias },
  { label: 'Información adicional', avoid: false, items: informacionAdicional },
  { label: 'Quién lo está contando', avoid: false, items: prensa },
] as const

// Formato llms.txt (https://llmstxt.org): resumen legible por humanos y máquinas.
export const GET: APIRoute = () => {
  const lines: string[] = []

  lines.push('# ¿Dónde ayudar a Venezuela?')
  lines.push('')
  lines.push(
    '> Directorio de iniciativas verificadas tras el terremoto de Venezuela del 24 de junio de 2026: dónde donar, reportar daños, denunciar irregularidades, buscar personas y encontrar ayuda profesional. No recibimos ni gestionamos donaciones; cada enlace lleva al canal oficial de la organización.',
  )
  lines.push('')
  lines.push(`Sitio: ${site}`)
  lines.push(`Datos en JSON: ${site}/directory.json`)
  lines.push(`Última actualización: ${new Date().toISOString().slice(0, 10)}`)
  lines.push('')

  for (const categoria of categorias) {
    lines.push(`## ${categoria.label}`)
    if (categoria.avoid) {
      lines.push('')
      lines.push('Organizaciones que recomendamos EVITAR como canal de donación.')
    }
    lines.push('')
    for (const item of categoria.items) {
      lines.push(`- [${item.title}](${item.href}): ${item.description}`)
    }
    lines.push('')
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

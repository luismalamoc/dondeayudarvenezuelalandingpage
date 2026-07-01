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
const description =
  'Directorio que reúne las plataformas activas tras el terremoto de Venezuela (junio 2026): dónde donar, reportar daños, denunciar irregularidades, buscar personas y encontrar ayuda profesional.'

const categorias = [
  { id: 'acciones', label: 'Acciones rápidas', avoid: false, items: acciones },
  { id: 'ayuda', label: 'Otras formas de ayudar y encontrar ayuda', avoid: false, items: portales },
  { id: 'donaciones', label: 'Otras formas de donar', avoid: false, items: otrasDonaciones },
  { id: 'evitar', label: 'Dónde NO donar', avoid: true, items: advertencias },
  { id: 'informacion', label: 'Información adicional', avoid: false, items: informacionAdicional },
  { id: 'prensa', label: 'Quién lo está contando', avoid: false, items: prensa },
] as const

function domainFromHref(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return href
  }
}

export const GET: APIRoute = () => {
  const data = {
    name: '¿Dónde ayudar a Venezuela?',
    url: site,
    description,
    inLanguage: 'es',
    event: {
      name: 'Terremoto de Venezuela 2026',
      date: '2026-06-24',
    },
    updatedAt: new Date().toISOString().slice(0, 10),
    categories: categorias.map((categoria) => ({
      id: categoria.id,
      label: categoria.label,
      avoid: categoria.avoid,
      items: categoria.items.map((item) => ({
        title: item.title,
        description: item.description,
        url: item.href,
        domain: domainFromHref(item.href),
        tag: 'tag' in item ? item.tag : undefined,
      })),
    })),
  }

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}

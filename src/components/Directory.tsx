import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Categoria, DirectoryItem } from '../data/directory'
import { withUtm } from '../lib/links'

const ALPHABET = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')]

const CATEGORY_STYLES: Record<Categoria, string> = {
  Acción: 'bg-navy text-white',
  Ayuda: 'bg-sky-100 text-sky-800',
  Donar: 'bg-emerald-100 text-emerald-800',
  Info: 'bg-slate-100 text-slate-700',
  Evitar: 'bg-red-600 text-white',
}

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function socialInfo(instagram?: string): { handle: string; isX: boolean } | null {
  if (!instagram) return null
  try {
    const url = new URL(instagram)
    const host = url.hostname.replace(/^www\./, '')
    const isX = host === 'x.com' || host === 'twitter.com'
    const handle = `@${url.pathname.replace(/^\/+|\/+$/g, '')}`
    return { handle, isX }
  } catch {
    return null
  }
}

const COLLAPSE_THRESHOLD = 6

function LetterGroup({ letter, entries }: { letter: string; entries: DirectoryItem[] }) {
  const [expanded, setExpanded] = useState(false)
  const collapsible = entries.length > COLLAPSE_THRESHOLD
  const visible = expanded || !collapsible ? entries : entries.slice(0, COLLAPSE_THRESHOLD)

  return (
    <section data-letter={letter} className="scroll-mt-4">
      <h2 className="sticky top-0 bg-lienzo py-1 text-2xl font-black text-navy">{letter}</h2>
      <ul className="divide-y divide-slate-200 border-t border-slate-200">
        {visible.map((item) => {
          const isEvitar = item.categoria === 'Evitar'
          const social = socialInfo(item.instagram)
          return (
            <li
              key={item.href}
              className={
                isEvitar
                  ? 'flex flex-col gap-1 rounded-lg bg-red-50/60 px-3 py-3 sm:flex-row sm:items-center sm:gap-4'
                  : 'flex flex-col gap-1 px-3 py-3 transition hover:bg-white sm:flex-row sm:items-center sm:gap-4'
              }
            >
              <a
                href={withUtm(item.href)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isEvitar
                    ? 'font-bold text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:flex-1'
                    : 'font-bold text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:flex-1'
                }
              >
                {item.title}
              </a>
              <span
                className={`inline-flex w-fit shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${CATEGORY_STYLES[item.categoria]}`}
              >
                {item.categoria}
              </span>
              {social ? (
                <a
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full max-w-[9rem] shrink-0 items-center gap-1 text-xs font-semibold hover:underline sm:w-28 ${
                    isEvitar ? 'text-red-600' : 'text-navy'
                  }`}
                >
                  {social.isX ? (
                    <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ) : (
                    <svg
                      className="size-3.5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                  <span className="truncate">{social.handle}</span>
                </a>
              ) : (
                <span className="hidden sm:block sm:w-28" aria-hidden="true" />
              )}
              <span className="shrink-0 text-xs text-slate-400 sm:w-44 sm:text-right">
                {item.domain}
              </span>
            </li>
          )
        })}
      </ul>
      {collapsible ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 mb-6 inline-flex items-center gap-1 text-sm font-bold text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          {expanded ? 'Ocultar' : `Ver más (${entries.length - COLLAPSE_THRESHOLD})`}
        </button>
      ) : (
        <div className="mb-6" />
      )}
    </section>
  )
}

interface DirectoryProps {
  items: DirectoryItem[]
}

export default function Directory({ items }: DirectoryProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const listRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => setMounted(true), [])

  const filtered = useMemo(() => {
    const q = normalize(deferredQuery.trim())
    if (!q) return items
    return items.filter((item) => item.search.includes(q))
  }, [items, deferredQuery])

  const groups = useMemo(() => {
    const map = new Map<string, DirectoryItem[]>()
    for (const item of filtered) {
      const bucket = map.get(item.letter)
      if (bucket) bucket.push(item)
      else map.set(item.letter, [item])
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b, 'es'))
  }, [filtered])

  const lettersWithResults = useMemo(
    () => new Set(groups.map(([letter]) => letter)),
    [groups],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (open) searchRef.current?.focus()
  }, [open])

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
    if (!open) setOpen(true)
  }

  function scrollToLetter(letter: string) {
    const target = listRef.current?.querySelector<HTMLElement>(`[data-letter="${letter}"]`)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="ml-auto flex items-center gap-2">
      <label className="relative hidden items-center sm:flex">
        <svg
          className="pointer-events-none absolute left-3 size-4 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="sr-only">Buscar por título</span>
        <input
          type="search"
          value={query}
          onChange={handleQueryChange}
          onFocus={() => setOpen(true)}
          placeholder="Buscar…"
          className="w-48 rounded-full border border-slate-200 bg-lienzo py-2 pr-3 pl-9 text-sm text-slate-800 transition placeholder:text-slate-400 focus-visible:border-navy focus-visible:bg-white focus-visible:outline-none lg:w-64"
        />
      </label>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        <svg
          className="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6h13M3 12h13M3 18h13" />
          <path d="M19 8V6M21 6h-4M19 12v6" />
        </svg>
        <span className="hidden sm:inline">Directorio</span>
        <span className="sm:hidden">A-Z</span>
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="directory-panel fixed inset-0 z-50 flex flex-col bg-lienzo"
              role="dialog"
              aria-modal="true"
              aria-label="Directorio de ayuda de la A a la Z"
            >
          <div className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
              <label className="relative flex flex-1 items-center">
                <svg
                  className="pointer-events-none absolute left-3 size-4 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="sr-only">Buscar por título</span>
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={handleQueryChange}
                  placeholder="Buscar…"
                  className="w-full rounded-full border border-slate-200 bg-lienzo py-2.5 pr-3 pl-10 text-base text-slate-800 placeholder:text-slate-400 focus-visible:border-navy focus-visible:bg-white focus-visible:outline-none"
                />
              </label>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-sm font-bold text-navy transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                <span className="hidden sm:inline">Cerrar</span>
              </button>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-5xl flex-1 gap-2 overflow-hidden px-2 sm:px-6">
            <nav
              aria-label="Índice alfabético"
              className="flex shrink-0 flex-col items-center justify-center gap-0.5 py-4"
            >
              {ALPHABET.map((letter) => {
                const active = lettersWithResults.has(letter)
                return (
                  <button
                    key={letter}
                    type="button"
                    disabled={!active}
                    onClick={() => scrollToLetter(letter)}
                    aria-label={`Ir a ${letter}`}
                    className={
                      active
                        ? 'grid size-6 place-items-center rounded text-xs font-bold text-navy transition hover:bg-amarillo focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy'
                        : 'grid size-6 place-items-center rounded text-xs font-medium text-slate-300'
                    }
                  >
                    {letter}
                  </button>
                )
              })}
            </nav>

            <div ref={listRef} className="flex-1 overflow-y-auto py-4 pr-1">
              <p className="mb-4 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                {filtered.length}{' '}
                {filtered.length === 1 ? 'resultado' : 'resultados'}
                {deferredQuery.trim() ? ` para «${deferredQuery.trim()}»` : ''}
              </p>

              {groups.length === 0 ? (
                <p className="mt-12 text-center text-sm text-slate-500">
                  No encontramos resultados. Prueba con otro término.
                </p>
              ) : (
                groups.map(([letter, entries]) => (
                  <LetterGroup key={letter} letter={letter} entries={entries} />
                ))
              )}
            </div>
          </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}

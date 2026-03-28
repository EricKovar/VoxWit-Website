"use client"
import { useState } from 'react'

export type FilterState = { q: string; platform: string; hook: string; type: string }
export function FilterBar({ onChange }: { onChange: (f: FilterState)=>void }) {
  const [f, setF] = useState<FilterState>({ q: '', platform: 'all', hook: 'all', type: 'all' })
  function update<K extends keyof FilterState>(k: K, v: FilterState[K]) {
    const next = { ...f, [k]: v }
    setF(next); onChange(next)
  }
  return (
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <input className="w-full max-w-xs rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Search posts..." value={f.q} onChange={e=>update('q', e.target.value)} />
      <select className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" value={f.platform} onChange={e=>update('platform', e.target.value)}>
        <option value="all">All Platforms</option>
        <option value="twitter">Twitter/X</option>
        <option value="tiktok">TikTok</option>
        <option value="instagram">Instagram</option>
        <option value="youtube">YouTube</option>
        <option value="linkedin">LinkedIn</option>
      </select>
      <select className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" value={f.hook} onChange={e=>update('hook', e.target.value)}>
        <option value="all">All Hooks</option>
        <option value="controversial">Controversial</option>
        <option value="curiosity">Curiosity</option>
        <option value="novelty">Novelty</option>
        <option value="challenge">Challenge</option>
        <option value="question">Question</option>
        <option value="statistic">Statistic</option>
      </select>
      <select className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" value={f.type} onChange={e=>update('type', e.target.value)}>
        <option value="all">All Content Types</option>
        <option value="short">Short</option>
        <option value="image">Image</option>
        <option value="thread">Thread</option>
        <option value="longform">Longform</option>
        <option value="carousel">Carousel</option>
      </select>
    </div>
  )
}

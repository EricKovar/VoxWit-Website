"use client"
import { useMemo, useState } from 'react'
import { posts } from '@/lib/vw/mockData'
import { ContentTable } from '@/components/vw/ContentTable'
import { FilterBar, FilterState } from '@/components/vw/FilterBar'

export default function PostsPage() {
  const [filters, setFilters] = useState<FilterState>({ q: '', platform: 'all', hook: 'all', type: 'all' })
  const filtered = useMemo(() => {
    return posts.filter(p => {
      if (filters.q && !p.content.toLowerCase().includes(filters.q.toLowerCase())) return false
      if (filters.platform !== 'all' && p.platform !== filters.platform) return false
      if (filters.hook !== 'all' && p.hookType !== filters.hook) return false
      if (filters.type !== 'all' && p.contentType !== filters.type) return false
      return true
    })
  }, [filters])

  return (
    <div>
      <FilterBar onChange={setFilters} />
      <ContentTable rows={filtered} />
    </div>
  )
}

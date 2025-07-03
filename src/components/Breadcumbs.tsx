
'use client'
import Link from 'next/dist/client/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav className="text-texte-legende flex flex-wrap gap-1">
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1
        return (
          <span key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 font-black text-rouge-fonce">{'>>'}</span>}
            <span
              className={`capitalize ${
                isLast ? 'font-medium text-black' : 'text-rouge-fonce hover:text-rouge-clair'
              }`}
            >
              <Link href="/" className='text-rouge-fonce'>ONG-DFA </Link> - {decodeURIComponent(segment).replace(/-/g, ' ')}
            </span>
          </span>
        )
      })}
    </nav>
  )
}
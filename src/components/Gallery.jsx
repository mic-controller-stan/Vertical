import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const galleryData = [
  // Column 1
  [
    {
      city: 'LADESTACK CODER (LIVE)',
      img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjh8DGplfZUrQYBkN43BTwxP24fhZyhp0XmWA2BjFm9FYpFoUZGIPZ_y6d9gKN3bxYJA7T9v1v_b5oupitr80iSk9k4WBWlTU00-6GH0ybVvpPbKA97cmYEplt5lWuLKs5dr_MzVuy1Npr6bg7n7YMjELhjQDUyOr-OLnubMPmwClwSB3K8lvESSqbIEpY',
      ratio: 'aspect-[3/4]',
      alt: 'LadeStack Coder - AI-powered HTML/CSS/JS compiler and editor',
    },
    {
      city: 'LS PDF TOOLKIT (LIVE)',
      img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgjT275yoi2L8LWRMs4MhsNwLO8D5H593vdJaD4oKKKb4zTzedeTJU9-tjYabhN7dGt0VV8ec9Ah4CanuCXa1Q4xshxJ2o3t_Qu6RmfB8-afkIImELGncceSDLDZTkKlD3xdfvsGUQQ3GATvPAFWHh4Ihh-Va51RMFQVUc_iqRMsCHwHLxZK8EvfniAeGc',
      ratio: 'aspect-[4/5]',
      alt: 'LS PDF - Free client-side PDF toolkit with zero server upload',
    },
  ],
  // Column 2
  [
    {
      city: 'LADEDESIGN (LIVE)',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwxPGSIDHYiLnTM0IUzHkpIUUvCsNLcKj0JUz5-V0BEgY2r7lFopDPjT_57PpmCgQielpJs3HpznXxFaljqbztuK-HHf0OsHH4xOUR0k1WWtfZFA_MwdfjhBxxRl6va3kZb-9I3l8bMJKsQMZz3r5WZcoGcnzYSDVoNHg1dDcPegBBAYlnynYHUzOlvbE/s1480/ux-vs-ui-design@2x.jpg',
      ratio: 'aspect-[4/5]',
      alt: 'LadeDesign - AI UI/UX tool generating multi-screen application flows',
    },
    {
      city: 'LS CLI AGENT (NPM)',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh65lbuaK4dCEvOf-UUDmmfehe1LRtyn_ZbJe5qAJ3RVHJFT2cswBZVeF41a9Vy6_vD8rMx0mrBatXsmWJtwK7V8LDyGfRvwn72k_Po3ObCd24Qj1NwyN2jP6pK4Jy1y7seNloxQBX-_03rVbgnkK_MfaHaaz1cOh96ug16ZSmwqJoRPmM4w4kRjP4WPqA/s2560/screenshot.jpg',
      ratio: 'aspect-[3/4]',
      alt: 'LS CLI - Terminal-based autonomous AI coding agent package',
    },
  ],
  // Column 3
  [
    {
      city: 'LS DOCS EDITOR (DEV)',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhTd1wajttmr5Y7_6j3a4UppF6Q-jhP9FlhEJsTnLP7-VK6SroZoodQ6iAv_MSx7TR0-yaUEaylZA_zh6J4xfF6ILVYvvjvmfxvCBbyFNSMeMldgfFKS7UF1uH2qH2hGP3Pt8sexa7zgcxJJj44vje37JEsMQUA8-QiupnmZDpwVOZ8k0eS3nrVC6EKaU/s1920/oGqon5VfrJqe2joVW-T0_B2V2rPLpjTO.jpg',
      ratio: 'aspect-[4/5]',
      alt: 'LS Docs - AI-powered document editor and Google Docs alternative',
    },
    {
      city: 'LADESTACK NOTES (DEV)',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXiZH81mbE9WzpQY5-yZEarquO6dx0SPM6vPYmRGfHKUEvWnlGFYL92QkuWqh3Q9Sr80UwHAAA5CjNBf2PPBMuZTrtPe4JRqZkFYk6iyTTy12SOPgzKnPRef1Pd2OV4gxPhr2AXxzLc7NBvCoW5t09EFdDrNMM_9B_uoeK6pn-hYfmqUpFsKHI7tpYNGc/s2796/1774992189-631172-1000008138-por.jpg',
      ratio: 'aspect-[3/4]',
      alt: 'LadeStack Notes - NotebookLM-style AI notes with RAG chat',
    },
  ],
]

export default function Gallery() {
  const reduce = usePrefersReducedMotion()
  const secRef = useRef(null)
  const colRefs = [useRef(null), useRef(null), useRef(null)]

  // Smooth scroll parallax for columns
  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const sec = secRef.current
        if (!sec) {
          ticking = false
          return
        }
        const r = sec.getBoundingClientRect()
        const vh = window.innerHeight
        // Progress through gallery section (-1 to 1)
        const prog = Math.max(-1, Math.min(1, (vh - r.top) / (vh + r.height) - 0.5))

        // Parallax offsets
        if (colRefs[0].current) {
          colRefs[0].current.style.transform = `translate3d(0, ${prog * 40}px, 0)`
        }
        if (colRefs[1].current) {
          colRefs[1].current.style.transform = `translate3d(0, ${prog * -60}px, 0)`
        }
        if (colRefs[2].current) {
          colRefs[2].current.style.transform = `translate3d(0, ${prog * -110}px, 0)`
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduce])

  return (
    <section ref={secRef} id="work" className="relative bg-black px-6 md:px-10 pt-24 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 max-w-[900px]">
          <h2 className="text-lime uppercase font-black text-[32px] sm:text-[44px] md:text-[56px] leading-[0.95] tracking-tight">
            IT ISN'T A STATIC RESUME.
          </h2>
          <p className="mt-4 md:mt-6 text-white uppercase font-black text-[18px] sm:text-[22px] md:text-[26px] leading-[1.1] tracking-tight">
            IT'S A LIVE RECORD OF WHAT I'M SHIPPING. REAL NO-LOGIN DEV TOOLS, CODE EXPERIMENTS, AND A SYSTEMATIC TRANSITION INTO SOFTWARE ENGINEERING.
          </p>
        </div>

        {/* 3-Column Staggered Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 items-start">
          {galleryData.map((col, ci) => (
            <div
              key={ci}
              ref={colRefs[ci]}
              className={`flex flex-col gap-12 md:gap-20 will-change-transform ${
                ci === 1 ? 'md:pt-24' : ci === 2 ? 'md:pt-12' : 'md:pt-0'
              }`}
            >
              {col.map((item, idx) => (
                <figure key={item.city} className="group relative block w-full">
                  <div className="relative overflow-hidden bg-[#111] rounded-sm">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className={`w-full ${item.ratio} object-cover grayscale contrast-[1.08] group-hover:scale-[1.04] group-hover:contrast-[1.15] transition-all duration-700 ease-out`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                  <figcaption className="mt-3.5 flex justify-between items-baseline">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white group-hover:text-lime transition-colors duration-300">
                      {item.city}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      MOD 0{ci * 2 + idx + 1}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

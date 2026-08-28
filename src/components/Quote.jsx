import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Quote() {
  useScrollReveal('.reveal-quote')
  return (
    <section className="bg-lime grid md:grid-cols-2 items-stretch">
      <div className="px-6 md:px-14 py-12 md:py-20 flex flex-col justify-center">
        <p
          data-text="“I DIRECT INTELLIGENCE TO BUILD SOFTWARE AT FOUNDER SPEED. NO GIMMICKS, NO SIGNUP WALLS — JUST DEFENSIBLE TOOLS THAT SOLVE REAL DEVELOPER PROBLEMS” — GIRISH LADE"
          className="reveal-quote lime-ghost text-black uppercase font-black leading-[0.95] text-[28px] sm:text-[36px] md:text-[44px] tracking-tight"
        >
          “I DIRECT INTELLIGENCE TO BUILD SOFTWARE AT FOUNDER SPEED. NO GIMMICKS, NO SIGNUP WALLS — JUST DEFENSIBLE TOOLS THAT SOLVE REAL DEVELOPER PROBLEMS” — GIRISH LADE
        </p>
      </div>
      <div className="relative min-h-[460px] md:min-h-[560px] bg-black m-4 md:m-8 overflow-hidden shadow-lg">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9lZmrJa3slSsT3KZw_YnmqpqMFM_LdOCj6q-AoDzN3k3SLRLcMqkgsE8T11PQQI49Wz1w5tqcx8uA3MThiwzFBU-I-6aLZvU6_ICA89O-I6pK57eWbGRGNPnjmwUCESnMg_pO2k90pnSY_pIk_Ny62SdKMsu_nO2lNTb2V-BALPMjXaMnD_IKVYEMaDw/s1672/girish-vertile.png"
          alt="Lade Stack development studio"
          className="w-full h-full object-cover grayscale contrast-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 text-white text-[10px] font-mono uppercase bg-black/80 px-2.5 py-1.5 tracking-wider border border-white/10">
          LADE STACK LAB • PUNE / PCMC<br />
          GIRISH LADE
        </div>
      </div>
    </section>
  )
}

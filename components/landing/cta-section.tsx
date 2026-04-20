"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-linear-to-br from-[#991B1B] to-[#7F1D1D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
          Pare de enviar currículos que são ignorados.
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Descubra em segundos o que está impedindo você de conseguir
          entrevistas.
        </p>
          <Link href="https://cv-perfeito.vercel.app/">
                <Button
                  size="lg"
                  className="bg-linear-to-b from-[#DC2626] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white shadow-xl shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40 hover:scale-[1.02] text-base px-8 h-14"
                >
                  Analisar meu currículo grátis
                </Button>
          </Link>
        <p className="mt-6 text-white/60 text-sm">
          Sem cartão de crédito. Resultado em menos de 2 minutos.
        </p>
      </div>
    </section>
  )
}

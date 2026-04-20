"use client"

import { X, Check, ArrowRight } from "lucide-react"

const beforeItems = [
  "Formatação inconsistente",
  "Sem palavras-chave relevantes",
  "Descrições genéricas",
  "Não otimizado para ATS",
  "Informações desorganizadas",
]

const afterItems = [
  "Formatação profissional",
  "Palavras-chave estratégicas",
  "Descrições com resultados",
  "100% compatível com ATS",
  "Estrutura otimizada",
]

export function BeforeAfter() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-[#DC2626] text-sm font-medium rounded-full mb-4">
            Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veja a diferença entre um currículo comum e um{" "}
            <span className="gradient-text">currículo otimizado</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch relative">
          <div className="relative bg-white rounded-3xl p-8 border-2 border-red-200 shadow-lg">
            <div className="absolute -top-4 left-8 bg-red-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              ANTES
            </div>

            <div className="mt-4 mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="space-y-3">
                <div className="h-6 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="border-t border-gray-200 my-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                  <div className="h-3 bg-gray-200 rounded w-4/5" />
                </div>
                <div className="border-t border-gray-200 my-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">42%</div>
                <div className="text-sm text-muted-foreground">ATS Score</div>
              </div>
            </div>

            <ul className="space-y-3">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-red-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <div className="w-16 h-16 bg-linear-to-r from-[#DC2626] to-[#991B1B] rounded-full flex items-center justify-center shadow-xl shadow-red-500/30">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="relative bg-white rounded-3xl p-8 border-2 border-green-200 shadow-lg">
            <div className="absolute -top-4 left-8 bg-green-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              DEPOIS
            </div>

            <div className="mt-4 mb-8 bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="space-y-3">
                <div className="h-6 bg-green-300 rounded w-3/4" />
                <div className="h-4 bg-green-200 rounded w-1/2" />
                <div className="border-t border-green-200 my-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-green-200 rounded w-full" />
                  <div className="h-3 bg-green-200 rounded w-5/6" />
                  <div className="h-3 bg-green-200 rounded w-4/5" />
                </div>
                <div className="border-t border-green-200 my-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-green-200 rounded w-full" />
                  <div className="h-3 bg-green-200 rounded w-3/4" />
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Python", "React", "Liderança"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-300 text-green-800 text-xs font-semibold rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-2">94%</div>
                <div className="text-sm text-muted-foreground">ATS Score</div>
              </div>
            </div>

            <ul className="space-y-3">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-green-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

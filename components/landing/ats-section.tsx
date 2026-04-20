"use client"

import { AlertTriangle, TrendingUp } from "lucide-react"

const stats = [
  { value: "75%", label: "dos currículos são rejeitados antes de serem vistos" },
  { value: "98%", label: "das empresas médias e grandes usam ATS" },
]

export function ATSSection() {
  return (
    <section id="ats" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-100">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                Importante saber
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              O que é ATS e por que ele{" "}
              <span className="gradient-text">rejeita</span> até bons candidatos?
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">ATS</strong> significa{" "}
                <em>Applicant Tracking System</em> — um software que empresas
                usam para gerenciar candidaturas.
              </p>
              <p>
                Antes de um recrutador ver seu currículo, o ATS analisa
                automaticamente o documento procurando palavras-chave específicas
                da vaga.
              </p>
              <p>
                Se o seu currículo não tiver os termos certos, ele é{" "}
                <strong className="text-[#DC2626]">
                  automaticamente descartado
                </strong>
                , mesmo que você seja o candidato perfeito.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="p-8 space-y-8">
                <h3 className="text-xl font-semibold text-center text-foreground">
                  Comparação de Score ATS
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span className="font-medium text-foreground">
                        Currículo comum
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-red-500">42%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-red-400 to-red-500 rounded-full transition-all duration-1000"
                      style={{ width: "42%" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Sem palavras-chave", "Formato errado", "Genérico"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="relative flex items-center justify-center py-4">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
                  <div className="relative bg-white px-4">
                    <div className="w-12 h-12 bg-linear-to-r from-[#DC2626] to-[#991B1B] rounded-full flex items-center justify-center shadow-lg shadow-red-500/25">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="font-medium text-foreground">
                        Currículo otimizado
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-green-500">94%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000"
                      style={{ width: "94%" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Palavras-chave certas",
                      "ATS compatível",
                      "Personalizado",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-green-50 to-emerald-50 px-8 py-4 border-t border-green-100">
                <p className="text-center text-sm text-green-700 font-medium">
                  Aumento médio de{" "}
                  <span className="font-bold">+52 pontos</span> no score ATS
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-green-600">+124%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

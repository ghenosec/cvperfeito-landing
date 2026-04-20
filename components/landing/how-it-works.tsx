"use client"

import { Upload, FileText, Sparkles, Download } from "lucide-react"

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Envie seu currículo",
    description: "Faça upload do seu currículo em PDF ou DOCX. É rápido e seguro.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Cole a descrição da vaga",
    description: "Copie e cole a descrição da vaga que você deseja se candidatar.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "A IA analisa e corrige",
    description: "Nossa inteligência artificial identifica problemas e sugere melhorias.",
  },
  {
    icon: Download,
    number: "04",
    title: "Baixe o currículo otimizado",
    description: "Receba seu currículo pronto para impressionar os recrutadores.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-[#DC2626] text-sm font-medium rounded-full mb-4">
            Simples e Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Melhore seu currículo em{" "}
            <span className="gradient-text">menos de 2 minutos</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-gray-200 via-[#DC2626] to-gray-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                  <div className="absolute -top-4 left-8 bg-linear-to-r from-[#DC2626] to-[#991B1B] text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg shadow-red-500/25">
                    {step.number}
                  </div>

                  <div className="pt-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-[#DC2626]" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center z-20 -translate-y-1/2">
                    <svg
                      className="w-4 h-4 text-[#DC2626]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { Check, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    description: "Perfeito para testar a ferramenta",
    features: [
      "1 análise ATS",
      "Carta de apresentação",
      "Score ATS",
      "Lista de erros encontrados",
    ],
    notIncluded: ["Download do currículo"],
    cta: "Começar Grátis",
    highlighted: false,
  },
  {
    name: "Básico",
    price: "R$ 4,90",
    description: "Ideal para quem está buscando emprego",
    features: [
      "5 análises ATS",
      "Carta de apresentação",
      "Currículo otimizado",
      "Download em PDF e DOCX",
      "Sugestões automáticas",
    ],
    notIncluded: [],
    cta: "Escolher Básico",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 9,90",
    description: "Para quem quer máxima vantagem",
    badge: "Mais escolhido",
    features: [
      "15 análises ATS",
      "Todos os benefícios do Básico",
      "Histórico de análises",
      "Comparação entre currículos",
      "Evolução do ATS Score",
      "Sugestões extras de melhoria",
      "Download em português e inglês",
    ],
    notIncluded: [],
    cta: "Escolher Premium",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-[#DC2626] text-sm font-medium rounded-full mb-4">
            Preços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o plano ideal{" "}
            <span className="gradient-text">para você</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece grátis e faça upgrade quando quiser
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white border-2 border-[#DC2626] shadow-2xl shadow-red-500/10 scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-linear-to-r from-[#DC2626] to-[#991B1B] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-red-500/25 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "R$ 0" && (
                    <span className="text-muted-foreground">/único</span>
                  )}
                </div>
                {plan.highlighted && (
                  <p className="text-xs text-[#DC2626] font-medium mt-2">
                    Melhor custo-benefício
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-gray-400 text-xs">-</span>
                    </div>
                    <span className="line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full h-12 text-base font-medium ${
                  plan.highlighted
                    ? "bg-linear-to-r from-[#DC2626] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white shadow-lg shadow-red-500/25"
                    : "bg-gray-100 text-foreground hover:bg-gray-200"
                }`}
              >
                <Link href="https://cv-perfeito.vercel.app/billing">
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

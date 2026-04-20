"use client"

import { Bot, Copy, Clock } from "lucide-react"

const problems = [
  {
    icon: Bot,
    title: "ATS elimina candidatos automaticamente",
    description:
      "Empresas usam sistemas que filtram currículos por palavras-chave. Se o seu currículo não tiver os termos certos, ele é descartado antes de chegar ao recrutador.",
  },
  {
    icon: Copy,
    title: "Enviar o mesmo currículo para todas as vagas não funciona",
    description:
      "Cada vaga exige palavras e foco diferentes. Um currículo genérico raramente passa pelos filtros automáticos de qualquer empresa.",
  },
  {
    icon: Clock,
    title: "Você perde horas sem saber o que está errado",
    description:
      "A frustração de não receber respostas é enorme. Você se candidata a dezenas de vagas e não entende por que ninguém retorna.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Você pode ser qualificado — mas o robô{" "}
            <span className="gradient-text">nunca deixa</span> seu currículo
            chegar ao recrutador.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-7 h-7 text-[#DC2626]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

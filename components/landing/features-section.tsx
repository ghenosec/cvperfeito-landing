"use client"

import {
  ScanSearch,
  Tags,
  SpellCheck,
  Wand2,
  FileText,
  Download,
} from "lucide-react"

const features = [
  {
    icon: ScanSearch,
    title: "Scanner ATS",
    description:
      "Analisa seu currículo como os sistemas de recrutamento fazem, identificando pontos fracos.",
  },
  {
    icon: Tags,
    title: "Sugestão de palavras-chave",
    description:
      "Identifica automaticamente os termos que faltam no seu currículo para cada vaga específica.",
  },
  {
    icon: SpellCheck,
    title: "Correção de gramática",
    description:
      "Detecta e corrige erros gramaticais e de ortografia que podem prejudicar sua candidatura.",
  },
  {
    icon: Wand2,
    title: "Reescrita profissional",
    description:
      "Reformula suas experiências de forma mais impactante e profissional usando IA.",
  },
  {
    icon: FileText,
    title: "Currículo para vaga específica",
    description:
      "Gera uma versão personalizada do seu currículo otimizada para cada vaga que você deseja.",
  },
  {
    icon: Download,
    title: "Download em PDF",
    description:
      "Baixe seu currículo otimizado em formato PDF pronto para enviar aos recrutadores.",
  },
]

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-[#DC2626] text-sm font-medium rounded-full mb-4">
            Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa para{" "}
            <span className="gradient-text">transformar</span> seu currículo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#DC2626]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

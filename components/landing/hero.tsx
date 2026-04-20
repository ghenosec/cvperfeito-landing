"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Upload, TrendingUp, Sparkles } from "lucide-react"
import Link from "next/link"

const analysisSteps = [
  "Analisando estrutura...",
  "Verificando palavras-chave...",
  "Otimizando para ATS...",
  "Corrigindo formatação...",
  "Finalizando análise...",
]

const features = [
  "Compatibilidade com ATS",
  "Correção automática",
  "Palavras-chave da vaga",
  "Currículo mais profissional",
]

const companies = [
  { name: "LinkedIn", color: "#0A66C2" },
  { name: "Gupy", color: "#FF6B6B" },
  { name: "Catho", color: "#00A651" },
  { name: "Indeed", color: "#2164F3" },
  { name: "InfoJobs", color: "#FF6600" },
]

export function Hero() {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = analysisSteps[currentStep]
    const typeSpeed = isDeleting ? 30 : 50
    const pauseTime = 1500

    if (!isDeleting && displayText === currentText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentStep((prev) => (prev + 1) % analysisSteps.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentText.slice(0, prev.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentStep])

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 to-white pointer-events-none" />
      <div className="absolute top-20 right-0 w-150 h-150 bg-linear-to-br from-red-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-linear-to-tr from-red-50/60 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100">
                <Sparkles className="w-4 h-4 text-[#DC2626]" />
                <span className="text-sm font-medium text-[#DC2626]">
                  Powered by AI
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Seu currículo está sendo{" "}
                <span className="gradient-text">rejeitado</span> antes mesmo de
                ser lido.
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Nosso sistema usa inteligência artificial para analisar, corrigir
                e otimizar seu currículo para passar em ATS e impressionar
                recrutadores.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
             <Link href="https://cv-perfeito.vercel.app/">
                <Button
                  size="lg"
                  className="bg-linear-to-b from-[#DC2626] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white shadow-xl shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40 hover:scale-[1.02] text-base px-8 h-14"
                >
                  Analisar meu currículo grátis
                </Button>
              </Link>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+12.000</span>{" "}
                currículos analisados
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {companies.map((company) => (
                  <div
                    key={company.name}
                    className="px-3 py-1.5 bg-gray-100/80 rounded-lg"
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: company.color }}
                    >
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              <div className="bg-linear-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-sm text-muted-foreground font-medium">
                    cvPERFEITO - Análise
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      curriculo_joao.pdf
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Enviado com sucesso
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Evolução do seu ATS Score
                      </h4>
                      <p className="text-xs text-muted-foreground">Últimas 3 análises</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Último score</p>
                      <p className="text-xl font-bold text-[#DC2626]">85/100</p>
                      <p className="text-xs text-green-500 font-medium flex items-center justify-end gap-0.5">
                        <TrendingUp className="w-3 h-3" />
                        30 pts
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-4">
                    <div className="flex">
                      <div className="flex flex-col justify-between text-[10px] text-muted-foreground pr-2 h-28">
                        <span>100</span>
                        <span>75</span>
                        <span>50</span>
                        <span>25</span>
                        <span>0</span>
                      </div>

                      <div className="flex-1 h-28 relative">
                        <svg 
                          className="w-full h-full" 
                          viewBox="0 0 200 100" 
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            <linearGradient id="areaGradientHero" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.02" />
                            </linearGradient>
                          </defs>

                          <line x1="0" y1="0" x2="200" y2="0" stroke="#f3f4f6" strokeWidth="0.5" />
                          <line x1="0" y1="25" x2="200" y2="25" stroke="#f3f4f6" strokeWidth="0.5" />
                          <line x1="0" y1="50" x2="200" y2="50" stroke="#f3f4f6" strokeWidth="0.5" />
                          <line x1="0" y1="75" x2="200" y2="75" stroke="#f3f4f6" strokeWidth="0.5" />
                          <line x1="0" y1="100" x2="200" y2="100" stroke="#f3f4f6" strokeWidth="0.5" />

                          <path
                            d="M 20 15 L 100 45 L 180 15 L 180 100 L 20 100 Z"
                            fill="url(#areaGradientHero)"
                          />

                          <path
                            d="M 20 15 L 100 45 L 180 15"
                            fill="none"
                            stroke="#DC2626"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />

                          <circle cx="20" cy="15" r="4" fill="white" stroke="#DC2626" strokeWidth="2" />
                          <circle cx="100" cy="45" r="4" fill="white" stroke="#DC2626" strokeWidth="2" />
                          <circle cx="180" cy="15" r="4" fill="white" stroke="#DC2626" strokeWidth="2" />

                          <text x="20" y="8" textAnchor="middle" fill="#1f2937" fontSize="10" fontWeight="600">85</text>
                          <text x="100" y="60" textAnchor="middle" fill="#1f2937" fontSize="10" fontWeight="600">55</text>
                          <text x="180" y="8" textAnchor="middle" fill="#1f2937" fontSize="10" fontWeight="600">85</text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-linear-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center animate-pulse-glow">
                    <Sparkles className="w-4 h-4 text-[#DC2626] animate-sparkle" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                      IA Ativa
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <span className="truncate">{displayText}</span>
                      <span className="animate-blink ml-0.5 text-[#DC2626] font-bold">|</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Otimizado!</p>
                  <p className="text-xs text-muted-foreground">ATS Score +52%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

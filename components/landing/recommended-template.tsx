"use client"

import Link from "next/link"
import { Award, Check, FileText, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

const templateFeatures = [
  "Layout aprovado por +500 recrutadores",
  "Estrutura otimizada para sistemas ATS",
  "Seções estrategicamente posicionadas",
  "Formatação profissional e limpa",
  "Compatível com todas as plataformas",
  "Testado em empresas Fortune 500",
]

export function RecommendedTemplate() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                Modelo Mais Recomendado
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Utilizamos o modelo de currículo{" "}
              <span className="gradient-text">mais recomendado</span> do mercado
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso template foi desenvolvido com base em pesquisas extensivas
              com recrutadores e especialistas em RH. O formato foi testado e
              aprovado pelas maiores empresas do Brasil e do mundo, garantindo
              que seu currículo tenha a melhor apresentação possível.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {templateFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-[#DC2626] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white shadow-lg shadow-red-500/20"
              >
                <Link href="https://cv-perfeito.vercel.app/">
                  Usar este modelo
                </Link>
              </Button>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground font-medium">
                  4.9/5 (2.847 avaliações)
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-linear-to-br from-gray-200 to-gray-300 rounded-full" />
                  <div className="space-y-1">
                    <div className="h-4 bg-gray-800 rounded w-32" />
                    <div className="h-2.5 bg-gray-400 rounded w-24" />
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="h-2 bg-gray-300 rounded w-20 ml-auto" />
                  <div className="h-2 bg-gray-300 rounded w-16 ml-auto" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 bg-[#DC2626] rounded w-2" />
                    <div className="h-2.5 bg-gray-700 rounded w-16" />
                  </div>
                  <div className="pl-4 space-y-1.5">
                    <div className="h-2 bg-gray-200 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-5/6" />
                    <div className="h-2 bg-gray-200 rounded w-4/6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 bg-[#DC2626] rounded w-2" />
                    <div className="h-2.5 bg-gray-700 rounded w-20" />
                  </div>
                  <div className="pl-4 space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex justify-between">
                        <div className="h-2.5 bg-gray-600 rounded w-28" />
                        <div className="h-2 bg-gray-300 rounded w-16" />
                      </div>
                      <div className="h-2 bg-gray-300 rounded w-20" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-5/6" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between">
                        <div className="h-2.5 bg-gray-600 rounded w-24" />
                        <div className="h-2 bg-gray-300 rounded w-16" />
                      </div>
                      <div className="h-2 bg-gray-300 rounded w-24" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-4/6" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 bg-[#DC2626] rounded w-2" />
                    <div className="h-2.5 bg-gray-700 rounded w-18" />
                  </div>
                  <div className="pl-4 flex flex-wrap gap-2">
                    <div className="h-5 bg-gray-100 border border-gray-200 rounded-full w-16" />
                    <div className="h-5 bg-gray-100 border border-gray-200 rounded-full w-12" />
                    <div className="h-5 bg-gray-100 border border-gray-200 rounded-full w-20" />
                    <div className="h-5 bg-gray-100 border border-gray-200 rounded-full w-14" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-2 shadow-lg">
                <Check className="w-5 h-5" />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">+50.000</p>
                <p className="text-xs text-muted-foreground">
                  currículos gerados
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -left-8 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">#1 Brasil</p>
                <p className="text-xs text-muted-foreground">em aprovação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

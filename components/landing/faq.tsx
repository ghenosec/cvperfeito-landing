"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Isso realmente funciona para ATS?",
    answer:
      "Sim! Nossa ferramenta foi desenvolvida especificamente para analisar currículos da mesma forma que os sistemas ATS fazem. Identificamos palavras-chave, formatação e estrutura para garantir que seu currículo passe pelos filtros automáticos.",
  },
  {
    question: "Posso enviar PDF?",
    answer:
      "Sim, aceitamos currículos em formato PDF e DOCX. Nossa tecnologia consegue ler e analisar ambos os formatos sem problemas.",
  },
  {
    question: "Funciona para qualquer área?",
    answer:
      "Sim! Nossa IA foi treinada com milhares de currículos de diferentes áreas, desde tecnologia até marketing, vendas, saúde, direito e muito mais. A análise é personalizada para cada descrição de vaga que você fornecer.",
  },
  {
    question: "O currículo fica pronto na hora?",
    answer:
      "Sim! A análise e otimização levam menos de 30 segundos. Você recebe seu currículo melhorado praticamente instantaneamente após o processamento.",
  },
  {
    question: "Preciso pagar para testar?",
    answer:
      "Não! Oferecemos uma análise gratuita para você conhecer a ferramenta. Você pode ver seu score ATS, erros encontrados e sugestões de melhoria sem pagar nada.",
  },
  {
    question: "Qual a diferença entre o plano Básico e o Premium?",
    answer:
      "O plano Básico oferece 5 análises, download em PDF/DOCX e sugestões automáticas. O Premium inclui 10 análises, histórico completo, comparação entre currículos, IA avançada para sugestões extras e download em português e inglês.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-[#DC2626] text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 data-[state=open]:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

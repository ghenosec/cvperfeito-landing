"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Analista de Marketing",
    content:
      "Depois de usar o CV por Vaga, finalmente comecei a receber respostas. Fui chamada para 3 entrevistas em uma semana!",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "Rafael Santos",
    role: "Desenvolvedor Frontend",
    content:
      "Meu currículo passou de 35% para 92% de compatibilidade ATS. Consegui meu emprego dos sonhos em uma startup.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Carolina Mendes",
    role: "Gerente de Projetos",
    content:
      "A ferramenta é incrível! Ela mostrou exatamente o que estava errado no meu currículo. Super recomendo.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "Lucas Oliveira",
    role: "Analista de Dados",
    content:
      "Eu não fazia ideia de que meu currículo estava sendo filtrado por robôs. Agora entendo porque não recebia respostas.",
    rating: 5,
    avatar: "LO",
  },
  {
    name: "Amanda Costa",
    role: "Designer UX",
    content:
      "Em 2 minutos consegui identificar todos os problemas do meu currículo. Simples, rápido e muito eficiente!",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Pedro Ferreira",
    role: "Engenheiro de Software",
    content:
      "Já tinha tentado várias ferramentas, mas essa é disparada a melhor. O score ATS aumentou 40 pontos!",
    rating: 5,
    avatar: "PF",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-50 text-[#DC2626] text-sm font-medium rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos usuários{" "}
            <span className="gradient-text">estão dizendo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 12.000 profissionais já transformaram seus currículos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#DC2626] to-[#991B1B] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

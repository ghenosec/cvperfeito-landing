# cvPERFEITO Landing Page

## Sobre o projeto

Este projeto é a landing page do **cvPERFEITO**, uma plataforma focada em análise, correção e otimização de currículos com apoio de inteligência artificial.

A página foi pensada para apresentar o produto de forma clara e persuasiva, destacando:

- o problema de currículos rejeitados por sistemas ATS
- os benefícios da otimização com IA
- a proposta de valor do produto
- prova social, comparação visual e FAQ
- caminhos de conversão para análise gratuita e contratação

O objetivo principal da landing é **converter visitantes em usuários**, conduzindo a navegação até os fluxos principais do produto.

## Objetivo da implementação

A aplicação foi estruturada para funcionar como uma página institucional e comercial de alta conversão, com foco em:

- comunicação rápida da proposta do produto
- organização modular por seções
- boa performance de carregamento
- adaptação para desktop e mobile
- facilidade de manutenção e evolução

## Como foi construída

O projeto foi desenvolvido com **Next.js** usando a arquitetura **App Router**, com a página principal montada a partir de componentes independentes.

Cada seção da landing foi separada em um componente próprio, o que ajuda na manutenção, reutilização e clareza do código. A composição principal acontece em `app/page.tsx`, que organiza a ordem de renderização da experiência:

- `Navbar`
- `Hero`
- `RecommendedTemplate`
- `ProblemSection`
- `HowItWorks`
- `ATSSection`
- `FeaturesSection`
- `BeforeAfter`
- `Pricing`
- `FAQ`
- `CTASection`
- `Footer`

Essa divisão permite evoluir o conteúdo de cada bloco sem impactar o restante da página.

## Tecnologias utilizadas

### Base da aplicação

- **Next.js 16**
- **React 19**
- **TypeScript**

### Estilo e interface

- **Tailwind CSS 4**
- **Radix UI**
- **Lucide React**
- **class-variance-authority**
- **tailwind-merge**

### Utilitários e componentes auxiliares

- **Recharts** para gráficos
- **Embla Carousel** para comportamentos de carrossel
- **React Hook Form** e **Zod** para formulários e validação
- **Sonner** para notificações
- **Vercel Analytics** para telemetria em produção

## Estrutura do projeto

### Diretórios principais

- `app/`: estrutura principal da aplicação com layout global, página inicial e estilos globais
- `components/landing/`: seções da landing page
- `components/ui/`: biblioteca de componentes reutilizáveis de interface
- `hooks/`: hooks utilitários
- `lib/`: funções auxiliares
- `styles/`: recursos adicionais de estilo, quando necessário

### Arquivos importantes

- `app/page.tsx`: compõe toda a landing page
- `app/layout.tsx`: define metadados, fonte global e integração com analytics
- `app/globals.css`: centraliza estilos globais e base visual

## Decisões de arquitetura

- **Composição por seções**: cada bloco da landing é isolado em um componente específico
- **Separação entre UI e conteúdo**: a página principal apenas organiza os blocos, sem concentrar toda a implementação
- **Reaproveitamento de componentes**: a pasta `components/ui/` serve como base para construir novas telas com consistência visual
- **Foco em performance**: uso de renderização estática para conteúdo institucional e estrutura leve para carregamento rápido
- **SEO básico configurado**: metadados definidos no layout para melhorar indexação e compartilhamento

## Experiência entregue

A landing foi construída para guiar o usuário por uma narrativa de conversão:

1. apresentar o problema
2. demonstrar a solução
3. mostrar como funciona
4. evidenciar benefícios
5. reforçar confiança com comparação, depoimentos e FAQ
6. conduzir para CTA e planos

## Público-alvo

O projeto atende principalmente pessoas que:

- estão buscando emprego
- precisam melhorar o currículo
- querem aumentar compatibilidade com ATS
- desejam uma apresentação mais profissional para processos seletivos

## Resultado esperado

Com essa estrutura, a landing serve como uma base sólida para:

- campanhas de aquisição
- validação de proposta comercial
- testes de conversão
- expansão futura do produto e de novas páginas

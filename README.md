# cvPERFEITO Landing Page

## Sobre o projeto

Este projeto e a landing page do [cvPERFEITO](https://cv-perfeito.vercel.app/), uma plataforma focada em analise, correcao e otimizacao de curriculos com apoio de inteligencia artificial.

A pagina foi pensada para apresentar o produto de forma clara e persuasiva, destacando:

- o problema de curriculos rejeitados por sistemas ATS
- os beneficios da otimizacao com IA
- a proposta de valor do produto
- prova social, comparacao visual e FAQ
- caminhos de conversao para analise gratuita e contratacao

O objetivo principal da landing e **converter visitantes em usuarios**, conduzindo a navegacao ate os fluxos principais do produto.

## Objetivo da implementacao

A aplicacao foi estruturada para funcionar como uma pagina institucional e comercial de alta conversao, com foco em:

- comunicacao rapida da proposta do produto
- organizacao modular por secoes
- boa performance de carregamento
- adaptacao para desktop e mobile
- facilidade de manutencao e evolucao

## Como foi construida

O projeto foi desenvolvido com **Next.js** usando a arquitetura **App Router**, com a pagina principal montada a partir de componentes independentes.

Cada secao da landing foi separada em um componente proprio, o que ajuda na manutencao, reutilizacao e clareza do codigo. A composicao principal acontece em `app/page.tsx`, que organiza a ordem de renderizacao da experiencia:

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

Essa divisao permite evoluir o conteudo de cada bloco sem impactar o restante da pagina.

## Tecnologias utilizadas

### Base da aplicacao

- **Next.js 16**
- **React 19**
- **TypeScript**

### Estilo e interface

- **Tailwind CSS 4**
- **Radix UI**
- **Lucide React**
- **class-variance-authority**
- **tailwind-merge**

### Utilitarios e componentes auxiliares

- **Recharts** para graficos
- **Embla Carousel** para comportamentos de carrossel
- **React Hook Form** e **Zod** para formularios e validacao
- **Sonner** para notificacoes
- **Vercel Analytics** para telemetria em producao

## Estrutura do projeto

### Diretorios principais

- `app/`: estrutura principal da aplicacao com layout global, pagina inicial e estilos globais
- `components/landing/`: secoes da landing page
- `components/ui/`: biblioteca de componentes reutilizaveis de interface
- `hooks/`: hooks utilitarios
- `lib/`: funcoes auxiliares
- `styles/`: recursos adicionais de estilo, quando necessario
- `public/`: arquivos estaticos expostos pela aplicacao, incluindo favicon

### Arquivos importantes

- `app/page.tsx`: compoe toda a landing page
- `app/layout.tsx`: define metadados, fonte global, favicon e integracao com analytics
- `app/globals.css`: centraliza estilos globais e base visual

## Decisoes de arquitetura

- **Composicao por secoes**: cada bloco da landing e isolado em um componente especifico
- **Separacao entre UI e conteudo**: a pagina principal apenas organiza os blocos, sem concentrar toda a implementacao
- **Reaproveitamento de componentes**: a pasta `components/ui/` serve como base para construir novas telas com consistencia visual
- **Foco em performance**: uso de renderizacao estatica para conteudo institucional e estrutura leve para carregamento rapido
- **SEO basico configurado**: metadados definidos no layout para melhorar indexacao e compartilhamento

## Experiencia entregue

A landing foi construida para guiar o usuario por uma narrativa de conversao:

1. apresentar o problema
2. demonstrar a solucao
3. mostrar como funciona
4. evidenciar beneficios
5. reforcar confianca com comparacao, depoimentos e FAQ
6. conduzir para CTA e planos

## Publico-alvo

O projeto atende principalmente pessoas que:

- estao buscando emprego
- precisam melhorar o curriculo
- querem aumentar compatibilidade com ATS
- desejam uma apresentacao mais profissional para processos seletivos

## Resultado esperado

Com essa estrutura, a landing serve como uma base solida para:

- campanhas de aquisicao
- validacao de proposta comercial
- testes de conversao
- expansao futura do produto e de novas paginas

## Observacoes

Este repositorio documenta a camada de apresentacao da landing page do cvPERFEITO. Ele prioriza clareza visual, modularidade e escalabilidade para futuras evolucoes do produto.

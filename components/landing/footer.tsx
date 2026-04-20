"use client"

const footerLinks = {
  produto: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Preços", href: "#precos" },
    { label: "Scanner ATS", href: "#recursos" },
  ],
  recursos: [
    { label: "Análise com IA", href: "#recursos" },
    { label: "Correção ATS", href: "#recursos" },
    { label: "Sugestões Profissionais", href: "#recursos" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-linear-to-br from-[#DC2626] to-[#991B1B] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CV</span>
              </div>
              <span className="font-semibold text-lg">
                cv<span className="text-[#DC2626]">PERFEITO</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Transforme seu currículo com inteligência artificial e conquiste a
              vaga dos seus sonhos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} cvPERFEITO. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-3">
            <span className="text-gray-400 text-sm">
              Desenvolvido por{" "}
              <a
                href="https://ghenotxt.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Gheno
              </a>
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
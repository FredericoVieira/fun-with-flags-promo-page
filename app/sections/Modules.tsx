const MODULES = [
  {
    title: "1. Fundações",
    description: "Setup, Página Inicial e Deploy",
    note: "Você terá um projeto completo e funcional em produção com as melhores tecnologias do mercado.",
  },
  {
    title: "2. Aprofundamento",
    description: "Página detalhada dos países",
    note: "Criação de nova rota e requisição à API para obter informações detalhadas de cada país.",
  },
  {
    title: "3. Refinamento",
    description: "Filtros, pesquisa e seleção",
    note: "Aplicação de filtros, pesquisa e ordenação dinâmica, além de refinamento de todo o projeto.",
  },
];

export default function Modules() {
  return (
    <section className="w-full lg:py-16 py-12 lg:px-60 px-12 bg-[var(--background)] z-10">
      <h2 className="text-3xl font-bold tracking-tight mb-8">
        Módulos do curso
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-8 text-center">
        {MODULES.map(({ title, description, note }) => (
          <div
            key={title}
            className="bg-[var(--secondary)] rounded-lg p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl text-center font-bold text-[var(--primary)] mb-4">
              {title}
            </h3>
            <h4 className="font-semibold mb-4">{description}</h4>
            <p className="text-sm">{note}</p>
          </div>
        ))}
      </div>
      <p className="text-1xl py-2">
        O curso é dividido em módulos, cada um com um objetivo específico para
        melhor separação dos conceitos e aprendizado. Simulamos na prática o
        desenvolvimento de uma aplicação web completa, desde a configuração
        inicial até o deploy em produção, gerando valor para ao usuário ao final
        de cada etapa.
      </p>
    </section>
  );
}

const CONCEPTS = [
  "Navegação entre rotas",
  "Consumo de API",
  "Gerenciamento de estado",
  "Ordenação de elementos",
  "Filtros de pesquisa",
  "Boas práticas",
  "Responsividade",
  "Deploy e hospedagem",
];

export default function Concepts() {
  return (
    <section className="w-4/5 px-4 sm:px-20 text-center z-10 mb-20 py-8 sm:py-20 bg-[var(--background)] rounded-lg shadow-sm">
      <p className="lg:text-3xl text-1xl font-bold tracking-tight mb-8">
        Além do desenvolvimento técnico, exploraremos conceitos fundamentais de
        aplicações web modernas:
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 list-disc list-inside text-left">
        {CONCEPTS.map((concept) => (
          <li
            key={concept}
            className="bg-[var(--secondary)] p-3 rounded-md shadow-sm hover:bg-[var(--primary)] transition pl-6"
          >
            {concept}
          </li>
        ))}
      </ul>
    </section>
  );
}

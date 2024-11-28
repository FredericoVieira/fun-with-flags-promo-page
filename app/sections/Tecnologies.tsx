import {
  ChevronsLeftRightEllipsis,
  CodeXml,
  FileCode2,
  FileCog,
  Framer,
  Palette,
} from "lucide-react";

const TECNOLOGIES = [
  {
    icon: <Framer size={36} />,
    title: "Next.js",
    description:
      "Framework otimizado para desenvolvimento web com diversas facilidades",
  },
  {
    icon: <CodeXml size={36} />,
    title: "React.js",
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário componentizadas",
  },
  {
    icon: <Palette size={36} />,
    title: "Tailwind CSS",
    description:
      "Framework de CSS que oferece classes pré-definidas para estilização ágil",
  },
  {
    icon: <FileCode2 size={36} />,
    title: "ESlint & Prettier",
    description:
      "Ferramentas de padronização de código evitam problemas de escrita e formatação",
  },
  {
    icon: <FileCog size={36} />,
    title: "TypeScript",
    description:
      "Superset de tipagem estática, melhora a qualidade e suporte ao desenvolvimento",
  },
  {
    icon: <ChevronsLeftRightEllipsis size={36} />,
    title: "Comunicação com API",
    description:
      "Troca de dados entre front-end e back-end usando protocolo REST",
  },
];

export default function Tecnologies() {
  return (
    <section className="w-full z-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {TECNOLOGIES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-[var(--primary)] lg:h-12 lg:w-12">
                {icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-[var(--secondary-light)]">
                {title}
              </h3>
              <p className="text-[var(--background)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

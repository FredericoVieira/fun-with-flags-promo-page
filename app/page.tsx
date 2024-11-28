import Image from "next/image";
import {
  BookA,
  ChevronsLeftRightEllipsis,
  CodeXml,
  DollarSign,
  FileCode2,
  FileCog,
  Flag,
  Framer,
  Globe,
  Map,
  Palette,
  Users,
} from "lucide-react";

const F9INE_LINK = "https://f9ine.com";
const COURSE_LINK =
  "https://www.udemy.com/course/fwfcurso/?referralCode=C72346365059AB53A363";

export default function Home() {
  return (
    <>
      <header className="w-full p-6 z-10">
        <a href={F9INE_LINK} target="_blank" rel="noreferrer">
          <Image
            alt="F9ine.com"
            src="/f9ine.svg"
            loading="lazy"
            decoding="async"
            width={32}
            height={32}
            className="rounded-md"
          />
        </a>
      </header>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="fixed inset-0 overflow-hidden opacity-90 bg-[#f1f1f1]">
            <Image
              alt="World Map"
              src="/world-map.svg"
              loading="lazy"
              decoding="async"
              width={1920}
              height={1080}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col items-center flex-1 px-4 sm:px-20 w-full text-center z-10 py-8 sm:py-20 text-[var(--primary)]">
            <h1 className="text-5xl font-bold tracking-tight mb-4 ">
              Fun with Flags
            </h1>
            <p className="text-2xl mt-2 mb-12">
              Crie uma aplicação front-end com React, Next e chamadas API
            </p>
            <div className="w-full max-w-xl mx-auto my-6">
              <section className="bg-[var(--background)] rounded-lg shadow-lg w-full hover:shadow-xl transition overflow-hidden p-5">
                <video
                  width="100%"
                  height="100%"
                  controls
                  controlsList="nodownload"
                  preload="auto"
                  autoPlay
                  playsInline
                  muted
                >
                  <source src="/fun-with-flags.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="flex lg:px-32 px-24 pt-6 pb-5">
                  <a
                    href={COURSE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="py-4 px-6 text-base w-full rounded-md bg-[var(--secondary)] text-center font-semibold text-white hover:text-[var(--background)] hover:bg-white"
                  >
                    Começar
                  </a>
                </div>
              </section>
            </div>
          </div>

          <section className="w-full lg:py-16 py-12 lg:px-60 px-12 bg-[var(--background)] z-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              O que vamos construir?
            </h2>
            <p className="text-1xl py-2">
              Iremos criar uma aplicação web que apresente todos os países e
              suas características, oferecendo uma experiência rica e
              informativa através de uma interface moderna e interativa.
            </p>
            <p className="text-1xl py-2">
              Utilizaremos uma API para obter informações precisas e atualizadas
              sobre os países. Os dados serão obtidos de forma dinâmica,
              garantindo conteúdo atualizado.
            </p>
            <p className="text-1xl py-2">Cada país será representado com:</p>
            <ul className="mt-6 space-y-6 ml-4 mb-6">
              <li className="flex items-center space-x-4">
                <Flag />
                <span className="font-semibold text-sm">Bandeira</span>
              </li>
              <li className="flex items-center space-x-4">
                <Users />
                <span className="font-semibold text-sm">População</span>
              </li>
              <li className="flex items-center space-x-4">
                <BookA />
                <span className="font-semibold text-sm">Língua oficial</span>
              </li>
              <li className="flex items-center space-x-4">
                <DollarSign />
                <span className="font-semibold text-sm">Moeda corrente</span>
              </li>
              <li className="flex items-center space-x-4">
                <Map />
                <span className="font-semibold text-sm">Fronteiras</span>
              </li>
              <li className="flex items-center space-x-4">
                <Globe />
                <span className="font-semibold text-sm">
                  Outras informações
                </span>
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-center">
              <div className="shadow-md hover:shadow-xl transition rounded-lg overflow-hidden">
                <Image
                  alt="Project mobile"
                  src="/project-mobile.png"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="object-cover h-full w-auto"
                />
              </div>
              <div className="shadow-md hover:shadow-xl transition rounded-lg overflow-hidden">
                <Image
                  alt="Project notebook"
                  src="/project-notebook.png"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="object-cover h-full w-auto"
                />
              </div>
              <div className="shadow-md hover:shadow-xl transition rounded-lg overflow-hidden">
                <Image
                  alt="Project mobile"
                  src="/project-mobile-2.png"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="object-cover h-full w-auto"
                />
              </div>
            </div>
          </section>

          <section className="w-full z-10">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
              <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-[var(--secondary)] lg:h-12 lg:w-12">
                    <Framer size={36} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">
                    Next.js
                  </h3>
                  <p className="text-[var(--background)]">
                    Framework otimizado para desenvolvimento web com diversas
                    facilidades
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-[var(--secondary)] lg:h-12 lg:w-12">
                    <CodeXml size={36} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">
                    React.js
                  </h3>
                  <p className="text-[var(--background)]">
                    Biblioteca JavaScript para construção de interfaces de
                    usuário componentizadas
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-[var(--secondary)] lg:h-12 lg:w-12">
                    <Palette size={36} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">
                    Tailwind CSS
                  </h3>
                  <p className="text-[var(--background)]">
                    Framework de CSS que oferece classes pré-definidas para
                    estilização ágil
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-[var(--secondary)] lg:h-12 lg:w-12">
                    <FileCode2 size={36} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">
                    ESlint &amp; Prettier
                  </h3>
                  <p className="text-[var(--background)]">
                    Ferramentas de padronização de código evitam problemas de
                    escrita e formatação
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-[var(--secondary)] lg:h-12 lg:w-12">
                    <FileCog size={36} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">
                    TypeScript
                  </h3>
                  <p className="text-[var(--background)]">
                    Superset de tipagem estática, melhora a qualidade e suporte
                    ao desenvolvimento
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-[var(--secondary)] lg:h-12 lg:w-12">
                    <ChevronsLeftRightEllipsis size={36} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">
                    Comunicação com API
                  </h3>
                  <p className="text-[var(--background)]">
                    Troca de dados entre front-end e back-end usando protocolo
                    REST
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-4/5 px-4 sm:px-20 text-center z-10 my-20 py-8 sm:py-20 bg-[var(--background)] rounded-lg shadow-sm">
            <p className="lg:text-3xl text-1xl font-bold tracking-tight mb-8">
              Além do desenvolvimento técnico, exploraremos conceitos
              fundamentais de aplicações web modernas:
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 list-disc list-inside text-left">
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Navegação entre rotas
              </li>
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Consumo de API
              </li>
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Gerenciamento de estado
              </li>
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Ordenação de elementos
              </li>
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Filtros de pesquisa
              </li>
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Boas práticas
              </li>
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Responsividade
              </li>
              <li className="bg-[var(--tertiary)] p-3 rounded-md shadow-sm hover:text-white hover:bg-[var(--secondary)] transition pl-6">
                Deploy e hospedagem
              </li>
            </ul>
          </section>

          <section className="w-full lg:py-16 py-12 lg:px-60 px-12 bg-[var(--background)] z-10">
            <p className="text-3xl font-bold tracking-tight mb-8">
              Módulos do curso
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-8 text-center">
              <div className="bg-[var(--tertiary)] shadow-md hover:shadow-xl transition rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1. Fundações</span>
                </div>
                <h3 className="font-semibold mb-4">
                  Setup, Página Inicial e Deploy
                </h3>
                <p>
                  Você terá um projeto completo e funcional em produção com as
                  melhores tecnologias do mercado.
                </p>
              </div>
              <div className="bg-[var(--tertiary)] shadow-md hover:shadow-xl transition rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2. Aprofundamento</span>
                </div>
                <h3 className="font-semibold mb-4">
                  Página detalhada dos países
                </h3>
                <p>
                  Criação de nova rota e requisição à API para obter informações
                  detalhadas de cada país.
                </p>
              </div>
              <div className="bg-[var(--tertiary)] shadow-md hover:shadow-xl transition rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3. Refinamento</span>
                </div>
                <h3 className="font-semibold mb-4">
                  Filtros, pesquisa e seleção
                </h3>
                <p>
                  Aplicação de filtros, pesquisa e ordenação dinâmica, além de
                  refinamento de todo o projeto.
                </p>
              </div>
            </div>
            <p className="text-1xl py-2">
              Este projeto não é apenas um curso, mas uma jornada completa de
              desenvolvimento, preparando você para os desafios reais do mercado
              de desenvolvimento web front-end.
            </p>
            <p className="text-1xl py-2 mb-6">
              Está pronto para começar o desenvolvimento?
            </p>
            <div className="flex lg:px-32 px-24 pt-6 justify-center">
              <a
                href={COURSE_LINK}
                target="_blank"
                rel="noreferrer"
                className="py-4 px-6 text-base w-full rounded-md bg-[var(--secondary)] text-center font-semibold text-white hover:text-[var(--background)] hover:bg-white max-w-96"
              >
                Começar
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full p-6 z-10 flex justify-center">
        <a
          href={F9INE_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center gap-2 font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition"
        >
          <Image
            alt="F9ine.com"
            src="/f9ine.svg"
            loading="lazy"
            decoding="async"
            width={32}
            height={32}
            className="rounded-md"
          />
          © 2024 - F9ine | Frederico Vieira
        </a>
      </footer>
    </>
  );
}

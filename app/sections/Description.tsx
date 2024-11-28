import Image from "next/image";
import { BookA, DollarSign, Flag, Globe, Map, Users } from "lucide-react";
import { SubscriptionButton } from "../components";

export default function Description() {
  return (
    <section className="w-full lg:py-16 py-12 lg:px-60 px-12 bg-[var(--background)] z-10">
      <h2 className="text-3xl font-bold tracking-tight">
        O que vamos construir?
      </h2>
      <div className="shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden my-8 mx-auto max-w-screen-lg">
        <Image
          alt="Project cover"
          src="/project-cover.png"
          loading="lazy"
          width={800}
          height={800}
          className="object-cover w-full h-auto"
        />
      </div>
      <p className="text-1xl py-2">
        Iremos criar uma aplicação web que apresente todos os países e suas
        características, oferecendo uma experiência rica e informativa através
        de uma interface moderna e interativa.
      </p>
      <p className="text-1xl py-2">
        Utilizaremos uma API para obter informações precisas e atualizadas sobre
        os países. Os dados serão obtidos de forma dinâmica, garantindo conteúdo
        atualizado.
      </p>
      <p className="text-1xl py-2">Cada país será representado com:</p>
      <ul className="mt-6 space-y-6 ml-4 mb-6">
        <li className="flex items-center space-x-4">
          <Flag className="text-[var(--primary)]" />
          <span className="font-semibold text-sm">Bandeira</span>
        </li>
        <li className="flex items-center space-x-4">
          <Users className="text-[var(--primary)]" />
          <span className="font-semibold text-sm">População</span>
        </li>
        <li className="flex items-center space-x-4">
          <BookA className="text-[var(--primary)]" />
          <span className="font-semibold text-sm">Língua oficial</span>
        </li>
        <li className="flex items-center space-x-4">
          <DollarSign className="text-[var(--primary)]" />
          <span className="font-semibold text-sm">Moeda corrente</span>
        </li>
        <li className="flex items-center space-x-4">
          <Map className="text-[var(--primary)]" />
          <span className="font-semibold text-sm">Fronteiras</span>
        </li>
        <li className="flex items-center space-x-4">
          <Globe className="text-[var(--primary)]" />
          <span className="font-semibold text-sm">Outras informações</span>
        </li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-2xl mb-8 mx-auto text-center">
        <div className="shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden">
          <Image
            alt="Project mobile"
            src="/project-mobile.png"
            loading="lazy"
            width={800}
            height={800}
            className="object-cover h-full w-auto"
          />
        </div>
        <div className="shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden">
          <Image
            alt="Project notebook"
            src="/project-notebook.png"
            loading="lazy"
            width={800}
            height={800}
            className="object-cover h-full w-auto"
          />
        </div>
        <div className="shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden">
          <Image
            alt="Project tablet"
            src="/project-tablet.png"
            loading="lazy"
            width={800}
            height={800}
            className="object-cover h-full w-auto"
          />
        </div>
        <div className="shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden">
          <Image
            alt="Project mobile 2"
            src="/project-mobile-2.png"
            loading="lazy"
            width={800}
            height={800}
            className="object-cover h-full w-auto"
          />
        </div>
      </div>
      <SubscriptionButton />
    </section>
  );
}

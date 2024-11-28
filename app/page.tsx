import Image from "next/image";
import { Footer, Header } from "./components";
import {
  Concepts,
  Description,
  Faq,
  Intro,
  Reviews,
  Modules,
  Price,
  Tecnologies,
} from "./sections";

export default function Home() {
  return (
    <>
      <Header />
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
          <Intro />
          <Description />
          <Tecnologies />
          <Concepts />
          <Modules />
          <Price />
          <Reviews />
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  );
}

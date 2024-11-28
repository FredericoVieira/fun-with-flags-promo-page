import Image from "next/image";
import { F9INE_LINK } from "../constants";

export default function Footer() {
  return (
    <footer className="w-full p-6 z-10 flex justify-center">
      <a
        href={F9INE_LINK}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-2 font-semibold text-[var(--secondary)] hover:text-[var(--secondary-light)] transition"
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
        © 2025 - F9ine | Frederico Vieira
      </a>
    </footer>
  );
}

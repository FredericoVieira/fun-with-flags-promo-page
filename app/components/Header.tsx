import Image from "next/image";
import { F9INE_LINK } from "../constants";

export default function Header() {
  return (
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
  );
}

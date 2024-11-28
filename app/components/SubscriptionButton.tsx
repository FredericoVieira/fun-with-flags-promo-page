import { COURSE_LINK } from "../constants";

export default function SubscriptionButton() {
  return (
    <div className="flex lg:w-6/12 md:w-2/3 w-full m-auto">
      <a
        href={COURSE_LINK}
        target="_blank"
        rel="noreferrer"
        className="py-4 px-6 text-base w-full rounded-md bg-[var(--primary)] text-center font-semibold text-white hover:bg-[var(--primary-light)]"
      >
        Começar
      </a>
    </div>
  );
}

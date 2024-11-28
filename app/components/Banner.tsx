import { SubscriptionButton } from "../components";

export default function Banner() {
  return (
    <div className="bg-[var(--foreground)] text-center rounded-lg shadow-sm p-8 md:p-12">
      <h2 className="text-2xl md:text-4xl font-bold text-[var(--primary)] mb-8">
        Aproveite a promoção de lançamento para transformar sua carreira!
      </h2>
      <h3 className="text-lg md:text-3xl text-[var(--secondary)] mb-4">
        Desconto exclusivo por tempo limitado:
      </h3>
      <div className="text-[var(--secondary-light)] mb-8">
        <h4 className="text-3xl">
          De <s>R$ 79,90</s> por R$ 29,97
        </h4>
        <span className="text-lg ">(Menos de 1 real por dia)</span>
      </div>
      <SubscriptionButton />
    </div>
  );
}

import { Star } from "lucide-react";
import { Carousel, SubscriptionButton } from "../components";
import review1 from "../../public/review-1.png";
import review2 from "../../public/review-2.png";
import review3 from "../../public/review-3.png";

const IMAGES = [review1, review2, review3];

export default function Reviews() {
  return (
    <section className="w-full lg:py-16 py-12 lg:px-60 px-12 bg-[var(--background)] z-10">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
        <div className="flex flex-row md:flex-col mt-2 md:mt-0 items-center">
          <span className="text-xl md:text-base">Avaliação do curso:</span>
          <div className="flex items-center">
            <span className="text-xl mr-1 ml-1 md:ml-0">4.9</span>
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={20}
                fill="var(--yellow)"
                className="text-[var(--secondary)]"
                strokeWidth={1.3}
              />
            ))}
          </div>
        </div>
      </div>
      <Carousel images={IMAGES} />
      <p className="text-1xl py-2">
        Este projeto não é apenas um curso, mas uma jornada completa de
        desenvolvimento, preparando você para os desafios reais do mercado de
        desenvolvimento web front-end.
      </p>
      <p className="text-1xl py-2 mb-6">
        Está pronto para começar o desenvolvimento?
      </p>
      <SubscriptionButton />
    </section>
  );
}

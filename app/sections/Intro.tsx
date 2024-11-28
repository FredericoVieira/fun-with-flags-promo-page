import { SubscriptionButton } from "../components";

export default function Intro() {
  return (
    <div className="flex flex-col items-center flex-1 px-4 sm:px-20 w-full text-center z-10 py-8 sm:py-20">
      <h1 className="text-5xl font-bold tracking-tight mb-4 text-[var(--primary)]">
        Fun with Flags
      </h1>
      <p className="max-w-xl text-2xl mt-2 mb-4 md:mb-12 text-[var(--secondary-light)]">
        Crie uma aplicação front-end com React, Next e chamadas API do zero ao
        deploy
      </p>
      <div className="w-full max-w-3xl mx-auto">
        <section className="bg-[var(--background)] rounded-lg shadow-lg w-full hover:shadow-xl transition overflow-hidden mb-8">
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
            <source src="/promo.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <SubscriptionButton />
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { contactDetails, reformContent } from "../data/portfolio";

const Reform = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("Reform");
  useGsapPageAnimations(scopeRef);

  return (
    <section
      ref={scopeRef}
      className="w-full bg-white px-4 py-16 text-black md:px-32"
    >
      <div className="max-w-xl">
        <AnimatedPageTitle title="Reform" subtitle={reformContent.eyebrow} />
      </div>

      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <RevealImage
          src="/img/reina2.webp"
          alt="Reina-Flo-Okori reform initiative editorial portrait"
          className="h-[420px] w-full md:h-[720px] md:w-[65%]"
        />

        <div className="w-full space-y-6 md:w-[35%]">
          <p className="text-lg font-semibold leading-snug text-neutral-900" data-gsap="fade-up">
            {reformContent.intro}
          </p>
          <p className="text-sm leading-relaxed text-neutral-600" data-gsap="fade-up">
            {reformContent.story}
          </p>
          <a
            href={`mailto:${contactDetails.email}`}
            className="inline-flex border border-black px-5 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
            data-gsap="fade-up"
          >
            Start a Reform Conversation
          </a>
        </div>
      </div>

      <div className="my-24 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl leading-none md:text-7xl">
          A premium, minimal framework for leaders rebuilding focus, culture,
          and sustainable excellence.
        </h2>
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3" data-gsap="stagger">
        {reformContent.pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="border border-neutral-200 p-6"
            data-gsap-item
          >
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              Reform
            </p>
            <h3 className="mt-4 text-3xl">{pillar.title}</h3>
            <p className="mt-5 text-sm leading-relaxed text-neutral-700">
              {pillar.body}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-24 flex flex-col gap-8 md:flex-row md:items-start">
        <div className="w-full md:w-[35%]" data-gsap="fade-up">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            Spotlight
          </p>
          <h3 className="mt-4 text-3xl md:text-5xl">
            The story behind the platform
          </h3>
        </div>

        <div className="w-full md:w-[40%]" data-gsap="stagger">
          {reformContent.spotlight.map((item) => (
            <div
              key={item}
              className="border-b border-neutral-200 py-4 text-sm text-neutral-800"
              data-gsap-item
            >
              {item}
            </div>
          ))}
        </div>

        <div className="w-full md:w-[25%]">
          <RevealImage
            src="/img/reina3.webp"
            alt="Editorial detail for the Reform initiative"
            className="aspect-[3/4] w-full"
          />
        </div>
      </section>
    </section>
  );
};

export default Reform;

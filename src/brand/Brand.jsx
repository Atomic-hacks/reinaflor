import React, { useRef } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { aboutSections } from "../data/portfolio";

const About = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("About");
  useGsapPageAnimations(scopeRef);

  return (
    <section ref={scopeRef} className="w-full px-4 md:px-32 bg-white">
      <div className="w-full">
        <section className="w-full text-black py-16">
          <div className="max-w-xl">
            <AnimatedPageTitle title="About" />
          </div>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-800"
            data-gsap="fade-up"
          >
            {aboutSections.intro}
          </p>

          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-8 mt-12">
            <RevealImage
              src="/img/reina1.webp"
              alt="Portrait of Reina-Flor Okori"
              className="w-full md:w-[65%] h-screen md:h-[750px]"
            />

            <div className="flex flex-col justify-between w-full md:w-[35%]">
              <div className="space-y-6">
                <p
                  className="text-xs text-neutral-700 font-medium uppercase tracking-[0.12em]"
                  data-gsap="fade-up"
                >
                  {aboutSections.founderLabel}
                </p>

                <p
                  className="text-lg md:text-xl leading-snug font-semibold text-neutral-900"
                  data-gsap="fade-up"
                >
                  {aboutSections.founderBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        <h1 className="text-4xl md:text-6xl max-w-3xl font-bold text-black mx-auto text-center my-20 md:my-40 leading-tight">
          {aboutSections.basedTitle}
        </h1>
      </div>

      <section className="w-full bg-white py-16 text-black">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="space-y-8 w-full md:w-[35%]">
            <span className="text-3xl font-semibold leading-tight">
              {aboutSections.valuesTitle}
            </span>

            <div className="flex flex-col gap-6 text-md leading-relaxed">
              {aboutSections.valuesBody.map((paragraph, idx) => (
                <p key={idx} className="text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative w-full md:w-[45%] aspect-4/3 overflow-hidden">
            <img
              src="/img/olympic1.webp"
              alt="Editorial landscape for Reina-Flor Okori"
              className="w-full h-full object-cover"
              data-gsap="parallax"
            />
          </div>

          <div className="relative flex flex-col w-full md:w-[20%] aspect-3/4 overflow-hidden">
            <img
              src="/img/olympic2.webp"
              alt="Editorial floral detail"
              className="w-full h-full object-cover"
            />
            <p className="mt-3 text-sm text-neutral-800">(Cultural Memory)</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

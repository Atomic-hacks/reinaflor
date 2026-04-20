import React, { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { aboutSections } from "../data/portfolio";
import { rfoImageSets, rfoImages } from "../data/rfoImages";

const serviceItems = [
  "Keynotes and conference sessions",
  "Leadership workshops and advisory",
  "Culture, performance, and identity talks",
  "Private sessions for founders and teams",
];

const editorialCards = [
  {
    title: "Leadership",
    body: "Olympic discipline translated into practical leadership language.",
    image: rfoImages[17],
  },
  {
    title: "Culture",
    body: "Performance with humanity, memory, and clarity at the center.",
    image: rfoImages[18],
  },
  {
    title: "Reform",
    body: "Sessions designed for renewal, resilience, and sustainable ambition.",
    image: rfoImages[19],
  },
];

const About = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("About");
  useGsapPageAnimations(scopeRef);

  return (
    <section ref={scopeRef} className="w-full bg-white text-black">
      <section className="w-full bg-white px-4 py-16 md:px-32">
        <div className="w-full">
          <div className="max-w-xl">
            <AnimatedPageTitle title="About" />
          </div>
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-800"
            data-gsap="fade-up"
          >
            {aboutSections.intro}
          </p>

          <div className="mt-8 flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div
              className="relative h-screen min-h-[560px] w-full overflow-hidden md:h-[780px] md:min-h-0 md:w-[68%]"
              data-gsap="reveal-image"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={rfoImageSets.aboutLead[0]}
                />
                <img
                  src={rfoImageSets.aboutGallery[1]}
                  alt="Portrait of Reina-Flor Okori"
                  className="h-full w-full object-cover object-center"
                  draggable={false}
                />
              </picture>
            </div>

            <div className="flex w-full flex-col justify-between md:w-[32%]">
              <div className="space-y-6">
                <p
                  className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-700"
                  data-gsap="fade-up"
                >
                  {aboutSections.founderLabel}
                </p>

                <p
                  className="text-lg leading-snug font-semibold text-neutral-900 md:text-xl"
                  data-gsap="fade-up"
                >
                  {aboutSections.founderBody}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3" data-gsap="stagger">
                {rfoImageSets.aboutGallery.slice(0, 2).map((image, index) => (
                  <div
                    key={image}
                    className={`overflow-hidden rounded-lg bg-neutral-100 ${
                      index === 0 ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                    data-gsap-item
                  >
                    <img
                      src={image}
                      alt="Reina-Flor Okori portrait study"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-32 md:py-24">
        <div className="w-full">
          <div className="mb-8" data-gsap="fade-up">
            <AnimatedPageTitle
              title="My Services."
              className="text-4xl text-black md:text-6xl"
            />
            <p className="mt-4 max-w-2xl text-sm text-neutral-600">
              Tailored sessions for stages, leadership teams, and culture-driven organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(420px,0.95fr)_1.25fr] md:items-start">
            <div data-gsap="reveal-image">
              <RevealImage
                src={rfoImageSets.aboutValues[0]}
                alt="Reina-Flor Okori editorial portrait"
                className="aspect-[4/5] w-full md:min-h-[620px]"
              />
            </div>

            <div className="border-t border-neutral-200" data-gsap="stagger">
              {serviceItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-neutral-200 py-5"
                  data-gsap-item
                >
                  <p className="text-sm font-medium text-neutral-900 md:text-base">
                    {item}
                  </p>
                  <span className="text-xl leading-none text-neutral-500">+</span>
                </div>
              ))}

              <Link
                to="/book-session"
                className="mt-6 inline-flex border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
              >
                BOOK a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f0f0f] px-4 py-16 text-white md:px-32 md:py-24">
        <div className="w-full">
          <AnimatedPageTitle
            title="Join the club"
            className="text-5xl text-white md:text-7xl"
          />

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[minmax(420px,0.95fr)_1.25fr] md:items-start">
            <div data-gsap="reveal-image">
              <RevealImage
                src={rfoImageSets.aboutLead[1]}
                alt="Reina-Flor Okori monochrome portrait"
                className="aspect-[4/5] w-full md:min-h-[640px]"
              />
            </div>

            <div className="max-w-2xl space-y-5" data-gsap="fade-up">
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                A space for leaders, founders, and teams who want sharper thinking,
                stronger culture, and a more sustainable way to perform.
              </p>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Sessions are shaped around pressure, identity, resilience, and the
                discipline needed to lead well over time.
              </p>
              <Link
                to="/book-session"
                className="inline-flex border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
              >
                BOOK a Session
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-[1.8fr_1fr_1fr]">
            {editorialCards.map((card, index) => (
              <article
                key={card.title}
                className="overflow-hidden bg-white/4"
                data-gsap="fade-up"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full object-cover ${
                    index === 0 ? "aspect-[16/11]" : "aspect-[4/5]"
                  }`}
                />
                <div className="space-y-3 p-5">
                  <h3 className="text-xl text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-32 md:py-24">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[1.35fr_1fr] md:items-center">
          <div data-gsap="fade-up">
            <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              Learn more
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-black md:text-5xl">
              Built from elite performance, cultural depth, and clear leadership thinking.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
              Every session is tailored to the room, whether the goal is a keynote,
              a strategic conversation, or a deeper culture reset.
            </p>
            <Link
              to="/book-session"
              className="mt-6 inline-flex border border-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
            >
              BOOK a Session
            </Link>
          </div>

          <div data-gsap="reveal-image">
            <RevealImage
              src={rfoImageSets.aboutGallery[0]}
              alt="Reina-Flor Okori portrait"
              className="aspect-[5/6] w-full md:min-h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-16 text-white md:px-32 md:py-24">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(360px,0.9fr)_1.35fr] md:items-center">
            <div data-gsap="reveal-image">
              <RevealImage
                src={rfoImageSets.aboutGallery[1]}
                alt="Reina-Flor Okori studio portrait"
                className="aspect-[4/5] w-full md:min-h-[620px]"
              />
            </div>

            <div className="space-y-8" data-gsap="fade-up">
              <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                Elite sport taught Reina-Flor how performance holds under pressure,
                and where it quietly breaks. That perspective now informs the way
                she speaks, teaches, and advises.
              </p>

              <blockquote className="max-w-3xl text-2xl leading-tight text-white md:text-4xl">
                "Talent is not lasting by own, but to stay, the only possible
                differentiator is the quality of execution."
              </blockquote>

              <Link
                to="/book-session"
                className="inline-flex border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
              >
                BOOK a Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

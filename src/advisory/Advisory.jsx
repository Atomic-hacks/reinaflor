import React, { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { rfoImageSets } from "../data/rfoImages";

const Advisory = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("Strategic Advisory Session");
  useGsapPageAnimations(scopeRef);

  const areasOfWork = [
    {
      title: "Product & Performance Alignment",
      description:
        "Is your product truly aligned with how athletes and humans perform in real conditions?",
      image: rfoImageSets.reform[0],
    },
    {
      title: "Athlete-Centric Strategy",
      description:
        "Understanding the real needs, behaviors, and mindset of athletes and high performers.",
      image: rfoImageSets.reform[1],
    },
    {
      title: "Market Positioning",
      description:
        "How to position your solution in the growing sports, health, and performance economy.",
      image: rfoImageSets.aboutValues[0],
    },
    {
      title: "Leadership & Team Performance",
      description:
        "Applying the Olympic Mindset to build resilient, high-performing teams.",
      image: rfoImageSets.journal[0],
    },
    {
      title: "Africa & Global Opportunities",
      description:
        "Strategic insights on building in or with African sports ecosystems.",
      image: rfoImageSets.speaking[2],
    },
  ];

  const outcomes = [
    "Sharper strategic clarity",
    "Actionable insights",
    "A performance-driven lens on your business",
  ];

  return (
    <section ref={scopeRef} className="w-full px-4 md:px-32 bg-white py-16">
      {/* Header */}
      <div className="max-w-4xl" data-gsap="fade-up">
        <AnimatedPageTitle title="Strategic Advisory Session" />
        <p
          className="mt-8 text-lg text-neutral-800 max-w-2xl"
          data-gsap="fade-up"
        >
          A high-impact 60-minute advisory session designed for founders,
          investors, and organizations building in sport, health, and human
          performance.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-20" />

      {/* What This Is - with image */}
      <section className="space-y-12" data-gsap="fade-up">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-[55%] space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-4">
                What This Is
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Strategic insight from elite performance applied to innovation.
              </h2>
              <p className="text-base leading-relaxed text-neutral-700">
                This is not coaching. This is strategic insight from 25 years of
                elite performance applied directly to your most pressing
                business challenges.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <RevealImage
              src={rfoImageSets.reform[2]}
              alt="Strategic Advisory"
              className="w-full h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-20" />

      {/* For Whom - with image */}
      <section className="space-y-12" data-gsap="fade-up">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
          <div className="w-full md:w-[55%] space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-4">
                For Whom
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Built for the builders.
              </h2>
              <ul className="space-y-4 text-base leading-relaxed text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-neutral-900">•</span>
                  <span>Sport tech startups</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-900">•</span>
                  <span>Health tech founders</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-900">•</span>
                  <span>Investors in sport & performance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-900">•</span>
                  <span>
                    Organizations building products or ecosystems around human
                    performance
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <RevealImage
              src={rfoImageSets.journal[1]}
              alt="For Whom"
              className="w-full h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-20" />

      {/* Areas We Cover - Grid with images */}
      <section className="space-y-12" data-gsap="fade-up">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-4">
            Areas We Cover
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Focused on what matters.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasOfWork.map((area, idx) => (
            <div key={idx} className="space-y-4 group">
              <div className="relative h-[280px] overflow-hidden">
                <RevealImage
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{area.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-700">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-20" />

      {/* Format - with image */}
      <section className="space-y-12" data-gsap="fade-up">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-[55%] space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-4">
                Format
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Designed for clarity and action.
              </h2>

              <ul className="space-y-4 text-base leading-relaxed text-neutral-700">
                <li className="flex gap-3">
                  <span className="text-neutral-900 font-semibold">•</span>
                  <span>60-minute private session (Zoom)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-900 font-semibold">•</span>
                  <span>Pre-session intake (your key challenge)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-900 font-semibold">•</span>
                  <span>
                    Post-session summary with key insights & recommendations
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <RevealImage
              src={rfoImageSets.speaking[0]}
              alt="Format"
              className="w-full h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-20" />

      {/* Investment - with image */}
      <section className="space-y-12" data-gsap="fade-up">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
          <div className="w-full md:w-[55%] space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-4">
                Investment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                €250 per session
              </h2>
              <p className="mt-6 text-base leading-relaxed text-neutral-700">
                Strategic clarity from 25 years of elite performance. Directly
                applied to your business challenge.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <RevealImage
              src={rfoImageSets.journal[3]}
              alt="Investment"
              className="w-full h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-20" />

      {/* Outcomes - with image */}
      <section className="space-y-12" data-gsap="fade-up">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-[55%] space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-4">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Leave with clarity.
              </h2>

              <ul className="space-y-4 text-base leading-relaxed text-neutral-700">
                {outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-neutral-900 font-semibold">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[45%]">
            <RevealImage
              src={rfoImageSets.aboutValues[1]}
              alt="Outcomes"
              className="w-full h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-20" />

      {/* CTA */}
      <section className="space-y-8 max-w-3xl py-12" data-gsap="fade-up">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-8">
            Book Your Session
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Ready to begin.
          </h2>

          <div className="flex flex-col gap-4">
            <a
              href="https://calendly.com/reinaflorokori/reform-and-olympic-mindset-by-reina-flor-okori-oly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
            >
              Book on Calendly
            </a>

            <div className="space-y-2">
              <p className="text-sm text-neutral-600">Or reach out directly:</p>
              <a
                href="mailto:contact@reina-flor.co"
                className="inline-flex text-sm font-semibold text-black hover:text-neutral-600 transition-colors"
              >
                contact@reina-flor.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Advisory;

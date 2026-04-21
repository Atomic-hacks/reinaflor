import React, { useRef } from "react";
import { Link } from "react-router-dom";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { rfoImageSets } from "../data/rfoImages";

const StrategicAdvisory = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("REFORM™ Strategic Advisory");
  useGsapPageAnimations(scopeRef);

  return (
    <section
      ref={scopeRef}
      className="w-full px-4 md:px-32 bg-white text-black"
    >
      {/* Hero */}
      <div
        className="min-h-screen flex flex-col items-center justify-center py-40 text-center space-y-6"
        data-gsap="fade-up"
      >
        <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
          Strategic Advisory
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
          REFORM™
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-xs">
          The Olympic Mindset™
        </p>
        <Link
          to="/advisory"
          className="mt-4 inline-flex border border-black px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors hover:bg-black hover:text-white"
        >
          Begin the transformation
        </Link>
      </div>

      {/* Hero image */}
      <div className="w-5xl mx-auto h-[70vh]" data-gsap="fade-up">
        <RevealImage
          src={rfoImageSets.reform[0]}
          alt="REFORM™ The Olympic Mindset"
          className="w-full h-full"
        />
      </div>

      {/* Statement */}
      <section className="py-24 space-y-6 mt-24">
        <div className="max-w-4xl" data-gsap="fade-up">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-8">
            The Foundation
          </p>
          <p className="text-4xl md:text-6xl font-bold leading-tight">
            25 years at the highest level of performance. Translated into
            systems for business, innovation, and growth.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200" />

      {/* What This Is + Areas of Work */}
      <section className="py-24 space-y-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div data-gsap="fade-up">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-8">
              What This Is
            </p>
            <div className="space-y-5 text-neutral-800">
              <p className="text-lg leading-relaxed">
                Strategic advisory for founders, investors, and organizations
                building in sport, health, and human performance.
              </p>
              <div className="pt-2 space-y-2 border-t border-neutral-200">
                <p className="font-semibold text-black">Not consulting.</p>
                <p className="font-semibold text-black">Not coaching.</p>
                <p className="font-semibold text-black">
                  A performance lens applied to critical decisions.
                </p>
              </div>
            </div>
          </div>

          <div data-gsap="fade-up">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-8">
              Areas of Work
            </p>
            <ul className="space-y-4">
              {[
                "Positioning",
                "Narrative",
                "Ecosystems",
                "Leadership",
                "Strategic Moments",
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-neutral-100 pb-4 last:border-0"
                >
                  <span className="text-xs text-neutral-400 w-5 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="font-semibold text-black text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200" />

      {/* Perspective */}
      <section className="py-24 space-y-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-[55%]" data-gsap="fade-up">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-8">
              Perspective
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-3xl md:text-4xl font-bold leading-tight text-black">
                Performance is not intensity.
              </p>
              <p className="text-2xl md:text-3xl leading-tight text-neutral-500 font-light">
                It is structure.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-base leading-relaxed text-neutral-700">
                It is identity, discipline, and timing.
              </p>
              <p className="text-base leading-relaxed text-neutral-700">
                What wins at the highest level is not effort, but alignment.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[45%] h-[720px]">
            <RevealImage
              src={rfoImageSets.reform[1]}
              alt="Perspective"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200" />

      {/* Ecosystem */}
      <section className="py-24 space-y-12">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-[55%]" data-gsap="fade-up">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-8">
              Ecosystem
            </p>
            <div className="space-y-5">
              <p className="text-2xl md:text-3xl font-bold leading-tight text-black">
                Operating across Africa and global markets.
              </p>
              <p className="text-base leading-relaxed text-neutral-700">
                Connecting founders, athletes, and institutions to build
                long-term value.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[45%] h-[720px]">
            <RevealImage
              src={rfoImageSets.journal[1]}
              alt="Ecosystem"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200" />

      {/* Format */}
      <section className="py-24 space-y-12">
        <div
          className="grid md:grid-cols-2 gap-16 items-center"
          data-gsap="fade-up"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              Format
            </p>
            <ul className="space-y-3">
              {[
                "Selective partnerships.",
                "3-month advisory engagements.",
                "Direct access.",
              ].map((item) => (
                <li key={item} className="text-lg font-semibold text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold leading-snug text-black">
              REFORM™ is the Olympic Mindset™ in practice.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200" />

      {/* CTA */}
      <section className="py-24 space-y-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-[55%]" data-gsap="fade-up">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-8">
              Inquire
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
              Inquire about the presentation.
            </h2>
            <div className="space-y-4 max-w-sm">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="button"
                  className="border border-black px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors hover:bg-black hover:text-white"
                >
                  Send Inquiry
                </button>
              </div>
              <p className="text-sm text-neutral-500">
                Or email: href="mailto:contact@reina-flor.co"
                className="font-semibold text-black hover:text-neutral-600
                transition-colors"
                <a>contact@reina-flor.co</a>
              </p>
            </div>
          </div>
          <div className="w-full md:w-[45%] h-[720px]">
            <RevealImage
              src={rfoImageSets.journal[3]}
              alt="Strategic Advisory"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="py-12" />
    </section>
  );
};

export default StrategicAdvisory;

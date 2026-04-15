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
      {/* Header with Image */}
      <div className="max-w-4xl" data-gsap="fade-up">
        <div className="flex items-baseline gap-2">
          <AnimatedPageTitle title="REFOrM Framework" />
          <span className="text-3xl md:text-5xl">™</span>
        </div>
        <p className="mt-4 text-lg text-neutral-700" data-gsap="fade-up">
          {reformContent.subtitle}
        </p>
      </div>

      {/* Hero Section with Image */}
      <div className="mt-20 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
        <div data-gsap="reveal-image" className="w-full md:w-[60%]">
          <RevealImage
            src="/img/reina2.webp"
            alt="Reina-Flor Okori REFORM Framework"
            className="w-full h-[420px] md:h-[650px]"
          />
        </div>
        <div className="w-full md:w-[35%] space-y-6">
          <div data-gsap="slide-right">
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 mb-3">
              Framework Overview
            </p>
            <p className="text-lg md:text-xl leading-snug font-semibold text-neutral-900">
              A premium, minimal framework for leaders rebuilding focus,
              culture, and sustainable excellence.
            </p>
          </div>
          <a
            href={`mailto:${contactDetails.email}`}
            className="inline-flex border border-black px-5 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
            data-gsap="fade-up"
          >
            Explore the Framework
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-24" />

      {/* Problem Section */}
      <section className="mt-24 space-y-12">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold text-black mb-8"
            data-gsap="fade-up"
          >
            {reformContent.problem.title}
          </h2>
          <p className="max-w-3xl text-lg text-neutral-800 mb-12">
            {reformContent.problem.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reformContent.problem.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="border-l-2 border-neutral-300 pl-6 py-2"
              data-gsap="slide-left"
            >
              <p className="text-lg font-semibold text-neutral-900">{reason}</p>
            </div>
          ))}
        </div>

        <div
          className="bg-neutral-50 p-8 md:p-12 space-y-6"
          data-gsap="scale-up"
        >
          <p className="text-base leading-relaxed text-neutral-800">
            {reformContent.problem.insight}
          </p>
          <p className="text-base leading-relaxed text-neutral-900 font-semibold">
            {reformContent.problem.solution}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-24" />

      {/* Solution Section with Image */}
      <section className="mt-24 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-gsap="slide-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {reformContent.solution.title}
            </h2>
            <p className="text-2xl font-semibold text-neutral-900 mb-4">
              {reformContent.solution.tagline}
            </p>
            <p className="text-base text-neutral-800 mb-8">
              {reformContent.solution.description}
            </p>
            <div
              className="bg-neutral-100 border border-neutral-300 p-6"
              data-gsap="scale-up"
            >
              <p className="text-sm text-neutral-900 font-semibold italic">
                {reformContent.solution.formula}
              </p>
            </div>
          </div>

          <div
            className="w-full h-[500px] overflow-hidden rounded-lg"
            data-gsap="parallax"
          >
            <img
              src="/img/olympic1.webp"
              alt="REFORM Framework Solution"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-24" />

      {/* Framework Section */}
      <section className="mt-24 space-y-12">
        <h2
          className="text-4xl md:text-5xl font-bold text-black mb-12"
          data-gsap="fade-up"
        >
          {reformContent.framework.title}
        </h2>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          data-gsap="stagger"
        >
          {reformContent.framework.components.map((component, idx) => (
            <div
              key={idx}
              className="border-2 border-neutral-300 p-6 text-center hover:bg-neutral-50 transition"
              data-gsap-item
            >
              <p className="text-2xl font-bold text-neutral-900">
                {component.label}
              </p>
              <p className="text-xs uppercase tracking-wider text-neutral-600 mt-2">
                {component.category}
              </p>
            </div>
          ))}
        </div>

        <div
          className="relative w-full aspect-4/3 overflow-hidden rounded-lg"
          data-gsap="parallax"
        >
          <img
            src="/img/olympic2.webp"
            alt="Framework Implementation"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-24" />

      {/* Three Pillars */}
      <section className="mt-24 space-y-12">
        <h2
          className="text-4xl md:text-5xl font-bold text-black mb-12"
          data-gsap="fade-up"
        >
          The Three Pillars
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-gsap="stagger"
        >
          {reformContent.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border border-neutral-200 p-8 hover:shadow-lg transition"
              data-gsap-item
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-700">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-24" />

      {/* Call to Action Section with Image */}
      <section className="mt-24">
        <h2
          className="text-4xl md:text-5xl font-bold text-black mb-12"
          data-gsap="fade-up"
        >
          {reformContent.callToAction.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div
            className="relative w-full aspect-3/4 overflow-hidden rounded-lg"
            data-gsap="parallax"
          >
            <img
              src="/img/reina3.webp"
              alt="Leadership Transformation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between space-y-6">
            {reformContent.callToAction.actions.map((action, idx) => (
              <a
                key={idx}
                href={`mailto:${contactDetails.email}`}
                className="border-2 border-black px-8 py-6 text-center font-semibold hover:bg-black hover:text-white transition"
                data-gsap="slide-right"
              >
                {action}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-24" />

      {/* Next Steps Section */}
      <section className="mt-24 space-y-12">
        <div data-gsap="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            {reformContent.nextSteps.title}
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-gsap="stagger"
        >
          {reformContent.nextSteps.items.map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-black pl-6 py-4"
              data-gsap-item
            >
              <p className="text-base font-semibold text-neutral-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-200 my-24" />

      {/* Closing Vision */}
      <section className="mt-24 text-center space-y-8 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-bold text-black leading-tight"
          data-gsap="fade-up"
        >
          REFOrM™: Transforming the Future of Leadership
        </h1>
        <p className="text-lg text-neutral-700" data-gsap="fade-up">
          Join leaders, executives, and teams who are reforming their approach
          to sustainable excellence, performance, and human transformation.
        </p>
        <a
          href={`mailto:${contactDetails.email}`}
          className="inline-flex border-2 border-black px-8 py-4 text-base font-semibold hover:bg-black hover:text-white transition mt-8"
          data-gsap="scale-up"
        >
          Start Your Reform Journey
        </a>
      </section>
    </section>
  );
};

export default Reform;

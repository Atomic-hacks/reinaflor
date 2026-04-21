import React, { useRef, useState } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { aboutSections } from "../data/portfolio";

const FAQ_ITEMS = [
  {
    question: "Keynotes and conference sessions",
    answer:
      "Reina delivers high-impact keynotes for corporate events, industry conferences, and leadership summits. Her talks blend personal Olympic stories with practical frameworks on resilience, elite performance, and leading under pressure. Sessions range from 30-minute spotlight talks to 90-minute deep dives with Q&A.",
  },
  {
    question: "Leadership workshops and advisory",
    answer:
      "Hands-on, half-day or full-day workshops for executive teams, founders, and high-performance groups. Topics include building winning team cultures, decision-making under uncertainty, and designing systems that sustain peak performance. Advisory retainers are available for ongoing strategic partnership.",
  },
  {
    question: "Culture, performance, and identity talks",
    answer:
      "These sessions explore the intersection of personal identity, cultural legacy, and professional excellence — especially relevant for organizations building inclusive, high-trust environments. Reina draws on her experience as a Black Olympian and entrepreneur to make these conversations both honest and actionable.",
  },
  {
    question: "Private sessions for founders and teams",
    answer:
      "Intimate, confidential sessions for founding teams at critical inflection points — raising a round, navigating a pivot, or managing rapid growth. Reina brings the mindset and tactical clarity of a world-class competitor to the messy reality of building a company.",
  },
];

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-t border-neutral-200 overflow-hidden"
      data-gsap="fade-up"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-base text-black tracking-wide pr-6">
          {item.question}
        </span>
        <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          maxHeight: open ? "300px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="text-sm text-neutral-500 leading-relaxed pb-6 max-w-prose">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

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

      {/* ── Values / Editorial ─────────────────────────────── */}
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

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="w-full py-20 text-black">
        <p
          className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-10"
          data-gsap="fade-up"
        >
          What I offer
        </p>

        <div className="border-b border-neutral-200">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={item.question} item={item} index={i} />
          ))}
        </div>

        <div className="mt-12" data-gsap="fade-up">
          <a
            href="/contact"
            className="inline-block border border-black text-black
          text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-black
          hover:text-white transition-colors duration-300"
          >
            Book a session
          </a>
        </div>
      </section>

      {/* ── Join the Club CTA ──────────────────────────────── */}
      <section className="w-full bg-black  px-4 md:px-32 py-28 my-8 overflow-hidden">
        <p
          className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6"
          data-gsap="fade-up"
        >
          Community
        </p>

        <div className="overflow-hidden" data-gsap="fade-up">
          <h2
            className="text-white font-serif leading-none"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Join the club
          </h2>
        </div>

        <div className="mt-10 max-w-sm" data-gsap="fade-up">
          <p className="text-neutral-400 text-sm leading-relaxed mb-8">
            Get exclusive access to Reina's inner circle — early invites to
            events, leadership frameworks, and honest dispatches from the
            intersection of sport, business, and life.
          </p>

          <div className="flex items-stretch border border-neutral-700 focus-within:border-white transition-colors duration-300">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-white text-xs px-4 py-3 placeholder-neutral-600 outline-none"
            />
            <button className="text-xs uppercase tracking-[0.12em] px-5 py-3 text-black bg-white hover:bg-neutral-200 transition-colors duration-300 whitespace-nowrap">
              Join
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

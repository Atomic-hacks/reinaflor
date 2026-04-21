import React, { useRef, useState } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { rfoImageSets } from "../data/rfoImages";

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

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const answerRef = useRef(null);

  return (
    <div
      className="border-t border-neutral-200 overflow-hidden"
      data-gsap="fade-up"
      style={{ "--gsap-delay": `${index * 0.1}s` }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-normal text-black tracking-wide pr-6">
          {item.question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15M1 8H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        ref={answerRef}
        className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          maxHeight: open ? "400px" : "0px",
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
    <section ref={scopeRef} className="w-full px-4 bg-white">
      <div className="w-full">
        {/* ── Header ─────────────────────────────────────────── */}
        <section className="w-full text-black py-16">
          <AnimatedPageTitle title="About" />
          <p
            className="mt-12 text-sm text-neutral-700 max-w-lg"
            data-gsap="fade-up"
          >
            Olympian. Leader. Founder.
          </p>
        </section>

        {/* ── Image Gallery ──────────────────────────────────── */}
        <section className="w-full py-16">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            data-gsap="fade-up"
          >
            <img
              src={rfoImageSets.aboutLead[0]}
              alt="Reina"
              className="w-full aspect-4/5 object-cover rounded-lg"
            />
            <img
              src={rfoImageSets.aboutLead[1]}
              alt="Reina"
              className="w-full aspect-4/5 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src={rfoImageSets.aboutGallery[i]}
                alt="Reina"
                className="w-full aspect-square object-cover rounded-lg"
              />
            ))}
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section className="w-full py-16">
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

          {/* Book CTA below FAQ */}
          <div className="mt-12" data-gsap="fade-up">
            href="/contact" className="inline-block border border-black
            text-black text-xs uppercase tracking-[0.15em] px-8 py-4
            hover:bg-black hover:text-white transition-colors duration-300"
            <a>Book a session</a>
          </div>
        </section>

        {/* ── Join the Club CTA ──────────────────────────────── */}
        <section className="w-full bg-black -mx-4 px-4 py-24 mt-16 overflow-hidden">
          <div data-gsap="fade-up">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Community
            </p>
          </div>

          {/* Cinematic oversized headline */}
          <div
            className="overflow-hidden"
            data-gsap="fade-up"
            style={{ "--gsap-delay": "0.1s" }}
          >
            <h2
              className="text-white font-serif leading-none"
              style={{
                fontSize: "clamp(3rem, 14vw, 9rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Join the club
            </h2>
          </div>

          <div
            className="mt-10 max-w-sm"
            data-gsap="fade-up"
            style={{ "--gsap-delay": "0.2s" }}
          >
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Get exclusive access to Reina's inner circle — early invites to
              events, leadership frameworks, and honest dispatches from the
              intersection of sport, business, and life.
            </p>

            {/* Inline email capture */}
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
      </div>
    </section>
  );
};

export default About;

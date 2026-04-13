import React, { useRef } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { journalEntries } from "../data/portfolio";

const Journal = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("Journal");
  useGsapPageAnimations(scopeRef);

  const JournalCard = ({ article, size = "regular" }) => {
    const isLarge = size === "large";

    return (
      <article className="group relative cursor-pointer" data-gsap="fade-up">
        <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
          <img
            src={article.image}
            alt={article.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="mt-4 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold text-black leading-snug flex-1">
              {article.title}
            </h3>

            <div className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 10h10M12 7l3 3-3 3" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-sm text-neutral-700">{article.date}</p>

            {isLarge && (
              <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </div>
            )}
          </div>

          <div className="h-[1.5px] origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
        </div>
      </article>
    );
  };

  return (
    <section ref={scopeRef} className="w-full bg-white py-16 px-4 md:px-32">
      <div className="max-w-xl">
        <AnimatedPageTitle title="Journal" />
      </div>

      <p className="text-sm text-neutral-700 font-medium mb-6">(Featured)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div>
          <JournalCard article={journalEntries.featured[0]} size="large" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <JournalCard article={journalEntries.featured[1]} size="small" />
          <JournalCard article={journalEntries.featured[2]} size="small" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {journalEntries.regular.map((article) => (
          <JournalCard key={article.id} article={article} size="regular" />
        ))}
      </div>
    </section>
  );
};

export default Journal;

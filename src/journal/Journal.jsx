import React, { useRef } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { journalEntries } from "../data/portfolio";

const Journal = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("Journal");
  useGsapPageAnimations(scopeRef);

  const JournalCard = ({ article }) => {
    return (
      <article className="group relative cursor-pointer" data-gsap="fade-up">
        <div className="relative overflow-hidden bg-gray-100 aspect-4/3">
          <img
            src={article.image}
            alt={article.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Minimal Content */}
        <div className="mt-3">
          <h3 className="text-sm font-semibold text-black">{article.title}</h3>
          <p className="text-xs text-neutral-600 mt-1">{article.date}</p>
        </div>
      </article>
    );
  };

  return (
    <section ref={scopeRef} className="w-full bg-white">
      <div className="bg-[#111111] px-4 py-12 text-white md:px-32 md:py-16">
        <div className="max-w-xl">
          <AnimatedPageTitle title="Journal" className="text-white" />
        </div>
      </div>

      <div className="bg-white px-4 py-12 md:px-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {journalEntries.featured
            .concat(journalEntries.regular)
            .map((article) => (
              <JournalCard key={article.id} article={article} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;

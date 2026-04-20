import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../component/ui/Card";
import Button from "../component/ui/special-button";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { workItems as allProjects } from "../data/portfolio";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const scopeRef = useRef(null);

  useDocumentTitle("Work");
  useGsapPageAnimations(scopeRef, [activeCategory]);

  const categories = [
    "All",
    "Leadership Platform",
    "Advisory",
    "Culture Venture",
    "Speaking",
    "Investment",
    "Thought Leadership",
  ];

  const filteredCards =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((item) => item.category === activeCategory);

  return (
    <div ref={scopeRef} className="min-h-screen bg-white">
      <section className="bg-[#111111] px-4 py-12 text-white md:px-32 md:py-16">
        <div className="relative">
          <div className="flex items-start justify-between">
            <div className="max-w-2xl">
              <AnimatedPageTitle
                title="Work"
                className="text-[5.5rem] md:text-[5.5rem] font-normal tracking-wide text-white"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-end gap-6">
            {categories.map((category) => (
              <Button
                key={category}
                title={category}
                onPress={() => setActiveCategory(category)}
                containerClass={`pb-4 text-base font-medium transition-all relative border-none ${
                  activeCategory === category
                    ? "!text-white"
                    : "!text-white/45 hover:!text-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 pt-12 md:px-32" data-gsap="stagger">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onClick={() => navigate(`/work/${item.id}`)}
                data-gsap-item
              >
                <Card
                  img={item.image}
                  hoverImg={item.hoverImage}
                  alt={item.title}
                  title={item.title}
                  meta={`${item.category} / ${item.year}`}
                  ctaLabel="Open Study"
                  onQuickAdd={() => navigate(`/work/${item.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;

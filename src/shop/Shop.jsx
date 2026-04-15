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
    <div ref={scopeRef} className="min-h-screen bg-white px-4 md:px-32">
      <div className="relative py-16 bg-white">
        <div className="flex items-start justify-between">
          <div className="max-w-2xl">
            <AnimatedPageTitle
              title="Olympiadiary"
              className="text-[5.5rem] md:text-[5.5rem] font-normal tracking-wide mb-6 text-black"
            />
            <p
              className="text-base tracking-wide leading-relaxed max-w-lg text-neutral-800 font-medium"
              data-gsap="fade-up"
            >
              Selected case studies, ventures, and leadership platforms shaped
              around performance, culture, and sustainable growth.
            </p>
          </div>

          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M12 4L4 12M4 4l8 8" />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-end gap-6 ">
          {categories.map((category) => (
            <Button
              key={category}
              title={category}
              onPress={() => setActiveCategory(category)}
              containerClass={`pb-4 text-base font-medium transition-all relative border-none ${
                activeCategory === category
                  ? "!text-black"
                  : "!text-gray-400 hover:!text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center pb-20" data-gsap="stagger">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4">
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
    </div>
  );
};

export default Work;

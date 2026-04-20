import React, { useRef } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { rfoImageSets } from "../data/rfoImages";

const About = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("About");
  useGsapPageAnimations(scopeRef);

  return (
    <section ref={scopeRef} className="w-full px-4 md:px-32 bg-white">
      <div className="w-full">
        {/* Header Section - Minimal */}
        <section className="w-full text-black py-16">
          <AnimatedPageTitle title="About" />
          <p
            className="mt-12 text-sm text-neutral-700 max-w-lg"
            data-gsap="fade-up"
          >
            Olympian. Leader. Founder.
          </p>
        </section>

        {/* Image Gallery - Primary Focus */}
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
            <img
              src={rfoImageSets.aboutGallery[0]}
              alt="Reina"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img
              src={rfoImageSets.aboutGallery[1]}
              alt="Reina"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img
              src={rfoImageSets.aboutGallery[2]}
              alt="Reina"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;

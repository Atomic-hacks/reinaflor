import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useGsapPageAnimations = (scopeRef, dependencies = []) => {
  useLayoutEffect(() => {
    if (!scopeRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-gsap='title']").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 72, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-gsap='fade-up']").forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            delay: index * 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-gsap='reveal-image']").forEach((element) => {
        const image = element.querySelector("img");
        if (!image) return;

        gsap.fromTo(
          image,
          { clipPath: "inset(0% 0% 100% 0%)", scale: 1.08 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-gsap='stagger']").forEach((element) => {
        const items = element.querySelectorAll("[data-gsap-item]");
        if (!items.length) return;

        gsap.fromTo(
          items,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-gsap='parallax']").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      });
    }, scopeRef);

    return () => ctx.revert();
  }, dependencies);
};

export const gsapScrollToTop = () =>
  gsap.to(window, {
    duration: 0.85,
    scrollTo: { y: 0 },
    ease: "power3.out",
    overwrite: "auto",
  });

export default gsap;

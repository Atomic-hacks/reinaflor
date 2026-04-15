import { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize Lenis smooth scroll
let lenisInstance = null;
let rafCallback = null;

export const useLenisScroll = () => {
  useEffect(() => {
    // Only initialize once
    if (lenisInstance) return;

    try {
      // Initialize Lenis with recommended GSAP settings
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 2,
      });

      // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
      lenisInstance.on("scroll", ScrollTrigger.update);

      // Create the RAF callback function
      rafCallback = (time) => {
        lenisInstance.raf(time * 1000); // Convert time from seconds to milliseconds
      };

      // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
      gsap.ticker.add(rafCallback);

      // Disable lag smoothing in GSAP to prevent any delay in scroll animations
      gsap.ticker.lagSmoothing(0);
    } catch (error) {
      console.error("Error initializing Lenis:", error);
    }

    return () => {
      if (rafCallback) {
        gsap.ticker.remove(rafCallback);
      }
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
        rafCallback = null;
      }
      gsap.ticker.lagSmoothing(0.3); // Reset to default
    };
  }, []);

  return lenisInstance;
};

export const useGsapPageAnimations = (scopeRef, dependencies = []) => {
  useLayoutEffect(() => {
    if (!scopeRef.current) return undefined;

    const ctx = gsap.context(() => {
      // Title animations - Large, impactful entrance
      gsap.utils.toArray("[data-gsap='title']").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // Fade up animations - Staggered, intentional timing
      gsap.utils.toArray("[data-gsap='fade-up']").forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              once: true,
            },
          },
        );
      });

      // Reveal image animations - Cinematic entrance with scale
      gsap.utils.toArray("[data-gsap='reveal-image']").forEach((element) => {
        const image = element.querySelector("img");
        if (!image) return;

        gsap.fromTo(
          image,
          { clipPath: "inset(0% 0% 100% 0%)", scale: 1.1 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      // Stagger animations - Grid of cards with elegant timing
      gsap.utils.toArray("[data-gsap='stagger']").forEach((element) => {
        const items = element.querySelectorAll("[data-gsap-item]");
        if (!items.length) return;

        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // Parallax animations - Immersive, cinematic effect
      gsap.utils.toArray("[data-gsap='parallax']").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -12 },
          {
            yPercent: 12,
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

      // Scale up on scroll animations - Elegant growth
      gsap.utils.toArray("[data-gsap='scale-up']").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // Slide in from left - Cinematic entrance
      gsap.utils.toArray("[data-gsap='slide-left']").forEach((element) => {
        gsap.fromTo(
          element,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          },
        );
      });

      // Slide in from right - Cinematic entrance
      gsap.utils.toArray("[data-gsap='slide-right']").forEach((element) => {
        gsap.fromTo(
          element,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          },
        );
      });

      // Text reveal animations - Letter by letter reveal
      gsap.utils.toArray("[data-gsap='text-reveal']").forEach((element) => {
        const text = element.textContent;
        element.innerHTML = text
          .split("")
          .map(
            (char) =>
              `<span style="display: inline-block; overflow: hidden;"><span style="display: inline-block;">${char}</span></span>`,
          )
          .join("");

        const chars = element.querySelectorAll("span span");
        gsap.fromTo(
          chars,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // Parallax text animations - Very subtle, text readable first
      gsap.utils.toArray("[data-gsap='parallax-text']").forEach((element) => {
        // First, animate text in with full opacity
        gsap.fromTo(
          element,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          },
        );

        // Then apply subtle parallax after text is readable
        gsap.fromTo(
          element,
          { y: 0 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 2,
            },
          },
          0.5, // Slight delay before parallax starts
        );
      });

      // New animation: Blur reveal effect
      gsap.utils.toArray("[data-gsap='blur-reveal']").forEach((element) => {
        gsap.fromTo(
          element,
          { filter: "blur(10px)", opacity: 0 },
          {
            filter: "blur(0px)",
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // New animation: Rotate and scale entrance
      gsap.utils.toArray("[data-gsap='rotate-scale']").forEach((element) => {
        gsap.fromTo(
          element,
          { rotation: 5, scale: 0.9, opacity: 0 },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1.3,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      // New animation: Line draw effect (for borders/lines)
      gsap.utils.toArray("[data-gsap='line-draw']").forEach((element) => {
        const length = element.getTotalLength ? element.getTotalLength() : 0;
        if (!length) return;

        gsap.fromTo(
          element,
          {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 0,
          },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
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

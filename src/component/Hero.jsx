"use client";

import React, { useEffect, useState } from "react";
import Button from "./ui/special-button";
import { useNavigate } from "react-router-dom";
import AnimatedPageTitle from "./ui/AnimatedPageTitle";
import gsap from "../lib/gsap";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { rfoImageSets } from "../data/rfoImages";

const Hero = () => {
  const [time, setTime] = useState(null);
  const heroRef = React.useRef(null);
  const navigate = useNavigate();
  useDocumentTitle("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Africa/Lagos",
    });

    const updateTime = () => {
      setTime({
        value: formatter.format(new Date()),
        timeZone: "Lagos",
      });
    };

    updateTime();
    const intervalId = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-title]",
        { y: 56, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        "[data-hero-nav]",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          delay: 0.35,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        "[data-hero-copy]",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.25,
          ease: "power3.out",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden text-white bg-[#161616]"
    >
      <img
        src={rfoImageSets.hero}
        alt="Reina-Flor Okori portrait"
        className="absolute inset-0 z-10 h-full w-full object-center object-cover"
      />

      <div className="absolute inset-0 z-20 bg-linear-to-b from-transparent via-black/50 to-transparent" />

      <nav className="relative z-30 flex flex-col items-center justify-center text-center mt-48 md:mt-72">
        <div data-hero-title>
          <AnimatedPageTitle
            title="Reina-Flor-Okori"
            className="uppercase tracking-[3px] text-4xl md:text-8xl font-normal text-white"
          />
        </div>

        <p
          className="mt-5 mb-8 max-w-sm text-sm uppercase tracking-[0.28em] text-white/80"
          data-hero-copy
        >
          Olympic insight for leadership, culture, and reform.
        </p>

        <ul className="space-y-2">
          {[
            { title: "About", href: "/about" },
            { title: "Olympiadiary", href: "/olympiadiary" },
            { title: "Podcast", href: "/podcast" },
            { title: "REFOrM", href: "/reform" },
            { title: "Journal", href: "/journal" },
            { title: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.title} data-hero-nav>
              <Button title={item.title} onPress={() => navigate(item.href)} />
            </li>
          ))}
        </ul>
      </nav>

      {time && (
        <div className="absolute bottom-0 z-30 flex items-center justify-center w-full py-4 text-xs md:text-sm">
          <h2 className="font-heading mr-2">{time.timeZone}:</h2>
          <p>{time.value}</p>
        </div>
      )}
    </section>
  );
};

export default Hero;

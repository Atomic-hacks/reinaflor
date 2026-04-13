"use client";

import React, { useEffect, useState } from "react";
import Button from "./ui/special-button";
import SpotifyPlayer from "./ui/spotify-player";
import { useNavigate } from "react-router-dom";
import AnimatedPageTitle from "./ui/AnimatedPageTitle";
import gsap from "../lib/gsap";
import useDocumentTitle from "../hooks/useDocumentTitle";

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
        src="/img/reina4.webp"
        alt="reina-hero"
        className="absolute inset-0 z-10 h-full w-full md:object-center object-contain"
      />

      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-transparent" />

      <nav className="relative z-30 flex flex-col items-center justify-center text-center mt-48 md:mt-72">
        <div data-hero-title>
          <AnimatedPageTitle
            title="Reina-Flo-Okori"
            className="uppercase tracking-[3px] text-4xl md:text-8xl font-normal mb-8 text-white"
          />
        </div>
        <p
          className="mb-8 max-w-md px-6 text-sm uppercase tracking-[0.22em] text-white/80"
          data-hero-copy
        >
          Olympian, founder, investor, and storyteller shaping leadership,
          culture, and sustainable performance.
        </p>

        <ul className="space-y-2">
          {[
            { title: "About", href: "/about" },
            { title: "Work", href: "/work" },
            { title: "Journal", href: "/journal" },
            { title: "Contact", href: "/contact" },
            { title: "Reform", href: "/reform" },
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

      <SpotifyPlayer />
    </section>
  );
};

export default Hero;

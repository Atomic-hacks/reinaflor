import React, { useEffect, useState } from "react";
import Button from "./ui/special-button";
import SpotifyPlayer from "./ui/spotify-player";

const Hero = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Mock data (simulating what the API would return)
    const mockData = {
      dateTime: "2025-11-07T12:45:32",
      timeZone: "London",
    };

    // Simulate API delay
    setTimeout(() => {
      console.log("✅ Using mock time data:", mockData);
      setTime(mockData);
    }, 500);
  }, []);

  if (!time) return <p className="text-white text-center">Loading...</p>;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-transparent  z-20" />
      <video
        src="/videos/hero-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-center object-cover md:object-cover z-10"
      />

      <nav className="relative flex flex-col justify-center items-center h-96 z-50 my-72 text-center text-white">
        <h1 className="uppercase tracking-[3px] text-3xl md:text-5xl mb-8">
          Atom.
        </h1>
        <ul className="max-w-2xl mx-auto">
          <li className="mb-2">
            <Button title="shop" />
          </li>
          <li className="mb-2">
            <Button title="accessories" />
          </li>
          <li className="mb-2">
            <Button title="Brand" />
          </li>
          <li className="mb-2">
            <Button title="Journal" />
          </li>
          <li className="mb-2">
            <Button title="Contact" />
          </li>
        </ul>
      </nav>

      <div className="absolute z-50 flex items-center justify-center bottom-0 py-4 text-white w-full text-center">
        <h2 className="font-heading mr-2">{time.timeZone}:</h2>
        <p className="text-xs">
          {new Date(time.dateTime).toLocaleString("en-GB", {
            timeStyle: "medium",
            hour12: false,
          })}
        </p>
      </div>
      <SpotifyPlayer />
    </section>
  );
};

export default Hero;

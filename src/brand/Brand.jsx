import React from "react";
import { motion as Motion } from "framer-motion";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";

const Brand = () => {
  return (
    <section className="w-full px-4 md:px-32 bg-white">
      <div className="w-full">
        <section className="w-full text-black py-16">
          {/* Section Title */}
          <div className="max-w-xl">
            <AnimatedPageTitle title="Our Brand" />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-8">
            <RevealImage
              src="/img/goth-boy.jpg"
              alt=""
              className="w-full md:w-[65%] h-[420px] md:h-[750px]"
            />

            {/* Right - Content */}
            <div className="flex flex-col justify-between w-full md:w-[35%]">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <Motion.p
                    className="text-md text-neutral-600 font-semibold"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    (Meet The Founder)
                  </Motion.p>
                </div>

                <div className="overflow-hidden">
                  <Motion.p
                    className="text-lg md:text-xl leading-snug font-semibold text-neutral-900"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    From the streets of New York City to the world stage, a
                    passion for fashion sparked a movement. What began as a
                    hobby - crafting unique garments for fun - evolved into a
                    global brand, iconic for its retro flair and timeless style.
                    Today, our watches and accessories are worn by style
                    enthusiasts everywhere.
                  </Motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Middle Title */}
        <h1 className="text-4xl md:text-7xl max-w-xl font-bold text-black mx-auto text-center my-20 md:my-40 leading-none">
          (Based) SCANDANAVIA
        </h1>
      </div>

      {/* Bottom Section */}
      <section className="w-full bg-white py-16 text-black">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-8 w-full md:w-[35%]">
            <span className="text-3xl font-semibold leading-tight">
              Sustainable Style: We Source Only the Finest Organic Cotton and
              Wool.
            </span>

            <div className="flex flex-col md:flex-row gap-6 text-md leading-relaxed">
              <p>
                At Atom, we believe fashion and nature go hand-in-hand. That's
                why we source only organic cotton and materials, reducing our
                environmental footprint.
              </p>
              <p>
                Atom is committed to sustainable practices. From seed to
                stitch, we're minimizing our ecological footprint with 100%
                organic materials.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative w-full md:w-[45%] aspect-[4/3] overflow-hidden">
            <img
              src="/img/goth-towers.jpg"
              alt="Moss-covered cave landscape showcasing natural organic materials"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative flex flex-col w-full md:w-[20%] aspect-[3/4] overflow-hidden">
            <img
              src="/img/goth-flowers.jpg"
              alt="Pima Cotton"
              className="w-full h-full object-cover"
            />
            <p className="mt-3 text-sm text-neutral-800">(Pima Cotton)</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Brand;

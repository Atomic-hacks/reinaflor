import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="relative w-full bg-[#161616] text-white  px-4 pt-12 md:px-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:my-0 mt-16">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-[1px]">
            Subscribe for notes on leadership, reform, and culture
          </h3>

          <form className="flex items-center border-b border-neutral-600 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-neutral-300 placeholder-neutral-500 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm px-4 py-2 rounded"
            >
              JOIN
            </button>
          </form>
        </div>
        <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm md:m-0 my-12">
          <div>
            <h3 className="text-neutral-500 mb-4 uppercase text-xs tracking-wide">
              (Practice)
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-neutral-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-neutral-500 transition">
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/reform"
                  className="hover:text-neutral-500 transition"
                >
                  Reform
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-500 mb-4 uppercase text-xs tracking-wide">
              (Navigate)
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-neutral-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="hover:text-neutral-500 transition"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-neutral-500 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:reina-flor.okori@olympian.org"
                  className="hover:text-neutral-500 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-500 mb-4 uppercase text-xs tracking-wide">
              (Focus)
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-neutral-500 transition">
                  Leadership
                </span>
              </li>
              <li>
                <span className="hover:text-neutral-500 transition">
                  Wellbeing
                </span>
              </li>
              <li>
                <span className="hover:text-neutral-500 transition">
                  Storytelling
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="flex mt-5 md:mt-28">
        <h1 className="text-5xl md:text-8xl">Reina-Flor-OKORI.</h1>
        <p className="uppercase text-[9px] md:text-sm">
          Performance, culture, and reform
        </p>
      </span>
    </section>
  );
};

export default Footer;

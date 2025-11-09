import React from "react";

const Footer = () => {
  return (
    <section className="relative w-full  px-4 md:pt-12 md:px-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:my-0 mt-16">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold mb-4 uppercase">
            Subscribe to our newsletter
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
              (Customer Care)
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Our Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-500 mb-4 uppercase text-xs tracking-wide">
              (Navigate)
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Brand
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-neutral-500 mb-4 uppercase text-xs tracking-wide">
              (Other)
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-500 transition">
                  404
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="flex mt-5 md:mt-28">
        <h1 className="text-7xl md:text-9xl">ATOM.</h1>
        <p className="uppercase text-[9px] md:text-sm">Made by Atomic @</p>
      </span>
    </section>
  );
};

export default Footer;

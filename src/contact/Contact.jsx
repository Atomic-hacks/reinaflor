import React, { useRef, useState } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { contactDetails } from "../data/portfolio";
import { rfoImageSets } from "../data/rfoImages";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const scopeRef = useRef(null);

  useDocumentTitle("Contact");
  useGsapPageAnimations(scopeRef);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      ref={scopeRef}
      className="w-full min-h-screen flex flex-col md:flex-row text-black"
    >
      <div className="bg-white px-4 md:px-32 py-16 md:py-32 flex flex-col justify-between w-full md:w-[45%]">
        <div>
          <AnimatedPageTitle
            title="Contact"
            className="text-5xl md:text-6xl font-bold mb-12"
          />

          <p className="mb-10 max-w-md text-sm text-neutral-700" data-gsap="fade-up">
            Reach out for speaking, advisory, partnerships, or REFOrM.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold mb-2 tracking-wide text-neutral-600">
                NAME
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 tracking-wide text-neutral-600">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 tracking-wide text-neutral-600">
                MESSAGE
              </label>
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full border-b border-gray-300 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="text-sm font-semibold text-neutral-700 hover:text-black transition-colors mt-8"
            >
              Send →
            </button>
          </form>

          <div className="mt-16 space-y-6 text-sm">
            <div>
              <p className="text-xs font-semibold text-neutral-600 mb-1">
                EMAIL
              </p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-neutral-900 hover:text-neutral-600"
              >
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <RevealImage
        src={rfoImageSets.contact}
        alt="Reina-Flor Okori portrait"
        className="h-80 sm:h-screen md:h-auto w-full md:w-[55%] object-cover"
      />
    </section>
  );
};

export default Contact;

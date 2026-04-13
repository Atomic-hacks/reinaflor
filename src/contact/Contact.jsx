import React, { useRef, useState } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { contactDetails } from "../data/portfolio";

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
    <section ref={scopeRef} className="w-full min-h-screen flex flex-col md:flex-row text-black">
      <div className="bg-white px-4 md:px-32 py-16 md:py-48 flex flex-col justify-between w-full md:w-[50%]">
        <div>
          <AnimatedPageTitle
            title="Contact"
            className="text-7xl md:text-8xl font-bold mb-16"
          />

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold mb-3 tracking-wide">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-3 tracking-wide">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-3 tracking-wide">
                MESSAGE
              </label>
              <textarea
                name="message"
                placeholder="Tell me about the project, room, or collaboration."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 pb-2 text-sm placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-20">
            <div>
              <p className="text-xs font-semibold mb-3 tracking-wide">
                (LOCATION)
              </p>
              <p className="text-sm font-medium">{contactDetails.location}</p>
            </div>

            <div>
              <p className="text-xs font-semibold mb-3 tracking-wide">
                (EMAIL)
              </p>
              <p className="text-sm font-medium">{contactDetails.email}</p>
              <p className="mt-4 text-xs font-semibold tracking-wide">(NOTES)</p>
              <p className="text-sm font-medium">{contactDetails.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <RevealImage
        src="/img/goth-tower2.jpg"
        alt="Editorial architectural image for Reina-Flo-Okori"
        className="h-[320px] sm:h-[420px] md:h-auto w-full md:w-[50%]"
      />
    </section>
  );
};

export default Contact;

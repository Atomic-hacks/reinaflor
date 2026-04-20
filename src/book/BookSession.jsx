import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import RevealImage from "../component/ui/RevealImage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { contactDetails } from "../data/portfolio";
import { rfoImageSets } from "../data/rfoImages";

const BookSession = () => {
  const scopeRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    sessionType: "",
    audience: "",
    format: "",
    timeline: "",
    location: "",
    goals: "",
  });

  useDocumentTitle("Book a Session");
  useGsapPageAnimations(scopeRef);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Booking request submitted:", formData);
  };

  return (
    <section
      ref={scopeRef}
      className="w-full min-h-screen flex flex-col md:flex-row text-black bg-[#111111]"
    >
      <div className="bg-[#111111] px-4 md:px-32 py-16 md:py-24 flex flex-col justify-between w-full md:w-[48%] text-white">
        <div>
          <AnimatedPageTitle
            title="Book a Session"
            className="text-5xl md:text-6xl font-bold mb-10 text-white"
          />

          <p className="mb-10 max-w-md text-sm text-white/75" data-gsap="fade-up">
            Share the essentials for a speaking session, workshop, or leadership conversation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  ORGANIZATION
                </label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Company or event"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  ROLE
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="Your role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  SESSION TYPE
                </label>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors bg-transparent"
                >
                  <option value="">Select one</option>
                  <option value="keynote">Keynote</option>
                  <option value="panel">Panel or moderation</option>
                  <option value="workshop">Workshop</option>
                  <option value="advisory">Leadership session</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  FORMAT
                </label>
                <select
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors bg-transparent"
                >
                  <option value="">Select one</option>
                  <option value="in-person">In person</option>
                  <option value="virtual">Virtual</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  AUDIENCE
                </label>
                <input
                  type="text"
                  name="audience"
                  placeholder="Leaders, team, summit, students..."
                  value={formData.audience}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                  TIMELINE
                </label>
                <input
                  type="text"
                  name="timeline"
                  placeholder="Preferred date or window"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                LOCATION
              </label>
              <input
                type="text"
                name="location"
                placeholder="City, venue, or timezone"
                value={formData.location}
                onChange={handleChange}
                className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-2 tracking-wide text-white/55">
                SESSION GOALS
              </label>
              <textarea
                name="goals"
                placeholder="What should this session unlock for your audience?"
                value={formData.goals}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-8 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              Send Booking Request →
            </button>
          </form>
        </div>

        <div className="mt-14 space-y-4 text-sm">
          <p className="text-xs font-semibold tracking-wide text-white/45">
            GENERAL ENQUIRIES
          </p>
          <Link to="/contact" className="text-white/80 hover:text-white">
            Visit Connect
          </Link>
          <a
            href={`mailto:${contactDetails.email}`}
            className="block text-white/80 hover:text-white"
          >
            {contactDetails.email}
          </a>
        </div>
      </div>

      <RevealImage
        src={rfoImageSets.reform[0]}
        alt="Reina-Flor Okori speaking portrait"
        className="h-80 sm:h-screen md:h-auto w-full md:w-[52%] object-cover"
      />
    </section>
  );
};

export default BookSession;

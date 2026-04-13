import React, { useRef, useState } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { speakingContent } from "../data/portfolio";

const Speaking = () => {
  const scopeRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useDocumentTitle("Speaking");
  useGsapPageAnimations(scopeRef);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Speaking request submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div ref={scopeRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-32 py-16 border-b border-neutral-200">
        <div className="max-w-3xl">
          <AnimatedPageTitle title="Speaking" />
          <p
            className="mt-6 text-base leading-relaxed text-neutral-800"
            data-gsap="fade-up"
          >
            {speakingContent.description}
          </p>
        </div>

        {/* Key Audiences */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakingContent.audiences.map((audience, idx) => (
            <div key={idx} className="space-y-2" data-gsap="fade-up">
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-500 font-medium">
                {audience.title}
              </p>
              <p className="text-neutral-800 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking Images Grid */}
      <section className="w-full px-4 md:px-32 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speakingContent.images.map((image, idx) => (
            <div
              key={idx}
              className="relative aspect-3/4 overflow-hidden bg-neutral-100"
              data-gsap="fade-up"
            >
              <img
                src={image}
                alt={`Speaking engagement ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Key Topics */}
      <section className="w-full px-4 md:px-32 py-20 border-t border-neutral-200">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold text-black mb-12">
            {speakingContent.topicsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakingContent.keyTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex gap-4 pb-6 border-b border-neutral-200"
                data-gsap="fade-up"
              >
                <span className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-medium min-w-max mt-1">
                  0{idx + 1}
                </span>
                <p className="text-neutral-800 leading-relaxed">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Request Form */}
      <section className="w-full px-4 md:px-32 py-20 bg-neutral-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-black mb-2">
            {speakingContent.formTitle}
          </h2>
          <p className="text-neutral-800 mb-12">
            {speakingContent.formDescription}
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.24em] text-neutral-600 font-medium block">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent text-neutral-900"
                  placeholder="Your first name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.24em] text-neutral-600 font-medium block">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent text-neutral-900"
                  placeholder="Your last name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.24em] text-neutral-600 font-medium block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent text-neutral-900"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.24em] text-neutral-600 font-medium block">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent text-neutral-900"
                placeholder="Event type or topic"
              />
            </div>

            {/* Message */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.24em] text-neutral-600 font-medium block">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full px-0 py-3 border-b border-neutral-300 focus:border-black focus:outline-none transition-colors bg-transparent text-neutral-900 resize-none"
                placeholder="Tell us about your event and what you're looking for..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-black text-white text-sm uppercase tracking-[0.24em] font-medium hover:bg-neutral-800 transition-colors"
              >
                Submit Speaking Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Footer */}
      <section className="w-full px-4 md:px-32 py-16 border-t border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-medium mb-3">
              Phone
            </p>
            <p className="text-neutral-900">+31 6 57105735</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-medium mb-3">
              Email
            </p>
            <p className="text-neutral-900">Reina-Flor.okori@olympian.org</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-medium mb-3">
              Speaker
            </p>
            <p className="text-neutral-900">Reina Flor Okori</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;

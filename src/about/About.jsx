import React, { useRef } from "react";
import AnimatedPageTitle from "../component/ui/AnimatedPageTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useGsapPageAnimations } from "../lib/gsap";
import { aboutSections, contactDetails } from "../data/portfolio";

const About = () => {
  const scopeRef = useRef(null);

  useDocumentTitle("About");
  useGsapPageAnimations(scopeRef);

  return (
    <section ref={scopeRef} className="w-full px-4 md:px-32 bg-white">
      <div className="w-full">
        {/* Header Section */}
        <section className="w-full text-black py-16">
          <div className="max-w-xl">
            <AnimatedPageTitle title="About" />
          </div>

          {/* Main Introduction */}
          <p
            className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-800"
            data-gsap="fade-up"
          >
            {aboutSections.intro}
          </p>

          {/* Key Info Box */}
          <div className="mt-12 bg-neutral-50 p-8 rounded-lg">
            <p
              className="text-xs text-neutral-700 font-medium uppercase tracking-[0.12em] mb-4"
              data-gsap="fade-up"
            >
              {contactDetails.title}
            </p>
            <p
              className="text-lg md:text-xl leading-snug font-semibold text-neutral-900 mb-6"
              data-gsap="fade-up"
            >
              {aboutSections.founderBody}
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 my-20" />

        {/* Professional Highlights */}
        <section className="w-full text-black py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Professional Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Olympic Experience
              </h3>
              <ul className="space-y-3">
                {[
                  "Four-time Olympian for France and Equatorial Guinea",
                  "Among the fastest women in French history in 100m hurdles",
                  "25+ years of elite athletic performance",
                  "Returned to Olympic competition 9 months after childbirth",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <span className="text-neutral-900 font-semibold mt-1">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organizations & Impact */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Organizations Advised
              </h3>
              <ul className="space-y-3">
                {[
                  "Deloitte",
                  "Orange",
                  "Air Liquide",
                  "Schneider Electric",
                  "French Ministry",
                  "International Chamber of Commerce (Netherlands)",
                  "Forbes France",
                ].map((org, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <span className="text-neutral-900 font-semibold mt-1">
                      •
                    </span>
                    <span>{org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 my-20" />

        {/* Ventures & Initiatives */}
        <section className="w-full text-black py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Ventures & Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neutral-900">
                REFORM™
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                The Olympic Leadership Standard — a methodology that applies
                elite athletic principles to leadership and performance,
                designed for organizations navigating complexity and seeking
                sustainable high performance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neutral-900">
                Beauty of Sport (B.O.S)
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                A global platform leveraging sport as a catalyst for education,
                empowerment, and cultural transformation. Bridging elite sport
                expertise with business strategy, leadership development, and
                systemic change.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 my-20" />

        {/* Core Values */}
        <section className="w-full text-black py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Philosophy & Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Cross-Cultural Leadership",
                description:
                  "Born in Gabon, raised in France, based in the Netherlands. A global perspective that bridges cultures and brings the Olympic spirit as a strategic advantage.",
              },
              {
                title: "Performance with Humanity",
                description:
                  "Resilience, reconstruction, and long-term performance as a mother of two who returned to Olympic competition just nine months after childbirth.",
              },
              {
                title: "Integrated Development",
                description:
                  "Redefining leadership by integrating performance, well-being, and human depth as essential pillars for sustainable success.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {pillar.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 my-20" />

        {/* Contact Section */}
        <section className="w-full text-black py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  Email
                </p>
                <p className="text-lg text-neutral-900">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="hover:text-blue-600 transition"
                  >
                    {contactDetails.email}
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  Phone
                </p>
                <div className="space-y-1">
                  {Array.isArray(contactDetails.phone) ? (
                    contactDetails.phone.map((num, idx) => (
                      <p key={idx} className="text-lg text-neutral-900">
                        <a
                          href={`tel:${num.split(" ")[0]}`}
                          className="hover:text-blue-600 transition"
                        >
                          {num}
                        </a>
                      </p>
                    ))
                  ) : (
                    <p className="text-lg text-neutral-900">
                      {contactDetails.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                  Company
                </p>
                <p className="text-lg font-semibold text-neutral-900">
                  {contactDetails.company.name}
                </p>
                <p className="text-neutral-700 text-sm">
                  {contactDetails.company.address}
                </p>
                <p className="text-neutral-700 text-sm">
                  BTW ID: {contactDetails.company.btwId}
                </p>
              </div>

              {contactDetails.identification && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">
                    Identification
                  </p>
                  <p className="text-neutral-700 text-sm">
                    ID: {contactDetails.identification.id}
                  </p>
                  <p className="text-neutral-700 text-sm">
                    Passport: {contactDetails.identification.passport}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;

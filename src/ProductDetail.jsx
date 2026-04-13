import React, { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RevealImage from "./component/ui/RevealImage";
import useDocumentTitle from "./hooks/useDocumentTitle";
import { useGsapPageAnimations } from "./lib/gsap";
import { getWorkById, workItems } from "./data/portfolio";

const WorkDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const { id } = useParams();
  const scopeRef = useRef(null);
  const tabs = ["Overview", "Impact", "Approach"];
  const project = useMemo(() => getWorkById(id), [id]);
  const moreWork = useMemo(
    () => workItems.filter((item) => item.id !== id).slice(0, 3),
    [id],
  );

  useDocumentTitle(project?.title || "Work");
  useGsapPageAnimations(scopeRef, [project?.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-20">
        <p className="text-sm text-gray-600 tracking-wide">
          Project not found.
        </p>
      </div>
    );
  }

  return (
    <div ref={scopeRef} className="min-h-screen bg-white">
      <div className="px-8 md:px-16 lg:px-24 py-6">
        <p className="text-xs text-gray-600 tracking-wide">
          HOME / WORK / {project.title.toUpperCase()}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_400px] gap-0">
        <div className="bg-gray-100">
          <RevealImage
            src={project.images?.[0] || project.image}
            alt={project.title}
            className="h-full min-h-[420px] w-full"
          />
        </div>

        <div className="bg-gray-100">
          <RevealImage
            src={project.images?.[1] || project.hoverImage || project.image}
            alt={project.title}
            className="h-full min-h-[420px] w-full"
          />
        </div>

        <div className="px-8 py-8 flex flex-col">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500">
              {project.category}
            </p>
            <h1 className="text-2xl font-semibold mb-2 mt-3">{project.title}</h1>
            <p className="text-lg text-gray-700">{project.intro}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm font-semibold mb-4">Snapshot</p>
            <div className="grid grid-cols-1 gap-2">
              <div className="border border-gray-200 px-4 py-3 text-sm">
                Role: {project.role}
              </div>
              <div className="border border-gray-200 px-4 py-3 text-sm">
                Client: {project.client}
              </div>
              <div className="border border-gray-200 px-4 py-3 text-sm">
                Year: {project.year}
              </div>
            </div>
          </div>

          <a
            href="mailto:reina-flor.okori@olympian.org"
            className="mb-4 w-full bg-black py-3 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Discuss This Work
          </a>

          <Link
            to="/reform"
            className="mb-8 flex w-full items-center justify-center gap-2 rounded-md border border-black py-3 text-sm font-medium transition-colors hover:bg-black hover:text-white"
          >
            Explore Reform
          </Link>

          <div className="border-t border-gray-200">
            {tabs.map((tab) => (
              <div key={tab} className="border-b border-gray-200">
                <button
                  onClick={() => setActiveTab(tab)}
                  className="w-full py-4 text-left text-xs font-semibold tracking-wide hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  {tab}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform ${
                      activeTab === tab ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M3 5l3 3 3-3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {activeTab === tab && (
                  <div className="pb-4 px-1 text-sm text-gray-600 leading-relaxed">
                    <p>{project.tabs[tab]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">More Work</h2>

          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M12 4L4 12M4 4l8 8" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreWork.map((item) => (
            <Link key={item.id} to={`/work/${item.id}`} className="group cursor-pointer">
              <div className="relative bg-gray-100 aspect-square mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold">{item.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;

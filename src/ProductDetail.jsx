import React, { useMemo, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import RevealImage from "./component/ui/RevealImage";
import useDocumentTitle from "./hooks/useDocumentTitle";
import { useGsapPageAnimations } from "./lib/gsap";
import { getWorkById, workItems } from "./data/portfolio";

const WorkDetail = () => {
  const { id } = useParams();
  const scopeRef = useRef(null);
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

        <div className="px-6 py-6 flex flex-col">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wide text-gray-600">
              {project.category}
            </p>
            <h1 className="text-xl font-semibold mt-2">{project.title}</h1>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Role</span>
              <span className="font-medium">{project.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client</span>
              <span className="font-medium">{project.client}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Year</span>
              <span className="font-medium">{project.year}</span>
            </div>
          </div>

          <Link
            to="/book-session"
            className="mt-8 w-full bg-black py-2 text-center text-xs font-semibold text-white hover:bg-gray-800 transition-colors"
          >
            Book Speaking →
          </Link>
        </div>
      </div>
      <section className="w-full bg-white py-12 px-8 md:px-16 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">More Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreWork.map((item) => (
            <Link key={item.id} to={`/work/${item.id}`} className="group">
              <div className="relative bg-gray-100 aspect-square mb-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.year}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;

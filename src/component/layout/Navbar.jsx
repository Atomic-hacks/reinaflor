import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "../../lib/gsap";

const focusableSelector =
  "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])";

const getFocusableElements = (container) => {
  if (!container) return [];
  return Array.from(container.querySelectorAll(focusableSelector));
};

const Navbar = () => {
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef(null);
  const overlayRef = useRef(null);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Advisory", href: "/advisory" },
    { name: "REFORM™", href: "/strategic-advisory" },
    { name: "Olympiadiary", href: "/olympiadiary" },
    { name: "Podcast", href: "/podcast" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/book-session" },
  ];

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileOpen) return undefined;

    const previousFocus = document.activeElement;
    const focusables = getFocusableElements(panelRef.current);
    focusables[0]?.focus();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" },
      );

      gsap.fromTo(
        panelRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.45, ease: "power3.out" },
      );
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const elements = getFocusableElements(panelRef.current);
        if (elements.length === 0) return;

        const first = elements[0];
        const last = elements[elements.length - 1];
        const isShift = event.shiftKey;

        if (isShift && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!isShift && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      ctx.revert();
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    };
  }, [isMobileOpen]);

  return (
    <nav className="relative w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex items-center justify-between px-4 py-2 md:px-16">
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsWorkOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsWorkOpen(false)}
            >
              <Link
                to={link.href}
                className="group relative font-medium text-black transition-colors hover:text-gray-600"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
              </Link>

              {link.hasDropdown && (
                <div
                  className={`absolute left-0 top-full pt-4 transition-all duration-300 ease-out ${
                    isWorkOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="min-w-[200px] overflow-hidden rounded-sm border border-gray-200 bg-white shadow-lg">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="group/item relative block px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-50"
                      >
                        {item.name}
                        <span className="absolute left-5 bottom-2 h-px w-0 bg-black transition-all duration-300 ease-out group-hover/item:w-[calc(100%-2.5rem)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="hidden absolute left-1/2 -translate-x-1/2 md:block"
        >
          <span className="text-2xl font-bold tracking-tight">
            Reina-Flor-Okori
          </span>
        </Link>

        <Link to="/" className="md:hidden">
          <span className="text-2xl font-bold tracking-tight">
            Reina-Flor-Okori
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/book-session"
            className="group relative p-1 transition-transform hover:scale-110"
            aria-label="Book Reina-Flor-Okori"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-colors"
            >
              <path d="M3 5h14v10H3z" />
              <path d="m4 6 6 5 6-5" strokeLinecap="round" />
            </svg>
          </Link>

          <Link
            to="/about"
            className="group relative text-sm font-medium text-black transition-colors hover:text-gray-600"
          >
            Profile
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
          </Link>

          <button
            className="transition-transform hover:scale-110"
            type="button"
          >
            <img
              src="/img/flag.png"
              alt="Global practice rooted in Africa"
              width="24"
              height="16"
              className="object-contain"
            />
          </button>

          <Link
            to="/book-session"
            className="group relative text-sm font-medium text-black transition-colors hover:text-gray-600"
          >
            Connect
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link
            to="/contact"
            className="text-xs font-semibold tracking-wide text-black"
          >
            CONNECT
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-black"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M3 5h12M3 9h12M3 13h12" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <>
          <button
            ref={overlayRef}
            type="button"
            aria-label="Close mobile menu"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsMobileOpen(false)}
          />

          <aside
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            ref={panelRef}
            className="fixed right-0 top-0 z-50 h-full w-[82%] max-w-[360px] bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <span className="text-xl font-bold tracking-tight">
                Reina-Flor-Okori
              </span>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300"
              >
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

            <div className="space-y-6 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-lg font-semibold"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-session"
                className="block border-t border-gray-200 pt-6 text-sm font-medium text-gray-500"
              >
                Book Reina-Flor
              </Link>
            </div>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar;

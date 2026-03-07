"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/img/logo.png";
import { projects } from "../data/projects";
// import Loader from './Loader';

import "../assets/css/header.css";

interface HeaderProps {
  isHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome }) => {
  const [isMenuView, setIsMenuView] = useState(false);
  const [isSearchView, setIsSearchView] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpenedSearchView, setHasOpenedSearchView] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fadeInClasses, setFadeInClasses] = useState<string[]>([
    "hidden",
    "hidden",
    "hidden",
    "hidden",
  ]);

  useEffect(() => {
    // autofocus on search input
    if (isSearchView && inputRef.current) {
      inputRef.current.focus();
    }

    // fade in classes only on initial search view open
    if (isSearchView && !hasOpenedSearchView) {
      const classes = [
        "search-fade-in search-delay-1",
        "search-fade-in search-delay-2",
        "search-fade-in search-delay-3",
        "search-fade-in search-delay-4",
      ];
      setFadeInClasses(classes);
      setHasOpenedSearchView(true);
    }
  }, [isSearchView, hasOpenedSearchView]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.body.style.overflow = isMenuView || isSearchView ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuView, isSearchView]);

  const closeMenuView = () => {
    setIsMenuView(false);
  };

  // menu logic
  const toggleMenuView = () => {
    setIsSearchView(false);
    setIsMenuView((prev) => !prev);
  };

  // search logic
  const toggleSearchView = () => {
    setIsMenuView(false);
    setIsSearchView((prev) => !prev);
  };

  // search input logic
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(event.target.value.length > 0);
    setInputValue(event.target.value);
  };

  // clear search input
  const clearInput = () => {
    setInputValue("");
    setIsTyping(false);
  };

  const latestProjects = projects.slice(0, 2);

  const searchIndex = [
    { title: "About", description: "Learn about Cornell Data Science, our mission, and our team.", href: "/about", type: "page", external: false },
    { title: "Projects", description: "Browse all CDS projects across every semester.", href: "/projects", type: "page", external: false },
    { title: "Alumni", description: "CDS alumni network and past members.", href: "/alumni", type: "page", external: false },
    { title: "E-Board", description: "Meet the Cornell Data Science executive board.", href: "/eboard", type: "page", external: false },
    { title: "Subteams", description: "Our specialized subteams: MLE, DE, QF, and DS.", href: "/subteams", type: "page", external: false },
    { title: "Machine Learning Engineering", description: "The MLE subteam builds and deploys production ML systems.", href: "/subteam/machine-learning-engineering", type: "page", external: false },
    { title: "Data Engineering", description: "The DE subteam builds data pipelines and infrastructure.", href: "/subteam/data-engineering", type: "page", external: false },
    { title: "Quantitative Finance", description: "The QF subteam applies data science to financial markets.", href: "/subteam/quantitative-finance", type: "page", external: false },
    { title: "Data Science", description: "The DS subteam tackles applied machine learning and analytics.", href: "/subteam/data-science", type: "page", external: false },
    { title: "Education", description: "CDS education resources, workshops, and learning materials.", href: "/education", type: "page", external: false },
    { title: "Contact", description: "Get in touch with Cornell Data Science.", href: "/contact", type: "page", external: false },
    { title: "Recruitment", description: "Apply to join Cornell Data Science.", href: "/recruitment", type: "page", external: false },
    { title: "Coffee Chats", description: "Schedule a coffee chat with a CDS member.", href: "/coffee-chats", type: "page", external: false },
    { title: "Sponsorship", description: "Partner with or sponsor Cornell Data Science.", href: "/sponsorship", type: "page", external: false },
    ...projects.map(p => ({
      title: p.title,
      description: p.description,
      href: p.githubLink ?? "/projects",
      type: "project" as const,
      external: !!p.githubLink,
      semester: p.semester,
    })),
  ];

  const searchResults = inputValue.trim().length > 0
    ? searchIndex
        .filter((item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.description.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, 6)
    : [];

  const lightControls = isMenuView || isSearchView || isHome;

  return (
    <>
      <header
        className={`site-header fixed top-2 left-1/2 transform -translate-x-1/2 text-black text-sm p-3 sm:p-4 z-[60] max-w-7xl w-[96%] sm:w-full ${isMenuView || isSearchView
          ? "site-header-active"
          : isHome
            ? "site-header-home"
            : "site-header-scrolled"
          }`}
      >
        <div className="w-full flex justify-between items-center h-full gap-3">
          <Link href="/" className="site-brand-wrap" onClick={closeMenuView}>
            <div
              className={`site-brand flex items-center lg:text-lg font-light ${lightControls ? "site-brand-light" : "site-brand-dark"
                }`}
            >
              <img
                src={logo.src}
                alt="CDS Logo"
                className={`h-10 mr-2 ${lightControls ? "" : "invert"}`}
              />
              <div className="flex flex-col">
                <span className="block md:hidden text-3xl font-semibold">CDS</span>
                <span className="hidden md:block">
                  Cornell Data Science
                  <p className="pt-font text-xs">Project Team</p>
                </span>
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <Link
              href="/recruitment"
              target="_blank"
              className={`recruitment-pill px-2 text-xs md:text-base sm:px-10 md:px-14 py-2 mr-2 sm:mr-4 h-10 border flex items-center ${lightControls
                ? "recruitment-pill-light"
                : "recruitment-pill-dark"
                }`}
            >
              Recruitment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>

            {/* search */}
            <button
              onClick={toggleSearchView}
              aria-label="Toggle search"
              className={`icon-toggle w-10 py-2 border flex items-center justify-center group ${isSearchView ? "icon-toggle-active" : ""
                } ${lightControls ? "icon-toggle-light" : "icon-toggle-dark"}`}
            >
              <svg
                className={`w-6 h-6 ${isSearchView ? "text-[#101418]" : lightControls ? "text-white" : "text-[#101418]"
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isSearchView
                      ? "M6 18L18 6M6 6l12 12"
                      : "M21 21l-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                  }
                ></path>
              </svg>
            </button>
            {/* menu */}
            <button
              onClick={toggleMenuView}
              aria-label="Toggle menu"
              className={`icon-toggle w-10 py-2 border flex items-center justify-center group ${isMenuView ? "icon-toggle-active" : ""
                } ${lightControls ? "icon-toggle-light" : "icon-toggle-dark"}`}
            >
              <svg
                className={`w-6 h-6 ${isMenuView ? "text-[#101418]" : lightControls ? "text-white" : "text-[#101418]"
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuView
                      ? "M6 18L18 6M6 6l12 12"
                      : "M5 8h14M5 12h14M5 16h14"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* header end */}

      {/* MenuView start */}
      <div
        className={`menu-veil ${isMenuView ? "menu-veil-open" : ""}`}
        onClick={closeMenuView}
        aria-hidden={!isMenuView}
      ></div>
      <div
        className={`menu-panel fixed right-0 top-0 h-screen z-[55] ${isMenuView ? "menu-panel-open" : ""}`}
      >
        <div className="menu-panel-inner">
          <div className="menu-panel-head">
            <p className="menu-eyebrow">SITE NAVIGATION</p>
            <button className="menu-close-btn" onClick={closeMenuView}>
              Close
            </button>
          </div>
          <div className="menu-grid">
            <div className="menu-block">
              <p className="menu-block-title">NAVIGATION</p>
              <div className="menu-link-stack">
                <Link href="/about" className="menu-link" onClick={closeMenuView}>
                  About
                </Link>
                <Link href="/projects" className="menu-link" onClick={closeMenuView}>
                  Projects
                </Link>
                <Link href="/alumni" className="menu-link" onClick={closeMenuView}>
                  Alumni
                </Link>
                <Link href="/eboard" className="menu-link" onClick={closeMenuView}>
                  E-Board
                </Link>
                <Link href="/subteams" className="menu-link" onClick={closeMenuView}>
                  Our Subteams
                </Link>
                <Link
                  href="/subteam/machine-learning-engineering"
                  className="menu-subteam-link"
                  onClick={closeMenuView}
                >
                  <FontAwesomeIcon icon={faArrowRight} /> MLE
                </Link>
                <Link
                  href="/subteam/data-engineering"
                  className="menu-subteam-link"
                  onClick={closeMenuView}
                >
                  <FontAwesomeIcon icon={faArrowRight} /> DE
                </Link>
                <Link
                  href="/subteam/quantitative-finance"
                  className="menu-subteam-link"
                  onClick={closeMenuView}
                >
                  <FontAwesomeIcon icon={faArrowRight} /> QF
                </Link>
                <Link
                  href="/subteam/data-science"
                  className="menu-subteam-link"
                  onClick={closeMenuView}
                >
                  <FontAwesomeIcon icon={faArrowRight} /> DS
                </Link>
                <Link href="/education" className="menu-link" onClick={closeMenuView}>
                  Education
                </Link>
                <Link href="/contact" className="menu-link" onClick={closeMenuView}>
                  Contact
                </Link>
              </div>
            </div>

            <div className="menu-block">
              <div className="menu-block-head">
                <p className="menu-block-title">LATEST PROJECTS</p>
                <Link
                  href="/projects"
                  className="menu-project-all"
                  onClick={closeMenuView}
                >
                  PROJECTS
                </Link>
              </div>
              <div className="menu-project-grid">
                {latestProjects.map((project, index) => (
                  <Link
                    key={index}
                    href={project.githubLink ?? "/projects"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menu-project-card group"
                  >
                    <p className="menu-project-title">
                      {project.title}
                    </p>
                    <img
                      src={typeof project.imageUrl === "string" ? project.imageUrl : project.imageUrl.src}
                      alt={project.title}
                      className="w-full h-44 object-cover mb-3 group-hover:opacity-75 transition-opacity duration-300 rounded-lg"
                      width={40}
                      height={40}
                    />
                    <p className="menu-project-description">
                      {project.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="menu-block">
              <p className="menu-block-title">QUICK LINKS</p>
              <div className="menu-quick-links">
                <Link
                  href="https://cornelldatascience.github.io/education-blogs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-quick-link"
                >
                  Blog
                </Link>
                <Link href="/recruitment" className="menu-quick-link" onClick={closeMenuView}>
                  Recruitment
                </Link>
                <Link href="/coffee-chats" className="menu-quick-link" onClick={closeMenuView}>
                  Coffee Chats
                </Link>
                <Link href="/sponsorship" className="menu-quick-link" onClick={closeMenuView}>
                  Sponsorship
                </Link>
                <Link
                  target="_blank"
                  href="https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/project-teams"
                  className="menu-quick-link"
                >
                  Cornell Engineering - Project Teams
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MenuView end */}

      {/* SearchView start */}
      <div
        className={`fixed inset-0 bg-white z-[58] transition-transform duration-700 ease-in-out ${isSearchView ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <div
          style={{
            transform: isTyping ? "translateY(10rem)" : "translateY(27rem)",
          }}
          className={`flex w-full flex-col justify-center items-center transition-transform duration-500 transform`}
        >
          <div className="md:w-3/4 w-full p-8 md:p-0 ml-0 md:ml-24">
            <div className="relative flex items-center justify-center md:justify-start">
              <input
                type="text"
                placeholder="Start typing to search..."
                className="w-full p-4 pl-1 text-3xl md:text-6xl bg-transparent text-gray-800 focus:outline-none border-b-2 border-gray-400 focus:border-gray-600 placeholder-gray-400 transition-all duration-300"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
              />
              {inputValue && (
                <button
                  onClick={clearInput}
                  className="absolute right-0 top-5 md:top-0 mt-0 md:mt-9 mr-2 md:mr-4 text-gray-500 hover:text-gray-700 text-xs md:text-lg flex items-center transition-all duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-gray-600 mr-2 md:mt-0 m-1/2 group-hover:rotate-90 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9l-3.5-3.5a1 1 0 00-1.414 1.414L8.586 10l-3.5 3.5a1 1 0 001.414 1.414L10 11.414l3.5 3.5a1 1 0 001.414-1.414L11.414 10l3.5-3.5a1 1 0 00-1.414-1.414L10 8.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Clear</span>
                </button>
              )}
            </div>
            {isTyping ? (
              <div className="mt-8">
                {searchResults.length > 0 ? (
                  <>
                    <span className="text-xs text-gray-500 font-semibold tracking-wider">
                      {searchResults.length} RESULT{searchResults.length !== 1 ? "S" : ""}
                    </span>
                    <ul className="mt-4 divide-y divide-gray-100">
                      {searchResults.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            onClick={() => { setIsSearchView(false); clearInput(); }}
                            className="flex items-center justify-between py-3 group hover:bg-gray-50 px-2 rounded transition-colors duration-150"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wide ${item.type === "project" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                                {item.type === "project" ? (item as { semester?: string }).semester ?? "project" : "page"}
                              </span>
                              <span className="text-gray-900 font-medium text-base md:text-lg truncate">{item.title}</span>
                              <span className="hidden md:block text-gray-400 text-sm truncate">{item.description.slice(0, 80)}{item.description.length > 80 ? "…" : ""}</span>
                            </div>
                            <svg className="shrink-0 w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-150 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-gray-400 text-base mt-4">No results for &ldquo;{inputValue}&rdquo;</p>
                )}
              </div>
            ) : (
              <div className="mt-8 text-gray-800 text-xs md:text-lg">
                <span className="block md:inline-block mr-4 text-xs md:text-base text-gray-500 whitespace-nowrap font-semibold tracking-wider">
                  FREQUENTLY SEARCHED FOR
                </span>
                <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                  <span className={`mr-4 ${fadeInClasses[0]} group`}>
                    <Link
                      href="/recruitment"
                      className="underline hover:text-gray-600 transition-all duration-300 text-lg hover:scale-105 inline-block bg-gray-100 px-4 py-2 rounded-full border border-gray-200"
                    >
                      Recruitment
                    </Link>
                  </span>
                  <span className={`mr-4 ${fadeInClasses[1]} group`}>
                    <Link
                      href="/coffee-chats"
                      className="underline hover:text-gray-600 transition-all duration-300 text-lg hover:scale-105 inline-block bg-gray-100 px-4 py-2 rounded-full border border-gray-200"
                    >
                      Coffee Chats
                    </Link>
                  </span>
                  <span className={`mr-4 ${fadeInClasses[2]} group`}>
                    <Link
                      href="/eboard"
                      className="underline hover:text-gray-600 transition-all duration-300 text-lg hover:scale-105 inline-block bg-gray-100 px-4 py-2 rounded-full border border-gray-200"
                    >
                      E-Board
                    </Link>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* SearchView end */}
    </>
  );
};
export default Header;

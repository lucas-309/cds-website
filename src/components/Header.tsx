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
  const [isVisible, setIsVisible] = useState(false);
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
        "fade-in delay-1",
        "fade-in delay-2",
        "fade-in delay-3",
        "fade-in delay-4",
      ];
      setFadeInClasses(classes);
      setHasOpenedSearchView(true);
    }
  }, [isSearchView, hasOpenedSearchView]);

  useEffect(() => {
    if (isMenuView) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100); // Adjust the delay as needed
    } else {
      setIsVisible(false);
    }
  }, [isMenuView]);

  // menu logic
  const toggleMenuView = () => {
    setIsSearchView(false);
    setIsMenuView(!isMenuView);
  };

  // search logic
  const toggleSearchView = () => {
    setIsMenuView(false);
    setIsSearchView(!isSearchView);
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

  return (
    <>
      <header
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-0 sm:mt-5 text-black text-sm p-4 sm:p-4 md:p-4 sm:rounded-lg z-50 max-w-7xl w-full ${isMenuView || isSearchView
          ? "fixed bg-transparent"
          : "bg-white bg-opacity-30"
          }`}
      >
        <div className="w-full flex justify-between items-center h-full">
          <Link href="/">
            <div
              className={`flex items-center text-black lg:text-lg font-light ${isMenuView || isSearchView
                ? "text-white"
                : isHome
                  ? "invert"
                  : "text-black"
                }`}
            >
              <img
                src={logo.src}
                alt="CDS Logo"
                className={`h-10 mr-2 ${isMenuView || isSearchView ? "" : "invert"
                  }`}
              />
              <div className="flex flex-col">
                <span className="block md:hidden text-3xl text-bold">CDS</span>
                <span className="hidden md:block">
                  Cornell Data Science
                  <p className="pt-font text-xs">Project Team</p>
                </span>
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <Link href="/recruitment" target="_blank">
              <button
                className={`px-2 text-xs md:text-base sm:px-10 md:px-24 py-2 mr-2 sm:mr-5 h-10 border flex items-center ${isMenuView || isSearchView
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : isHome
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "text-black border-black hover:bg-black hover:text-white"
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
              </button>
            </Link>

            {/* search */}
            <button
              onClick={toggleSearchView}
              className={`w-10 py-2 border flex items-center justify-center group ${isHome && isSearchView
                ? "border-white bg-white"
                : isMenuView
                  ? "border-white hover:bg-white"
                  : isHome
                    ? "border-white hover:bg-white"
                    : isSearchView
                      ? "bg-white border-white"
                      : "border-black hover:bg-black"
                }`}
            >
              <svg
                className={`w-6 h-6 ${isHome && isSearchView
                  ? "text-black"
                  : isMenuView
                    ? "text-white group-hover:text-black"
                    : isHome
                      ? "text-white group-hover:text-black"
                      : isSearchView
                        ? "bg-white text-black"
                        : "group-hover:text-white"
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
              className={`
                                w-10 py-2 border flex items-center justify-center group 
                                ${isMenuView
                  ? "border-white bg-white"
                  : isHome
                    ? "border-white hover:bg-white"
                    : isSearchView
                      ? "border-white bg-transparent hover:bg-white"
                      : "border-black hover:bg-black"
                }
                                `}
            >
              <svg
                className={`w-6 h-6 ${isMenuView
                  ? "text-black"
                  : isSearchView
                    ? "group-hover:text-black text-white"
                    : isHome
                      ? "text-white group-hover:text-black"
                      : "group-hover:text-white"
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
                      : "M5 12h14M5 6h14M5 18h14"
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
        className={`h-screen fixed inset-0 bg-[#1e2124] z-40 ${isMenuView ? "translate-y-0" : "translate-y-full"
          } overflow-y-auto`}
      >
        <div
          className={`flex flex-col items-center justify-start mt-10 md:mt-32 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="flex flex-col md:flex-row w-full max-w-7xl justify-around mt-4 p-4 md:p-0">
            <div
              className={`flex flex-col w-full md:w-1/3 p-2 mt-10 md:mt-0 md:mx-4 transition-opacity duration-1000 delay-100 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="w-full border-t border-white"></div>
              <p className="text-gray-500 mt-4 text-xs">NAVIGATION</p>
              <div className="text-3xl sm:text-4xl mt-10 space-y-5 font-light">
                <Link
                  href="/about"
                  className="text-white mt-2 hover:text-gray-400 transition-colors duration-300"
                >
                  About
                </Link>
                <div className="text-white mt-2 hover:text-gray-400 transition-colors duration-300">
                  <Link href="/projects">Projects</Link>
                </div>
                <div className="text-white mt-2 hover:text-gray-400 transition-colors duration-300">
                  <Link href="/alumni">Alumni</Link>
                </div>
                <div className="text-white mt-2 hover:text-gray-400 transition-colors duration-300">
                  <Link href="/eboard">E-Board</Link>
                </div>
                <div className="text-white mt-2 hover:text-gray-400 transition-colors duration-300">
                  <Link href="/subteams">Our Subteams</Link>
                </div>
                <div className="space-y-5 mt-2">
                  <div className="text-white mt-1 ml-4 hover:text-gray-400 transition-colors duration-300">
                    <Link href="/subteam/machine-learning-engineering">
                      <FontAwesomeIcon icon={faArrowRight} /> MLE
                    </Link>
                  </div>
                  <div className="text-white mt-1 ml-4 hover:text-gray-400 transition-colors duration-300">
                    <Link href="/subteam/data-engineering">
                      <FontAwesomeIcon icon={faArrowRight} /> DE
                    </Link>
                  </div>
                  <div className="text-white mt-1 ml-4 hover:text-gray-400 transition-colors duration-300">
                    <Link href="/subteam/quantitative-finance">
                      <FontAwesomeIcon icon={faArrowRight} /> QF
                    </Link>
                  </div>
                  <div className="text-white mt-1 ml-4 hover:text-gray-400 transition-colors duration-300">
                    <Link href="/subteam/data-science">
                      <FontAwesomeIcon icon={faArrowRight} /> DS
                    </Link>
                  </div>
                </div>
                <div className="text-white mt-2 hover:text-gray-400 transition-colors duration-300">
                  <Link href="/education">Education</Link>
                </div>
                {/* TODO: Alumni Page */}
                {/* <div className="text-white mt-2 hover:text-gray-400 transition-colors duration-300">
            <Link href="/alumni">Alumni</Link>
          </div> */}
                <div className="text-white mt-2 hover:text-gray-400 transition-colors duration-300">
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col w-full md:w-1/3 p-2 mt-10 md:mt-0 md:mx-4 transition-opacity duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="w-full border-t border-white"></div>
              <div className="flex justify-between">
                <p className="text-gray-500 mt-4 text-xs">LATEST PROJECTS</p>
                <Link
                  href="/projects"
                  className="text-gray-200 mt-4 text-xs underline hover:text-gray-400 transition-colors duration-300"
                >
                  PROJECTS
                </Link>
              </div>
              <div className="text-4xl mt-10 mb-10 space-y-5 font-light">
                {/* map 2 newest projects */}
                {latestProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`group transition-opacity duration-500`}
                  >
                    <p className="text-sm text-gray-300 mb-2 group-hover:text-gray-400">
                      {project.title}
                    </p>
                    <Link href={project.githubLink ?? "/projects"} target="_blank" rel="noopener noreferrer">
                      <img
                        src={typeof project.imageUrl === 'string' ? project.imageUrl : project.imageUrl.src}
                        alt={project.title}
                        className="w-full h-48 object-cover mb-2 group-hover:opacity-75 transition-opacity duration-300"
                        width={40}
                        height={40}
                      />
                    </Link>
                    <p className="text-sm text-gray-100 group-hover:text-gray-400 transition-colors duration-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`flex flex-col w-full md:w-1/3 p-2 transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="w-full border-t border-white"></div>
              <p className="text-gray-500 mt-4 text-xs">QUICK LINKS</p>
              <div className="mt-10">
                <div className="text-lg text-white space-y-2 text-light">
                  <div className="hover:text-gray-400 transition-colors duration-300">
                    <Link
                      href="https://cornelldatascience.github.io/education-blogs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="hover:text-green-300 transition-all duration-300 hover:translate-x-2 block group">
                    <Link href="/recruitment" className="group-hover:text-green-400 transition-colors duration-300">Recruitment</Link>
                  </div>
                  <div className="hover:text-green-300 transition-all duration-300 hover:translate-x-2 block group">
                    <Link href="/coffee-chats" className="group-hover:text-green-400 transition-colors duration-300">Coffee Chats</Link>
                  </div>
                  <div className="hover:text-gray-400 transition-colors duration-300">
                    <Link href="/sponsorship">Sponsorship</Link>
                  </div>
                  <div className="hover:text-gray-400 transition-colors duration-300">
                    <Link
                      target="_blank"
                      href="https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/project-teams"
                    >
                      Cornell Engineering - Project Teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MenuView end */}

      {/* SearchView start */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-700 ease-in-out ${isSearchView ? "translate-y-0" : "translate-y-full"
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
          </div>
        </div>
      </div>
      {/* SearchView end */}
    </>
  );
};
export default Header;

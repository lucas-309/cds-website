"use client";

// dependencies
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// logo
import whiteLogo from "../assets/img/logo.png";
import coloredLogo from "../assets/img/logo_colored.png";

// components
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// images
import lec from "../assets/img/lec.jpg";
import lec2 from "../assets/img/lec2.jpg";
import team1 from "../assets/img/team1.jpg";

// sponsors
import blackrock from "../assets/img/sponsors/blackrock.png";
import boeing from "../assets/img/sponsors/boeing.png";
import carnival from "../assets/img/sponsors/carnival.png";
import dataiku from "../assets/img/sponsors/dataiku.png";
import google from "../assets/img/sponsors/google.png";
import ibm from "../assets/img/sponsors/ibm.png";
import meta from "../assets/img/sponsors/meta.svg";
import microsoft from "../assets/img/sponsors/microsoft.png";
import millennium from "../assets/img/sponsors/millennium.png";
import munich from "../assets/img/sponsors/munich.png";
import pfizer from "../assets/img/sponsors/pfizer.png";
import pg from "../assets/img/sponsors/pg.png";
import verizon from "../assets/img/sponsors/verizon.png";
import wayfair from "../assets/img/sponsors/wayfair.png";

import "../assets/css/page.css";

const sponsors = [
  millennium.src,
  verizon.src,
  google.src,
  meta.src,
  microsoft.src,
  ibm.src,
  blackrock.src,
  carnival.src,
  dataiku.src,
  boeing.src,
  pfizer.src,
  munich.src,
  wayfair.src,
  pg.src,
];

export default function Home() {
  const [isHome, setIsHome] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        // tablets + larger
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        // mobile
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // handle header color state
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero")?.clientHeight || 0;
      if (window.scrollY > heroHeight) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // fade in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <main className="homepage-shell relative w-full min-h-screen flex flex-col justify-end">
        <title>Home | Cornell Data Science</title>
        <Header isHome={isHome} />

        <section className="hero hero-stage relative w-full min-h-screen flex flex-col items-center justify-center text-white">
          <div className="hero-scrim"></div>
          <div className="hero-grid-overlay"></div>
          <div className="hero-aurora hero-aurora-one"></div>
          <div className="hero-aurora hero-aurora-two"></div>

          <div className="hero-status font-light box-mobile absolute bottom-4 right-4 p-4 flex flex-col space-y-2 text-xs md:text-xs sm:text-xs">
            <div className="hero-status-line">
              <p>HOSTED ON THE CDS COMPUTE CLUSTER</p>
            </div>
            <div className="hero-status-line">
              <p>LAST UPDATED: JANUARY 2ND, 2025</p>
            </div>
            <div className="hero-status-line">
              <p>
                THIS ORGANIZATION <br />
                IS A REGISTERED STUDENT <br />
                ORGANIZATION OF CORNELL UNIVERSITY.
              </p>
            </div>
            <div className="hero-status-line">
              <p>
                COPYRIGHT © 2026 <br />
                CORNELL DATA SCIENCE <br />
                PROJECT TEAM. <br />
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 p-4 m-0 flex items-end space-x-3 pl-0">
            <img
              src={whiteLogo.src}
              alt="Logo"
              className="hero-mark h-28 sm:h-24 md:h-32 lg:h-[15rem] blink-in-once"
            />
            <div className="hero-text text-xs sm:text-lg lg:text-4xl">
              <span className="letter">C</span>
              <span className="letter">D</span>
              <span className="letter">S</span>
            </div>
          </div>
        </section>

        <section className="partner-section w-full flex flex-col p-6 sm:p-20 fade-in">
          <div className="partner-header mb-8">
            <h2 className="text-center text-4xl sm:text-6xl font-light mb-4">Our Partners</h2>
            <p className="text-center text-xl max-w-2xl mx-auto">
              Proud to collaborate with industry leaders who support our mission
            </p>
          </div>
          <div className="partner-board rounded-2xl p-8">
            <Slider {...settings}>
              {sponsors.map((image, index) => (
                <div key={index} className="carousel-item">
                  <div className="partner-tile rounded-lg p-4 mx-2 transition-all duration-300 hover:scale-105">
                    <img
                      src={image}
                      alt={`Sponsor ${index + 1}`}
                      className="max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="story-section w-full flex flex-col p-6 sm:p-20">
          <div className="story-row fade-in flex flex-col sm:flex-row items-start space-x-0 sm:space-x-12 mt-12 sm:mt-16">
            <div className="relative w-full sm:w-1/2">
              <div className="story-title text-4xl sm:text-7xl font-light">
                <div className="story-rule w-full h-1 rounded-full mb-4"></div>
                Empowering Data <br />
                Driven Innovation
              </div>
            </div>
            <div className="max-w-full sm:max-w-3xl mt-6 sm:mt-0">
              <div className="story-copy text-xl sm:text-3xl font-light leading-relaxed">
                Cornell Data Science (CDS) is an undergraduate project team
                which builds data-driven solutions to a variety of real-world
                problems. Our team of 92 students is a great place to meet
                people with diverse interests, gain experience at the
                intersection of theory and application, and contribute to the
                greater community initiatives.
              </div>
              <div className="story-media relative overflow-hidden rounded-2xl mt-8 sm:mt-16 group">
                <img
                  src={team1.src}
                  alt="Team"
                  className="w-full h-56 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 story-media-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <div className="story-row fade-in flex flex-col sm:flex-row items-start space-x-0 sm:space-x-12 mt-24 sm:mt-40">
            <div className="relative w-full sm:w-1/2">
              <div className="story-title text-4xl sm:text-7xl font-light">
                <div className="story-rule w-full h-1 rounded-full mb-4"></div>
                Driving Data Science Excellence
              </div>
            </div>
            <div className="max-w-full sm:max-w-3xl mt-6 sm:mt-0">
              <div className="story-copy text-xl sm:text-3xl font-light leading-relaxed">
                We work on projects that span the spectrum of data science. From
                applied deep learning to user-friendly visualizations, there is
                likely someone on CDS working on it.
              </div>
              <div className="story-media relative overflow-hidden rounded-2xl mt-8 sm:mt-16 group">
                <img
                  src={lec.src}
                  alt="Lecture"
                  className="w-full h-56 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 story-media-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <div className="story-row fade-in flex flex-col sm:flex-row items-start space-x-0 sm:space-x-12 mt-24 sm:mt-40">
            <div className="relative w-full sm:w-1/2">
              <div className="story-title text-4xl sm:text-7xl font-light">
                <div className="story-rule w-full h-1 rounded-full mb-4"></div>
                Showcasing <br />
                Data Science Impact
              </div>
            </div>
            <div className="max-w-full sm:max-w-3xl mt-6 sm:mt-0">
              <div className="story-copy text-xl sm:text-3xl font-light leading-relaxed">
                We connect industry and passionate students together through our
                focus on data science. Come to our networking events, company
                talks, and mentoring sessions to learn more about careers in
                data science.
              </div>
              <div className="story-media relative overflow-hidden rounded-2xl mt-8 sm:mt-16 group">
                <img
                  src={lec2.src}
                  alt="Lecture"
                  className="w-full h-56 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 story-media-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="transition-band w-full h-48 relative overflow-hidden">
          <div className="absolute inset-0"></div>
        </section>

        <section className="subteam-section w-full flex flex-col p-6 sm:p-20 pt-12 sm:pt-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl subteam-orb-a"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl subteam-orb-b"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl subteam-orb-c"></div>
          </div>

          <div className="flex flex-col sm:flex-row w-full space-x-0 sm:space-x-12 h-full relative z-10">
            <div className="w-full sm:w-1/3 fade-in">
              <div className="text-4xl sm:text-6xl font-light text-white mb-8">
                Driving innovation and excellence through specialized subteams.
              </div>
              <div className="mt-10 mb-12 sm:mb-10">
                <Link href="/subteams" className="subteam-cta inline-flex items-center justify-center text-xl px-12 py-4">
                  Learn More
                </Link>
              </div>
            </div>
            <ul className="subteam-list list-none text-xl lg:text-5xl sm:text-3xl font-light flex-1 w-full max-w-7xl mx-auto fade-in">
              <li className="subteam-item border-b border-t py-6 sm:py-12 pl-8 sm:pl-16 transition-all duration-500 rounded-lg group">
                <Link href="/subteam/machine-learning-engineering" className="flex items-center">
                  <span className="group-hover:scale-105 transition-transform duration-300">MACHINE LEARNING ENGINEERING</span>
                  <svg className="ml-4 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li className="subteam-item border-b py-6 sm:py-12 pl-8 sm:pl-16 transition-all duration-500 rounded-lg group">
                <Link href="/subteam/data-engineering" className="flex items-center">
                  <span className="group-hover:scale-105 transition-transform duration-300">DATA ENGINEERING</span>
                  <svg className="ml-4 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li className="subteam-item border-b py-6 sm:py-12 pl-8 sm:pl-16 transition-all duration-500 rounded-lg group">
                <Link href="/subteam/quantitative-finance" className="flex items-center">
                  <span className="group-hover:scale-105 transition-transform duration-300">QUANTITATIVE FINANCE</span>
                  <svg className="ml-4 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
              <li className="subteam-item border-b py-6 sm:py-12 pl-8 sm:pl-16 transition-all duration-500 rounded-lg group">
                <Link href="/subteam/data-science" className="flex items-center">
                  <span className="group-hover:scale-105 transition-transform duration-300">DATA SCIENCE</span>
                  <svg className="ml-4 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="connect-section flex-col items-center mt-20 sm:mt-28 justify-center sm:flex h-screen relative z-10 fade-in">
            <div className="text-4xl sm:text-7xl font-light text-white text-center mb-8">
              Connect and Learn
            </div>
            <div className="flex justify-center items-center mt-8 mb-8">
              <img
                src={coloredLogo.src}
                alt="CDS Logo"
                className="mt-5 h-32 sm:h-48 w-32 sm:w-48 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

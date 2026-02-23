import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { FaFileAlt, FaGithub } from "react-icons/fa";

import "../assets/css/projects.css";

import caddieaiImg from "../assets/img/caddieai.png";
import imdbImg from "../assets/img/imdb.png";
import millenniumImg from "../assets/img/millennium.png";
import pocketmlImg from "../assets/img/pocketml.png";
import img from "../assets/img/projects.jpg";
import trivaiImg from "../assets/img/trivai.png";
import vibeSyncImg from "../assets/img/vibesync.png";
import computeClusterImg from "../assets/img/computecluster.png";

const projects = [
  {
    semester: "Fall 2025",
    title: "Compute Cluster",
    description: "CDS Compute Cluster is an in-house cluster developed for the Cornell Data Science project team \
    for compute and project resources. The cluster consists of five computers, with one head node \
    and four compute nodes. Currently, the cluster hosts two LLMs using vLLM and Llama.cpp \
    for use by CDS members as well as a health dashboard and the CDS website, accessible on the internet. It also \
    provides a local pipeline for MathSearch, a previous CDS project that originally utilized AWS.",
    imageUrl: computeClusterImg,
    githubLink: "https://github.com/CornellDataScience/computecluster",
    presentationLink: "https://docs.google.com/presentation/d/13YSIuWD8C4JliMCxbi6pEzFt7SUzFNQQ9xAK8TbKdiI/",
    // tags: ["hey"]
  },
  {
    semester: "Fall 2025",
    title: "Millennium Data Quality",
    description: "A collaboration between Millennium and CDS focused on building a backtesting framework for quantitative trading strategies. Supports equity portfolios, performance metrics, and strategy evaluation against historical S&P 500 data, including Mean Reversion, Momentum, and Pairs Trading strategies.",
    imageUrl: "https://opengraph.githubassets.com/1/lucas-309/millennium-data-quality-25-26",
    githubLink: "https://github.com/lucas-309/millennium-data-quality-25-26",
    presentationLink: null,
  },
  {
    semester: "Fall 2025",
    title: "LiveDance",
    description: "LiveDance is a real-time dance coach powered by computer vision. It tracks a user's body pose from a live camera feed and compares it frame-by-frame to a reference dance video, providing corrective feedback to help users match the moves.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/LiveDance",
    githubLink: "https://github.com/CornellDataScience/LiveDance",
    presentationLink: "https://docs.google.com/presentation/d/1Cs1tKVWiajUJ8IOrOuyVbK_Yf62rw071_pWDC-P2L1Y/edit?usp=sharing",
  },
  {
    semester: "Fall 2024",
    title: "VibeSync",
    description: "VibeSync is a research project which aims to explore the boundary of ML research with music. \
    Inspired by recent advances with contrastive learning and joint language-audio embeddings, we aim to build \
    a proof-of-concept system where a user specifies a playlist title and receives recommended songs. We want \
    to see how far take this and what insights we can gain.",
    imageUrl: vibeSyncImg,
    githubLink: "https://github.com/CornellDataScience/VibeSync",
    presentationLink: "https://docs.google.com/presentation/d/1f7u4CF85lssMu_YZXPpxIRD8X9UnPsm6/",
    // tags: ["hey"]
  },
  {
    semester: "Fall 2024",
    title: "imdb",
    description:
      "In-Memory Database (IMDb) is an implementation of the Redis protocol.",
    // more description was not found because didn't find the slides
    imageUrl: imdbImg,
    githubLink: "https://github.com/CornellDataScience/imdb",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Fall 2024",
    title: "My Course Index v2",
    description: "My Course Index v2 is a project that aims to build a search engine for edstem for Cornell University. It is a web application that allows users to search for course contents efficiently using natural language.",
    imageUrl: "https://opengraph.githubassets.com/1/mahithapen/mycourseindex-v2",
    githubLink: "https://github.com/mahithapen/mycourseindex-v2",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Fall 2024",
    title: "Prediction Markets",
    description: "Prediction markets allow users to trade contracts based on future event outcomes, using crowd wisdom to generate probability forecasts. Platforms like Kalshi demonstrate how well-calibrated predictions and skilled participants can lead to accurate forecasting of real-world events.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/PredictionMarkets",
    githubLink: "https://github.com/CornellDataScience/PredictionMarkets",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Fall 2024",
    title: "Millennium X CDS - Data Quality Platform",
    description: "This project is another collaboration between Millennium and CDS. This project supports a qualitative investment thesis with quantitative evidence and explore different quantitative strategies in finance. The goal is to build pipelines to collect and clean data at scale, perform signal research to construct robust portfolios, and gain insight into industry tools/techniques",
    imageUrl: "https://opengraph.githubassets.com/1/ili23/cds-sp24-millennium",
    githubLink: "https://github.com/ili23/cds-sp24-millennium",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Fall 2024",
    title: "CDS X arXiv: Paper Moderation",
    description: "This project is a collaboration between CDS and arXiv. The goal is to build a system that can automatically moderate papers submitted to arXiv. The system will use a combination of natural language processing and machine learning techniques to identify and flag potentially problematic papers.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/arXiv-Paper-Moderation",
    githubLink: null,
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Fall 2024",
    title: "FileBuddy",
    description: "FileBuddy is a project that aims to build a system that can automatically manage files on a user's computer. It uses ReAct Agents to interact with the user and the file system.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/file-buddy",
    githubLink: "https://github.com/CornellDataScience/file-buddy",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Spring 2024",
    title: "Pocket-ML",
    description:
      "We developed a mobile application and library that reduces overhead of training ML models by allowing users to start, stop, train, monitor, and deploy their models remotely from their mobile device.",
    imageUrl: pocketmlImg,
    githubLink: "https://github.com/CornellDataScience/PocketML",
    presentationLink: "https://docs.google.com/presentation/d/1rTwoFj3Ng_ShNENmgBxngmSYpiLAuZ9hXi9G3X-ORQo",
    // tags: ["hey"]
  },
  {
    semester: "Spring 2024",
    title: "Caddie-AI",
    description:
      "We develop a mobile app that uses computer vision to analyze a user's golf swing through their smartphone camera to predict the trajectory and flight of their golf ball. While on the course, would provide caddie-like advice to players to improve their game.",
    imageUrl: caddieaiImg,
    githubLink: null,
    presentationLink: "https://docs.google.com/presentation/d/1Tuqu8EzWHLV98F4vwd7DsThdhCrnfvQEdh8xi3vZfHY",
    // tags: ["hey"]
  },
  {
    semester: "Spring 2024",
    title: "sketchify",
    description: "Sketchify is a tool that converts color images into infinitely scalable vector sketches for coloring books. Users can either select a portion of an image to convert into a line drawing, or upload their own sketch to receive a similarity score compared to the AI-generated version.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/sketchify",
    githubLink: null,
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Spring 2024",
    title: "MILLENNIUM X CDS",
    description:
      "Building scalable pipelines for data collection and cleansing, and utilizing quantitative strategies for portfolio construction.",
    imageUrl: millenniumImg,
    githubLink: null,
    presentationLink: null,
    // tags: ["yo", "hi"]
  },
  {
    semester: "Fall 2023",
    title: "Ball-101",
    description: "Ball-101 builds a service for the community at large + low budget sports programs for Sports Analytics and Stats Tracking.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/Ball-101",
    githubLink: "https://github.com/CornellDataScience/Ball-101/",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Fall 2023",
    title: "Munch",
    description: "Munch is a CDS MacrosAI project that aims to build a proof-of-concept system that can classify images in real-time using a mobile device.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/Munch",
    githubLink: "https://github.com/CornellDataScience/Munch",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Spring 2023",
    title: "Edge-ML",
    description: "Edge-ML is a project that aims to bring ML to the edge of the network, allowing for faster and more efficient processing of data. We aim to build a proof-of-concept system that can classify images in real-time using a mobile device.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/edge-ml",
    githubLink: "https://github.com/CornellDataScience/edge-ml",
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Spring 2023",
    title: "TRIVAI",
    description:
      "An iOS application that generates quizzes for users based on any topic.",
    imageUrl: trivaiImg,
    githubLink: null,
    presentationLink: null,
    // tags: ["hey"]
  },
  {
    semester: "Spring 2023",
    title: "DIGS",
    description: "DIGS is a distributed game server that allows users to play games with each other over the internet. We aim to build a proof-of-concept system that can host a variety of games and allow for multiplayer gameplay.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/Distributed-Game-Server",
    githubLink: "https://github.com/CornellDataScience/Distributed-Game-Server",
    presentationLink: "https://docs.google.com/presentation/d/1o2LIy7-7N47-8Xv8TBOmxPvxN5Qhwo8paTxtH7GW2Gs",
    // tags: ["yo", "hi"]
  },
  {
    semester: "Fall 2022",
    title: "MathSearch",
    description:
      "MathSearch is a next-generation search engine designed to locate equations within PDFs using LaTeX math script. It addresses a major limitation of using CTRL/CMD + F with standard keyboards: the inability to directly search for mathematical symbols (like integrals and summations). Our platform enables users to search equations using LaTeX notation, and we return PDF pages with bounding boxes highlighting the closest matches to the queried equations.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/MathSearch",
    githubLink: "https://github.com/CornellDataScience/MathSearch",
    presentationLink: null,
    // tags: ["yo", "hi"]
  },
  {
    semester: "Fall 2021",
    title: "self-driving-car",
    description: "CDS Self-Driving Car is a multi-year project undertaken by the Cornell Data Science team intended to demonstrate autopilot for a full-size car. It aims to demonstrate tight integration of a camera based vision algorithm to navigate a car safely. We utilize a SLAM system to localize ourselves, and an additional lane recognition pipeline to see the road. This is all built upon a Python control loop and will leverage robotics to directly actuate the steering wheel to augment a normal car.",
    imageUrl: "https://opengraph.githubassets.com/1/CornellDataScience/self-driving-car",
    githubLink: "https://github.com/CornellDataScience/self-driving-car",
    presentationLink: null,
    // tags: ["yo", "hi"]
  }
];

const About: React.FC = () => {
  return (
    <>
      <Layout name="Projects">
        <div>
          {/* image */}
          <div className="mb-15">
            <img
              src={img.src}
              alt="project"
              className="w-full h-[17rem] sm:h-[30rem] md:h-[54rem] mt-16 object-cover"
            />
          </div>
          {/* content */}
          <div className="border-thin mt-10 pt-10">
            <div>
              <h1 className="text-5xl">Project Spotlight</h1>
            </div>
            <div>
              <p className="mt-4 text-lg font-light">
                At Cornell Data Science, our project work embodies the
                cutting-edge intersection of theory and practical application
                across a broad spectrum of data science disciplines. Our
                dedicated subteams—Data Science, Machine Learning Engineering,
                Data Engineering, and Quantitative Finance—drive forward a
                diverse range of initiatives that advance our understanding and
                application of data analytics, machine learning models, and
                quantitative financial strategies. Through rigorous analysis,
                innovative model development, and strategic implementations,
                each project supports our mission to foster an environment of
                learning and growth while producing impactful, data-driven
                solutions for real-world problems.
              </p>
            </div>
            {/* add sort by team later?, search bar for projects? filterable? */}
            {[...new Set(projects.map(p => p.semester))].map(semester => (
              <div key={semester}>
                <h2 className="text-3xl mt-8 mb-4">{semester}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                  {projects
                    .filter(p => p.semester === semester)
                    .map((project, index) => (
                      <div key={index} className="p-4 pl-0">
                        <div className="flex items-center justify-between uppercase text-base text-gray-400 mb-2">
                          <span className="text-lg">{project.title}</span>
                          <div className="flex gap-2">
                            {project.githubLink && (
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                                <FaGithub size={24} />
                              </a>
                            )}
                            {project.presentationLink && (
                              <a href={project.presentationLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                                <FaFileAlt size={24} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="relative h-[224px]">
                          {/* image */}
                          {project.githubLink ? (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              {typeof project.imageUrl === 'string' ? (
                                <Image
                                  src={project.imageUrl}
                                  alt={project.title}
                                  fill
                                  className="border transition duration-300 ease-in-out hover:bg-gray-400 object-contain"
                                />
                              ) : (
                                <Image
                                  src={project.imageUrl.src}
                                  alt={project.title}
                                  fill
                                  className="border transition duration-300 ease-in-out hover:bg-gray-400 object-cover"
                                />
                              )}
                            </a>
                          ) : (
                            typeof project.imageUrl === 'string' ? (
                              <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="border transition duration-300 ease-in-out hover:bg-gray-400 object-contain"
                              />
                            ) : (
                              <Image
                                src={project.imageUrl.src}
                                alt={project.title}
                                fill
                                className="border transition duration-300 ease-in-out hover:bg-gray-400 object-cover"
                              />
                            )
                          )}
                        </div>
                        <div>
                          <h2 className="text-sm mt-4 font-light">
                            {project.description}
                          </h2>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {/* {project.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-xs bg-gray-100 rounded-full px-3 py-1">
                                {tag}
                              </span>
                            ))} */}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            <div className="mt-16 text-center">
              <p className="text-xl font-light">
                For more projects, you are welcome to visit our{" "}
                <a
                  href="https://github.com/CornellDataScience"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  GitHub organization
                </a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;

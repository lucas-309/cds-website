import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { FaFileAlt, FaGithub } from "react-icons/fa";

import "../assets/css/projects.css";

import img from "../assets/img/projects.jpg";
import { projects } from "../data/projects";

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

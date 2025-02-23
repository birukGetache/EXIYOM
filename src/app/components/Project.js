"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Ethio Game Platform",
    role: "On development",
    image: "/luck.png",
    linkedin: "https://linkedin.com/in/Kalab",
    twitter: "https://twitter.com/Kalab",
    profile: "https://example.com/Kalab",
  },
  {
    id: 7,
    name: "Efoy Gebeya",
    role: "On development",
    image: "/Efoy.png",
    linkedin: "https://linkedin.com/in/Kalab",
    twitter: "https://twitter.com/Kalab",
    profile: "https://example.com/Kalab",
  },
  {
    id: 2,
    name: "Gion Food Delivery",
    role: "On development",
    image: "/logo.png",
    linkedin: "https://linkedin.com/in/Kaleb",
    twitter: "https://twitter.com/Kaleb",
    profile: "https://example.com/Kaleb",
  },
  {
    id: 3,
    name: "Tana Transport System",
    role: "On Development",
    image: "/lake.jpg",
    linkedin: "https://linkedin.com/in/birukf",
    twitter: "https://twitter.com/birukf",
    profile: "https://example.com/birukf",
  },
  {
    id: 4,
    name: "Daga Business Group",
    role: "On Production",
    image: "/daga.jpg",
    linkedin: "https://linkedin.com/in/birukf",
    twitter: "https://twitter.com/birukf",
    profile: "https://example.com/birukf",
  },
];

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{  amount: 0.1 }} // Trigger when 10% of the section is in view
      className="container mx-auto px-4 py-12"
      id="project"
    >
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Our Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white bg-opacity-10 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-2 p-4 box-border border-slate-700 w-full max-w-full sm:w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            viewport={{  amount: 0.1 }} // Trigger when 20% of the card is in view
            style={{ willChange: "transform, opacity" }} // Optimize for performance
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-[80px] h-[80px] m-auto object-cover rounded-full"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-gray-600">
                {project.name}
              </h3>
              <p className="text-gray-500 mt-2">{project.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;
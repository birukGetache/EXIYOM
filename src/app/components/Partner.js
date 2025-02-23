"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  // Import motion
import Timeline from "./TimeLine";

const PartnerCard = ({ partner }) => {
  return (
    <div
      className="max-w-xs mx-auto bg-white bg-opacity-10 rounded-full p-10 shadow-xl overflow-hidden mb-8 border-slate-600"
      style={{ borderWidth: "3px" }}
    >
      {/* Partner Logo */}
      <img
        src={partner.logoUrl}
        alt={partner.name}
        className="w-full h-32 object-contain mx-auto p-4"
      />
    </div>
  );
};

const PartnerPage = () => {
  const [length, setLength] = useState(0);

  // Example partner data
  const partners = [
    {
      name: "Bit",
      description:
        "Bit carear is a leading provider of innovative solutions with a focus on technology-driven growth.",
      logoUrl: "/bit.jpg",
      link: "https://www.partner1.com",
    },
    // Add more partners if needed
  ];

  useEffect(() => {
    setLength(partners.length);
  }, [partners.length]);

  // Define the events array
  const events = [
    { date: '2023-01-01', description: 'Project Kickoff' },
    { date: '2023-02-15', description: 'First Milestone Reached' },
    { date: '2023-03-30', description: 'Second Milestone Reached' },
    { date: '2023-05-01', description: 'Project Completion' },
  ];

  return (
    <motion.section
      className="container py-10 mx-auto px-4 service flex items-center justify-center"
      id="partner"
      initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and positioned 30px down
      whileInView={{ opacity: 1, y: 0 }} // Move to full opacity and original position
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
    >
      <div className="container mx-auto px-4 overflow-y-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Trusted Partner
        </h1>
        <div
          className={`grid ${
            length === 1
              ? "place-items-center h-fit grid-cols-1"
              : "gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {partners.length === 1 ? (
            <PartnerCard key={0} partner={partners[0]} />
          ) : (
            partners.map((partner, index) => <PartnerCard key={index} partner={partner} />)
          )}
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700 text-lg mb-6">
            The institution works with various companies and alumni, focusing on its core objectives to achieve its mission and vision. It is a center that provides specialized professional training to students both before and after their graduation.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-semibold text-gray-800">Main Coordinator:</span>
              <span className="ml-2 text-gray-600">0945550071 (Henok)</span>
            </div>

            <div className="flex items-center">
              <span className="font-semibold text-gray-800">Training Coordinator:</span>
              <span className="ml-2 text-gray-600">0938831785 (Gedam)</span>
            </div>

            <div className="flex items-center">
              <span className="font-semibold text-gray-800">Career Counselor:</span>
              <span className="ml-2 text-gray-600">0941378906 (Netsanet)</span>
            </div>
          </div>
        </div>
        {/* <Timeline events={events} /> */}
      </div>
    </motion.section>
  );
};

export default PartnerPage;

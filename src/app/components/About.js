"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      onViewportLeave={{ opacity: 0, y: 50 }} // Reset when leaving viewport
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      viewport={{ once: false, amount: 0.2 }} // Trigger when 20% in view, and allow re-triggering
      className="lg:py-16 py-6 px-4 sm:px-6 lg:px-8 w-screen mt-20"
      id="about"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between space-y-10 lg:space-y-0">
        {/* Left Section */}
        <div>
          <div className="lg:w-1/2 text-center lg:text-left bg-white bg-opacity-5 rounded-md min-w-[260px] max-w-[700px] box-border p-10">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About EXዮም</h2>
            <p className="text-lg text-gray-600 mb-6">
              At EXዮም, we are committed to empowering ideas with cutting-edge
              technology. We specialize in innovative solutions that make your
              life simpler and more secure. Join us as we create the future of
              technology, one idea at a time.
            </p>
          </div>
        </div>

        {/* Right Section - Grid */}
        <div className="grid-cols-[1fr_1fr] hidden sm:grid gap-4 p-5">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              onViewportLeave={{ opacity: 0, y: 50 }} // Reset when leaving viewport
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% in view, and allow re-triggering
              className={`bg-white bg-opacity-5 rounded-md flex items-center justify-center p-3 text-gray-600 grid-item ${item.borderClass}`}
              style={item.style}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Grid Items Data
const gridItems = [
  {
    content:
      "Founded in 2024, EXዮም Solutions Ltd. is a premier technology solutions provider based in Bahir Dar, Ethiopia. The company was established by a group of dedicated professionals passionate about harnessing the power of technology to create lasting impacts.",
    borderClass: "border-l border-green-500",
    style: { borderLeftWidth: "5px", borderTopWidth: "5px" },
  },
  {
    content:
      "EXዮም Solutions specializes in providing innovative technology consulting and cloud platform development services, focusing on sectors such as government, international development, education, and business solutions.",
    borderClass: "border-r border-red-500",
    style: { borderRightWidth: "5px", borderTopWidth: "5px" },
  },
  {
    content:
      "The company excels in providing a broad range of services including enterprise resource planning (ERP) systems, data security solutions, mobile applications, cloud infrastructure, and business intelligence tools.",
    borderClass: "border-l border-blue-400",
    style: { borderLeftWidth: "5px", borderBottomWidth: "5px" },
  },
  {
    content:
      "With a client-centered approach, Safeware takes full responsibility for the analysis and resolution of complex issues, ensuring that every project is executed to the highest standards.",
    borderClass: "border-r border-yellow-500",
    style: { borderRightWidth: "5px", borderBottomWidth: "5px" },
  },
];

export default About;

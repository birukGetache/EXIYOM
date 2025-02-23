"use client";
import { motion } from "framer-motion";
import {
  FaCode,
  FaEthereum,
  FaBullhorn,
  FaChartLine,
  FaCogs,
  FaRobot,
  FaBrain,
  FaPalette,
  FaDesktop,
} from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="service">
      {/* Animated Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{  amount: 0.05 }} // Trigger when 20% in view
        className="py-16 service"
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }} // Start animation from bottom
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{  amount: 0.05 }} // Trigger when 20% in view
                className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform duration-300"
                style={{ border: `2px solid ${service.borderColor}` }}
              >
                <div className={`mb-6 text-${service.iconColor}-500`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
};

// Services Data Array
const servicesData = [
  {
    icon: <FaCode className="w-20 h-20 mx-auto" />,
    title: "Website Development",
    description:
      "We specialize in building responsive, mobile-friendly websites with great SEO and fast performance.",
    borderColor: "#33afff",
    iconColor: "blue",
  },
  {
    icon: <FaEthereum className="w-20 h-20 mx-auto" />,
    title: "Web3 DApps",
    description:
      "We create decentralized applications using blockchain technology for security and scalability.",
    borderColor: "purple",
    iconColor: "purple",
  },
  {
    icon: <FaBullhorn className="w-20 h-20 mx-auto" />,
    title: "Promotion",
    description:
      "We provide innovative promotional strategies to help your brand stand out and reach its audience.",
    borderColor: "orange",
    iconColor: "orange",
  },
  {
    icon: <FaChartLine className="w-20 h-20 mx-auto" />,
    title: "Digital Marketing",
    description:
      "We enhance your online presence with digital marketing strategies that drive traffic and growth.",
    borderColor: "teal",
    iconColor: "teal",
  },
  {
    icon: <FaCogs className="w-20 h-20 mx-auto" />,
    title: "ERP System for Companies",
    description:
      "Our customized ERP solutions streamline business operations for increased efficiency.",
    borderColor: "#33afff",
    iconColor: "blue",
  },
  {
    icon: <FaRobot className="w-20 h-20 mx-auto" />,
    title: "Automation with DevOps",
    description:
      "We automate workflows with DevOps practices to improve efficiency and deployment speed.",
    borderColor: "purple",
    iconColor: "purple",
  },
  {
    icon: <FaBrain className="w-20 h-20 mx-auto" />,
    title: "AI-Based Solutions",
    description:
      "Our AI solutions help businesses enhance decision-making and optimize processes.",
    borderColor: "teal",
    iconColor: "teal",
  },
  {
    icon: <FaPalette className="w-20 h-20 mx-auto" />,
    title: "Logo and Graphics Design",
    description:
      "We create custom logos and graphic designs to elevate your brand identity.",
    borderColor: "#33afff",
    iconColor: "blue",
  },
  {
    icon: <FaDesktop className="w-20 h-20 mx-auto" />,
    title: "UI Development",
    description:
      "We design intuitive and engaging user interfaces for a seamless user experience.",
    borderColor: "orange",
    iconColor: "orange",
  },
];

export default Services;

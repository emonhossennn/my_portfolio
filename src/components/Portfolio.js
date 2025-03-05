import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaNodeJs, FaAws, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiMongodb } from 'react-icons/si';

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Emon Hossen</h1>
        <div className="flex items-center space-x-6">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#experience" className="hover:text-teal-400">Experience</a>
          <div className="flex space-x-4 ml-4">
            <a 
              href="https://www.linkedin.com/in/emon-hossen-a1037b1a4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Ehmaokner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center min-h-[80vh]">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-teal-400">Emon Hossen</span>
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mt-4 mb-8">
          Full-Stack Developer | AI Enthusiast | Building Scalable Solutions
        </p>
        <div className="flex space-x-6">
          <motion.a 
            href="https://www.linkedin.com/in/emon-hossen-a1037b1a4/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full border border-teal-400 hover:bg-teal-400/10"
          >
            <FaLinkedin className="w-8 h-8" />
          </motion.a>
          <motion.a 
            href="https://github.com/Ehmaokner" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full border border-teal-400 hover:bg-teal-400/10"
          >
            <FaGithub className="w-8 h-8" />
          </motion.a>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="p-8 md:p-16 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard icon={<FaReact className="w-8 h-8"/>} title="React/Next.js"/>
          <SkillCard icon={<FaPython className="w-8 h-8"/>} title="Python"/>
          <SkillCard icon={<SiTensorflow className="w-8 h-8"/>} title="TensorFlow"/>
          <SkillCard icon={<FaNodeJs className="w-8 h-8"/>} title="Node.js"/>
          <SkillCard icon={<SiOpencv className="w-8 h-8"/>} title="OpenCV"/>
          <SkillCard icon={<SiMongodb className="w-8 h-8"/>} title="MongoDB"/>
          <SkillCard icon={<FaAws className="w-8 h-8"/>} title="AWS"/>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 md:p-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="RideSync Platform"
            tech="React · Node.js · MongoDB"
            achievement="35% faster ride matching · 500+ users"
            description="Full-stack ride-sharing platform with real-time geolocation and payment integration"
          />
          <ProjectCard 
            title="AI Fraud Detection"
            tech="Python · TensorFlow · AWS"
            achievement="95% accuracy · 10k+ transactions/day"
            description="Anomaly detection system reducing financial fraud false positives by 25%"
          />
          <ProjectCard 
            title="Smart Vending Machine"
            tech="OpenCV · Raspberry Pi"
            achievement="20% cost reduction · Face recognition"
            description="Computer vision system for real-time inventory tracking"
          />
          <ProjectCard 
            title="Mental Health Chatbot"
            tech="NLP · Flask · WhatsApp API"
            achievement="90% user satisfaction"
            description="AI-powered counseling assistant handling 1,000+ sessions"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-8 md:p-16 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <ExperienceItem 
            role="Freelance Full-Stack Developer"
            duration="2023 - Present"
            achievements={[
              'Delivered 10+ production apps boosting client revenue by $50K+',
              '40% SEO improvement through Next.js migration'
            ]}
          />
          <ExperienceItem 
            role="Autonomous Engineer, BRACU Duburi"
            duration="2022 - 2023"
            achievements={[
              '30% accuracy boost in drone obstacle detection',
              'Real-time object recognition in low-light environments'
            ]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 md:p-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/emon-hossen-a1037b1a4/"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
            <a 
              href="https://github.com/Ehmaokner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaGithub className="w-10 h-10" />
            </a>
          </div>
          <p className="mb-6 text-lg">
            📧 Direct email:{" "}
            <a href="mailto:mdemonhossain09876@gmail.com" className="text-teal-400">
              mdemonhossain09876@gmail.com
            </a>
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white h-32"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const SkillCard = ({ icon, title }) => (
  <motion.div 
    className="flex flex-col items-center p-4 bg-gray-700 rounded-lg"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-teal-400 mb-2">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </motion.div>
);

const ProjectCard = ({ title, tech, achievement, description }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg"
    whileHover={{ y: -5 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-teal-400 mb-2">{tech}</p>
    <p className="text-sm text-gray-300 mb-2">🏆 {achievement}</p>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const ExperienceItem = ({ role, duration, achievements }) => (
  <div className="border-l-4 border-teal-400 pl-4">
    <h3 className="text-xl font-semibold">{role}</h3>
    <p className="text-gray-400 text-sm mb-2">{duration}</p>
    <ul className="list-disc pl-6 space-y-2">
      {achievements.map((item, index) => (
        <li key={index} className="text-gray-300">{item}</li>
      ))}
    </ul>
  </div>
);

export default Portfolio;
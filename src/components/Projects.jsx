import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Student Management System",
      description:
        "A backend-focused web application built to manage student records and attendance. The system implements authentication, protected routes, and CRUD operations while maintaining clean data flow between forms, backend logic, and the database. The project was developed to understand real-world backend structure and relational data handling.",
      tech: ["Python", "Flask", "SQL", "HTML", "CSS"],
      image: "/images/student-management-preview.png",
      liveLink: "https://github.com/tanmayNapte/Student-Management-System",
      highlights: [
        "User authentication and login-protected routes",
        "Create, update, and delete student records",
        "Attendance management",
        "Relational database integration",
      ],
    },
    {
      title: "Task Management System",
      description:
        "A Django-based task management application that allows users to create and manage personal tasks. The project emphasizes Django ORM usage, session-based authentication, and structured backend logic. It was built to gain hands-on experience with Django’s request-response cycle and database abstraction.",
      tech: ["Python", "Django", "SQLite", "HTML", "CSS", "Bootstrap"],
      image: "/images/task-manager-preview.png",
      liveLink: "https://github.com/tanmayNapte/Task-Management-System",
      highlights: [
        "User authentication and session handling",
        "Task creation, update, and deletion",
        "Django ORM for database operations",
        "Clean backend structure",
      ],
    },
    {
      title: "Smart Expense Tracker",
      description:
        "A group-based expense tracking system designed to simplify shared expense management. The application calculates balances, handles settlements between users, and enforces backend validations to maintain data consistency. This project strengthened understanding of relational models and edge-case handling.",
      tech: ["Python", "Flask", "SQLAlchemy", "PostgreSQL"],
      image: "/images/expense-tracker-preview.png",
      liveLink: "https://github.com/tanmayNapte/Smart-shared-expence-tracker ",
      highlights: [
        "Group-based expense tracking",
        "Automatic balance calculation",
        "Settlement handling",
        "Login-protected backend routes",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">
                {activeProject + 1}/{projects.length}
              </div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20"
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3
                    className={`font-medium text-sm mb-1 ${
                      activeProject === index ? "text-light" : "text-muted"
                    }`}
                  >
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div
            className="hidden md:block md:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index
                    ? "border-opacity-100"
                    : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                <h3
                  className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}
                >
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {projects[activeProject].title}
              </h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                  KEY HIGHLIGHTS
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projects[activeProject].liveLink && (
                <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
                  <a
                    href={projects[activeProject].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    VIEW PROJECT
                    <svg
                      className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
